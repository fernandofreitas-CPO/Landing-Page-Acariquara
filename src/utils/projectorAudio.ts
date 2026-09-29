/**
 * Procedural Film Projector Mechanical Sound Engine via Web Audio API.
 * Synthesizes the authentic rhythmic click-clack of a 35mm projector gate
 * and the continuous motor hum, with zero external audio assets.
 */

class ProjectorAudioEngine {
  private ctx: AudioContext | null = null;
  private isRunning: boolean = false;
  private masterGain: GainNode | null = null;
  private clickTimer: number | null = null;
  private motorOsc: OscillatorNode | null = null;
  private humOsc: OscillatorNode | null = null;
  private noiseSource: AudioBufferSourceNode | null = null;

  public init() {
    if (this.ctx) return;
    const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    this.ctx = new AudioCtx();
  }

  public async start(): Promise<boolean> {
    try {
      this.init();
      if (!this.ctx) return false;
      if (this.ctx.state === 'suspended') {
        await this.ctx.resume();
      }

      const now = this.ctx.currentTime;
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.001, now);
      this.masterGain.gain.exponentialRampToValueAtTime(0.24, now + 0.3);
      this.masterGain.connect(this.ctx.destination);

      // 1. Motor drone (64Hz with subtle sub harmonic)
      this.motorOsc = this.ctx.createOscillator();
      this.motorOsc.type = 'sawtooth';
      this.motorOsc.frequency.setValueAtTime(68, now);

      const motorFilter = this.ctx.createBiquadFilter();
      motorFilter.type = 'lowpass';
      motorFilter.frequency.setValueAtTime(260, now);

      const motorGain = this.ctx.createGain();
      motorGain.gain.setValueAtTime(0.045, now);

      this.motorOsc.connect(motorFilter);
      motorFilter.connect(motorGain);
      motorGain.connect(this.masterGain);
      this.motorOsc.start(now);

      // 2. Optical soundtrack hiss (bandpassed pink/white noise)
      const bufferSize = this.ctx.sampleRate * 2;
      const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = noiseBuffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * 0.12;
      }
      this.noiseSource = this.ctx.createBufferSource();
      this.noiseSource.buffer = noiseBuffer;
      this.noiseSource.loop = true;

      const hissFilter = this.ctx.createBiquadFilter();
      hissFilter.type = 'bandpass';
      hissFilter.frequency.setValueAtTime(1400, now);
      hissFilter.Q.setValueAtTime(1.8, now);

      const hissGain = this.ctx.createGain();
      hissGain.gain.setValueAtTime(0.03, now);

      this.noiseSource.connect(hissFilter);
      hissFilter.connect(hissGain);
      hissGain.connect(this.masterGain);
      this.noiseSource.start(now);

      // 3. Sprocket click generator (18 clicks/sec = ~55ms interval)
      const playClick = () => {
        if (!this.ctx || !this.isRunning || !this.masterGain) return;
        const clickNow = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const clickFilter = this.ctx.createBiquadFilter();
        const clickGain = this.ctx.createGain();

        osc.type = 'square';
        osc.frequency.setValueAtTime(180, clickNow);
        osc.frequency.exponentialRampToValueAtTime(45, clickNow + 0.015);

        clickFilter.type = 'bandpass';
        clickFilter.frequency.setValueAtTime(650, clickNow);
        clickFilter.Q.setValueAtTime(3.0, clickNow);

        clickGain.gain.setValueAtTime(0.12, clickNow);
        clickGain.gain.exponentialRampToValueAtTime(0.0001, clickNow + 0.018);

        osc.connect(clickFilter);
        clickFilter.connect(clickGain);
        clickGain.connect(this.masterGain);

        osc.start(clickNow);
        osc.stop(clickNow + 0.02);
      };

      this.isRunning = true;
      this.clickTimer = window.setInterval(playClick, 55);

      return true;
    } catch {
      return false;
    }
  }

  public stop() {
    if (!this.isRunning) return;
    if (this.clickTimer) {
      clearInterval(this.clickTimer);
      this.clickTimer = null;
    }

    if (this.masterGain && this.ctx) {
      try {
        const now = this.ctx.currentTime;
        this.masterGain.gain.setValueAtTime(this.masterGain.gain.value, now);
        this.masterGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.2);

        setTimeout(() => {
          this.motorOsc?.stop();
          this.noiseSource?.stop();
          this.motorOsc?.disconnect();
          this.noiseSource?.disconnect();
          this.masterGain?.disconnect();
          this.isRunning = false;
        }, 220);
      } catch {
        this.isRunning = false;
      }
    } else {
      this.isRunning = false;
    }
  }

  public getStatus(): boolean {
    return this.isRunning;
  }
}

export const projectorAudio = new ProjectorAudioEngine();
