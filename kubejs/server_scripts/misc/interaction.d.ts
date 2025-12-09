interface ProjectileConfig {
  projectile: { item: Special.Item };
  particles: ProjectileSettings.Particles;
  explosion: ProjectileSettings.Explosion;
  createAutoJson?: ProjectileSettings.CreateAutoJSON;
  AOE?: ProjectileSettings.AOE;
  sound?: ProjectileSettings.Sound;
}

namespace ProjectileSettings {
  interface CreateAutoJSON {
    fileName: string;
    reloadTicks: number;
    damage: number;
    knockback: number;
    drag: number;
    velocityMultiplier: number;
    gravityMultiplier: number;
    sticky: boolean;
    soundPitch: number;
  }

  interface ParticlesEnabledNoColor {
    /** Whether the ammo emits particles or not. */
    enabled: true;
    spread: number;
    size: number;
    speed: number;
    count: number;
    type: Special.ParticleType;
    /** Specifies whether the particle's color can be changed. */
    hasColor: false;
  }

  interface ParticlesEnabledWithColor extends ParticlesEnabledNoColor {
    hasColor: true;
    /** The color of the particle. */
    color: [red: number, green: number, blue: number];
  }

  interface ParticlesDisabled {
    enabled: false;
  }

  type Particles = ParticlesEnabledNoColor | ParticlesEnabledWithColor | ParticlesDisabled;

  interface ExplosionEnabled {
    enabled: true;
    strength: number;
    damageTerrain: boolean;
    causesFire?: boolean;
    silent?: boolean;
  }

  interface ExplosionDisabled {
    enabled: false;
  }

  type Explosion = ExplosionEnabled | ExplosionDisabled;

  interface AOE_Enabled {
    enabled: true;
    effectList: Effect[];
    sound: Sound;
  }

  interface Effect {
    potionEffect: Special.MobEffect;
    potionTime: number;
    potionAmplifier: number;
    potionHideParticles: boolean;
    range: `${bigint}`; // This should be a `number` but there's some jank happening on Java side
  }

  interface SoundEnabled {
    enabled: true;
    soundList: SoundCommand[];
  }

  type StringSoundSource = Extract<Internal.SoundSource_, string>;

  interface SoundCommand {
    soundName: Special.SoundEvent;
    soundType: StringSoundSource;
    soundRange: `${bigint}`; // This should be a `number` but there's some jank happening on Java side
    soundVolume: number;
    soundPitch: number;
  }

  interface SoundDisabled {
    enabled: false;
  }

  type Sound = SoundEnabled | SoundDisabled;
}
