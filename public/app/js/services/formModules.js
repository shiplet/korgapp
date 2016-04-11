'use strict';

const FormModules = function() {

	this.EditSelect_1 = {

		voice: [
			{ label: 'Synth/Vocoder', values: [ 'synthesizer', 'vocoder' ], type: 'dropdown', name: 'synth_vocoder' },
			{ label: 'Single/Layer', values: [ 'single', 'layer' ], type: 'dropdown', name: 'single_layer' },
			{ label: 'Voice Assign', values: ['mono', 'poly', 'unison'], type: 'dropdown', name: 'voice_assign' },
			{ label: 'Trigger Mode', values: ['single', 'multi'], type: 'dropdown', name: 'trigger_mode' },
			{ label: 'Unison Detune', values: '0...99', type: 'text', name: 'unison_detune' },
		],

		pitch: [
			{ label: 'Transpose', values: '-24...24', type: 'text', name: 'transpose' },
			{ label: 'Tune', values: '-50...50', type: 'text', name: 'tune' },
			{ label: 'Portamento', values: '0...127', type: 'text', name: 'portamento' },
			{ label: 'Bend Range', values: '-12...12', type: 'text', name: 'bend_range' },
			{ label: 'Vibrato Int', values: '-63...63', type: 'text', name: 'vibrato_int' }
		],

		osc_1: [
			{ label: 'Wave', values: ['saw', 'square', 'triangle', 'sine', 'vox', 'dwgs', 'noise', 'audio in'], type: 'dropdown', name: 'wave' },
			{ label: 'Control 1', values: '0...127 / ---', type: 'text', name: 'control_1' },
			{ label: 'Control 2', values: '0...127 / 1...64', type: 'text', name: 'control_2' },
			{ label: false },
			{ label: false },
		],

		osc_2: [
			{ label: 'Wave', values: ['saw', 'square', 'triangle'], type: 'dropdown', name: 'wave' },
			{ label: 'Osc Mod', values: ['off', 'ring', 'sync', 'ringSync'], type: 'dropdown', name: 'osc_mod' },
			{ label: 'Semitone', values: '-24...24',  type: 'text', name: 'semitone' },
			{ label: 'Tune', values: '-63...63', type: 'text', name: 'tune' },
			{ label: false }
		],

		mixer: [
			{ label: 'Osc 1 Level', values: '0...127', type: 'text', name: 'osc_1_level' },
			{ label: 'Osc 2 Level', values: '0...127', type: 'text', name: 'osc_2_level' },
			{ label: 'Noise Level', values: '0...127', type: 'text', name: 'noise_level' },
			{ label: false },
			{ label: false }
		],

		filter: [
			{ label: 'Type', 	values: ['-24dB LPF', '-12dB LPF', '-12dB BPF', '-12dB HPF'], type: 'dropdown', name: 'type' },
			{ label: 'Cutoff', values: '0...127', type: 'text', name: 'cutoff' },
			{ label: 'Resonance', values: '0...127', type: 'text', name: 'resonance' },
			{ label: 'Filter EG Int', values: '-63...63', type: 'text', name: 'filter_eg_int' },
			{ label: 'Filter Key Track', values: '-63...63', type: 'text', name: 'filter_key_track' }
		],

		filter_eg: [
			{ label: 'Attack', values: '0...127', type: 'text', name: 'attack' },
			{ label: 'Decay', values: '0...127', type: 'text', name: 'decay' },
			{ label: 'Sustain', values: '0...127', type: 'text', name: 'sustain' },
			{ label: 'Release', values: '0...127', type: 'text', name: 'release' },
			{ label: 'EG Reset', values: ['off', 'on'], type: 'dropdown', name: 'eg_reset' }
		],

		amp: [
			{ label: 'Level', values: '0...127', type: 'text', name: 'level' },
			{ label: 'PanPot', values: 'L63...center...R63', type: 'text', name: 'panpot' },
			{ label: 'Distortion', values: ['off', 'on'], type: 'dropdown', name: 'distortion' },
			{ label: 'KBD Track', values: '-63...63', type: 'text', name: 'kbd_track' },
			{ label: false }
		],

		amp_eg: [
			{ label: 'Attack', values: '0...127', type: 'text', name: 'ak' },
			{ label: 'Decay', values: '0...127', type: 'text', name: 'dy' },
			{ label: 'Sustain', values: '0...127', type: 'text', name: 'st' },
			{ label: 'Release', values: '0...127', type: 'text', name: 'rl' },
			{ label: 'EG Reset', values: ['off', 'on'], type: 'dropdown', name: 'er' }
		],

		lfo_1: [
			{ label: 'Wave', values: ['saw', 'square1', 'triangle', 'sample&hold'], type: 'dropdown', name: 'wave' },
			{ label: 'Key Sync', values: ['off', 'timbre', 'voice'], type: 'dropdown', name: 'key_sync' },
			{ label: 'Tempo Sync', values: ['off', 'on'], type: 'dropdown', name: 'tempo_sync' },
			{ label: 'Frequency', values: '0...127', type: 'text', name: 'frequency' },
			{ label: false }
		],

		lfo_2: [
			{ label: 'Wave', values: ['saw', 'square2', 'sine', 'sample&hold'], type: 'dropdown', name: 'wave' },
			{ label: 'Key Sync', values: ['off', 'timbre', 'voice'], type: 'dropdown', name: 'key_sync' },
			{ label: 'Tempo Sync', values: ['off', 'on'], type: 'dropdown', name: 'tempo_sync' },
			{ label: 'Sync Note', values: '1.1 ... 1.32', type: 'text', name: 'sync_note' },
			{ label: false }
		]

	};

	this.EditSelect_2 = {

		patch_1: [
			{ label: 'Source', values: ['filter EG', 'amp EG', 'LFO 1', 'LFO 2', 'velocity', 'KBD track', 'pitch bend', 'MOD wheel'], type: 'dropdown', name: 'source' },
			{ label: 'Dest', values: ['pitch', 'osc 2 tune', 'osc 1 control 1', 'noise level', 'cutoff', 'amp', 'pan', 'lfo 2 frequency'], type: 'dropdown', name: 'dest' },
			{ label: 'Mod Int', values: '-63...63', type: 'text', name: 'mod_int' },
			{ label: false },
			{ label: false }
		],

		patch_2: [
			{ label: 'Source', values: ['filter EG', 'amp EG', 'LFO 1', 'LFO 2', 'velocity', 'KBD track', 'pitch bend', 'MOD wheel'], type: 'dropdown', name: 'source' },
			{ label: 'Dest', values: ['pitch', 'osc 2 tune', 'osc 1 control 1', 'noise level', 'cutoff', 'amp', 'pan', 'lfo 2 frequency'], type: 'dropdown', name: 'dest' },
			{ label: 'Mod Int', values: '-63...63', type: 'text', name: 'mod_int' },
			{ label: false },
			{ label: false }
		],

		patch_3: [
			{ label: 'Source', values: ['filter EG', 'amp EG', 'LFO 1', 'LFO 2', 'velocity', 'KBD track', 'pitch bend', 'MOD wheel'], type: 'dropdown', name: 'source' },
			{ label: 'Dest', values: ['pitch', 'osc 2 tune', 'osc 1 control 1', 'noise level', 'cutoff', 'amp', 'pan', 'lfo 2 frequency'], type: 'dropdown', name: 'dest' },
			{ label: 'Mod Int', values: '-63...63', type: 'text', name: 'mod_int' },
			{ label: false },
			{ label: false }
		],

		patch_4: [
			{ label: 'Source', values: ['filter EG', 'amp EG', 'LFO 1', 'LFO 2', 'velocity', 'KBD track', 'pitch bend', 'MOD wheel'], type: 'dropdown', name: 'source' },
			{ label: 'Dest', values: ['pitch', 'osc 2 tune', 'osc 1 control 1', 'noise level', 'cutoff', 'amp', 'pan', 'lfo 2 frequency'], type: 'dropdown', name: 'dest' },
			{ label: 'Mod Int', values: '-63...63', type: 'text', name: 'mod_int' },
			{ label: false },
			{ label: false }
		],

		mod_fx: [
			{ label: 'Type', values: ['flanger / chorus', 'ensemble', 'phaser'], type: 'dropdown', name: 'type' },
			{ label: 'LFO Speed', values: '0...127', type: 'text', name: 'lfo_speed' },
			{ label: 'Effect Depth', values: '0...127', type: 'text', name: 'effect_depth' },
			{ label: false },
			{ label: false }
		],

		delay: [
			{ label: 'Type', values: ['stereo delay', 'cross delay', 'l/r delay'], type: 'dropdown', name: 'type' },
			{ label: 'Tempo Sync', values: ['off', 'on'], type: 'dropdown', name: 'tempo_sync' },
			{ label: 'Delay Time', values: '0...127', type: 'text', name: 'delay_time' },
			{ label: 'Delay Depth', values: '0...127', type: 'text', name: 'delay_depth' },
			{ label: false },
		],

		eq: [
			{ label: 'Low EQ Freq', values: '40Hz...1.00kHz', type: 'text', name: 'low_eq_freq' },
			{ label: 'Low EQ Gain', values: '-12...12', type: 'text', name: 'low_eq_gain' },
			{ label: 'High EQ Freq', values: '1.00kHz...18.0kHz', type: 'text', name: 'high_eq_freq' },
			{ label: 'High EQ Gain', values: '-12...12', type: 'text', name: 'high_eq_gain' },
			{ lable: false } 
		],

		arp_a: [
			{ label: 'Tempo', values: '20...300', type: 'text', name: 'tempo' },
			{ label: 'Resolution', values: '1/24...1/4', type: 'text', name: 'resolution' },
			{ label: 'Gate', values: '0...100', type: 'text', name: 'gate' },
			{ label: 'Type', values: ['up', 'down', 'alternate 1', 'alternate 2', 'random', 'trigger'], type: 'dropdown', name: 'type' },
			{ label: 'Range', values: '1...4', type: 'text', name: 'range' }
		],

		arp_b: [
			{ label: 'Latch', values: ['off', 'on'], type: 'dropdown', name: 'latch' },
			{ label: 'Swing', values: '-100...100', type: 'text', name: 'swing' },
			{ label: 'Key Sync', values: ['off', 'on'], type: 'dropdown', name: 'key_sync' },
			{ label: 'Last Step', values: '1...8', type: 'text', name: 'last_step' },
			{ label: 'Target Timbre', values: ['both', 'timbre 1', 'timbre 2'], type: 'dropdown', name: 'target_timbre' },
		],

		global: [
			{ label: 'Master Tune', values: '30.0...50.0', type: 'text', name: 'master_tune' },
			{ label: 'Master Transpose', values: '-12...12', type: 'text', name: 'master_transpose' },
			{ label: 'Velocity Curve', values: 'Curve, 1...127', type: 'text', name: 'velocity_curve' },
			{ label: 'Position', values: ['post kbd', 'pre tg'], type: 'dropdown', name: 'position' },
			{ label: 'Audio In Thru', values: ['off', 'on'], type: 'dropdown', name: 'audio_in_thru' }
		],

		midi: [
			{ label: 'MIDI Ch', values: '1...16', type: 'text', name: 'midi_ch' },
			{ label: 'Local', values: ['off', 'on'], type: 'dropdown', name: 'local' },
			{ label: 'Clock', values: ['internal', 'external', 'auto'], type: 'dropdown', name: 'clock' },
			{ label: false },
			{ label: false }
		]

	};

};

export default {
	name: 'FormModules',
	fn: FormModules
};