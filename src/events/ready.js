// Applies only once when the bot is ready.
module.exports = {
	name:'ready',
	once:true,
	execute(client) {
		console.log(`${client.user.tag} logged in!`);
	},
};
