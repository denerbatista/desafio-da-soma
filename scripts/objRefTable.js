const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Plugins.Touch,
		C3.Behaviors.Platform,
		C3.Behaviors.bound,
		C3.Behaviors.Bullet,
		C3.Plugins.Text,
		C3.Plugins.Particles,
		C3.Plugins.Keyboard,
		C3.Behaviors.solid,
		C3.Plugins.Touch.Cnds.IsTouchingObject,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.System.Cnds.CompareBoolVar,
		C3.Behaviors.Platform.Acts.SimulateControl,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.Sprite.Acts.Spawn,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.System.Exps.int,
		C3.Plugins.System.Exps.random,
		C3.Plugins.System.Acts.ResetEventVar,
		C3.Plugins.System.Acts.CreateObject,
		C3.Plugins.System.Cnds.Every,
		C3.Plugins.System.Acts.SetBoolVar,
		C3.Plugins.Text.Acts.Destroy,
		C3.Plugins.Touch.Cnds.OnTapGestureObject
	];
};
self.C3_JsPropNameTable = [
	{Play: 0},
	{Toque: 0},
	{Fundo: 0},
	{Plataforma: 0},
	{RestritoAoLayout: 0},
	{Personagem: 0},
	{Direita: 0},
	{Esquerda: 0},
	{somaUm: 0},
	{Projétil: 0},
	{placar: 0},
	{valorSomado: 0},
	{particulaSoma: 0},
	{Teclado: 0},
	{valorObjetivo: 0},
	{textoObjetivo: 0},
	{Sólido: 0},
	{chão: 0},
	{bomba: 0},
	{explosão: 0},
	{coracao: 0},
	{gameOverPergunta: 0},
	{gameOverRespostaSim: 0},
	{Texto: 0},
	{gameOverRespostaNao: 0},
	{Fundo2: 0},
	{soma: 0},
	{objetivoSoma: 0},
	{vivoMorto: 0}
];

self.InstanceType = {
	Play: class extends self.ISpriteInstance {},
	Toque: class extends self.IInstance {},
	Fundo: class extends self.ISpriteInstance {},
	Personagem: class extends self.ISpriteInstance {},
	Direita: class extends self.ISpriteInstance {},
	Esquerda: class extends self.ISpriteInstance {},
	somaUm: class extends self.ISpriteInstance {},
	placar: class extends self.ISpriteInstance {},
	valorSomado: class extends self.ITextInstance {},
	particulaSoma: class extends self.IParticlesInstance {},
	Teclado: class extends self.IInstance {},
	valorObjetivo: class extends self.ITextInstance {},
	textoObjetivo: class extends self.ITextInstance {},
	chão: class extends self.ISpriteInstance {},
	bomba: class extends self.ISpriteInstance {},
	explosão: class extends self.ISpriteInstance {},
	coracao: class extends self.ISpriteInstance {},
	gameOverPergunta: class extends self.ITextInstance {},
	gameOverRespostaSim: class extends self.ITextInstance {},
	Texto: class extends self.ITextInstance {},
	gameOverRespostaNao: class extends self.ITextInstance {},
	Fundo2: class extends self.ISpriteInstance {}
}