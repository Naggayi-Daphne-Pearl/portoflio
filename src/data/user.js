const INFO = {
	main: {
		title: "Daphne ~ Portfolio",
		name: "Naggayi Daphne Pearl",
	},

	socials: {
		github: "https://github.com/Naggayi-Daphne-Pearl",
		linkedin: "https://www.linkedin.com/in/daphne-naggayi-68070b185",
	},

	homepage: {
		title: "Hi, I'm Daphne. I build apps that help people.",
		description:
			"I'm a full-stack developer in Kampala, Uganda. For the past three years I've been building websites and mobile apps for finance and healthcare — from banking tools for local savings groups to apps that bring care to people in rural areas. I love taking a messy, real-world problem and turning it into something that simply works.",
	},

	about: {
		title: "Hi, I'm Daphne Pearl, and I live in Kampala, Uganda.",
		description:
			"I've spent the last three years building software that people rely on every day. Most of my work has been in finance and healthcare — designing the apps, figuring out how all the pieces fit together, and making sure everything stays fast and dependable, even where phones are basic and the internet comes and goes. I enjoy working closely with a team, asking plenty of questions, and shipping things that genuinely make life easier.",
	},

	projects: [
		{
			title: "Kanzu Banking",
			featured: true,
			description:
				"A phone app that lets members of savings groups and investment clubs check their balances, take out loans and keep an eye on their money — without queuing at an office.",
			metric: "Up and running 99.9% of the time",
			tags: ["Flutter", "Dart", "REST APIs"],
			linkText: "View on Google Play",
			link: "https://play.google.com/store/search?q=kanzu+banking&c=apps&hl=en",
		},

		{
			title: "LipaCart",
			featured: true,
			description:
				"An app for ordering fresh groceries from home. It suggests recipes and builds your shopping list for you, so planning meals feels a lot less like a chore.",
			tags: ["Web App", "E-commerce"],
			linkText: "Visit site",
			link: "https://www.lipacart.com/",
		},

		{
			title: "Profile Zone",
			featured: true,
			description:
				"A simple way to build your own website, bio page or digital business card — no designer and no coding needed. I helped design the part that makes it all feel effortless.",
			metric: "From sign-up to a live site in under 5 minutes",
			tags: ["AI / No-Code", "System Design", "Databases"],
			linkText: "Visit site",
			link: "https://profile.zone/",
		},

		{
			title: "YoKlinic",
			description:
				"An online space where patients can find doctors and book virtual visits by chat, call or message — handy when getting to a clinic isn't easy.",
			tags: ["Next.js", "TypeScript", "Telemedicine"],
			linkText: "Visit site",
			link: "https://www.yoklinic.com/",
		},

		{
			title: "YoKlinic — Web & Dashboard",
			description:
				"The web side of YoKlinic, where health workers manage their patients. I built it to be quick, tidy and easy to use, with information that updates the moment something changes.",
			metric: "Made the app about 15% faster",
			tags: ["TypeScript", "Sass", "WebSockets"],
			linkText: "Visit site",
			link: "https://www.yoklinic.com/",
		},

		{
			title: "MobiKlinic App",
			description:
				"A mobile app that helps community health workers bring basic care to people in rural areas,folks who'd otherwise have to travel a long way for it.",
			metric: "Online and working 99%+ of the time",
			tags: ["React Native", "AWS"],
			linkText: "View on Google Play",
			link: "https://play.google.com/store/apps/details?id=com.mobiklinicapp&pcampaignid=web_share",
		},

		{
			title: "Facial Biometrics — MobiKlinic",
			description:
				"A feature that recognises patients by their fingerprint, so the right person is matched to the right records — quickly and safely — even out in the field.",
			tags: ["React Native", "Simprints SDK"],
			linkText: "Watch demo",
			link: "https://drive.google.com/file/d/1KI8Dxm8Ze-AFgqLbM3GM6j4YWq18Avv8/view",
		},

		{
			title: "Renal Project — MobiKlinic",
			description:
				"A mobile app that helps spot the early signs of kidney disease, built to keep working reliably even on basic phones and shaky connections.",
			tags: ["React Native", "AWS", "CI/CD"],
		},
	],
};

export default INFO;
