interface RouterConfigOption {
	name: string
}

interface RouterConfigOptions {
	auth: RouterConfigOption
	signin: RouterConfigOption
	signup: RouterConfigOption

	home: RouterConfigOption
	profile: RouterConfigOption
}