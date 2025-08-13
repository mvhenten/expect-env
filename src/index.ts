// "safe" env, e.g. checks if the variable is set.
// Does not protect against writes to process.env!
export const env = new Proxy<Record<string, string>>(
	process.env as unknown as Record<string, string>,
	{
		get(target, prop: string): string {
			if (!target[prop]) throw new Error(`process.env.${prop} is not set!`);
			return target[prop];
		},
	},
);
