module.exports.index = function(application,req,res){

	const connection = application.config.dbConnection();
	const livroDAO = new application.app.models.LivroDAO(connection);

	livroDAO.get5LastestBooks(function(error, result){
		res.render("home/index", {book : result});
	});
};
