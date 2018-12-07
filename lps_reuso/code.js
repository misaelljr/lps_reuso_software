/*
Aluno: Misael Costa Júnior
NUSP: 9254469
Trabalho Final da disciplina de Reuso de Software (SSC5904)
ICMC-USP
*/

function getJsonModelo(){
	modelo = localStorage.getItem("modelo");

	product_name = modelo.substring(0, modelo.indexOf(';')).replace('ProductName: ', "").trim();

	modelo = modelo.substring(modelo.indexOf(';') + 1);

	F1 = modelo.substring(0, modelo.indexOf(';')).replace('F1: ', "").trim() == 'true';

	modelo = modelo.substring(modelo.indexOf(';') + 1);
	
	F2 = modelo.substring(0, modelo.indexOf(';')).replace('F2: ', "").trim() == 'true';
	
	modelo = modelo.substring(modelo.indexOf(';') + 1);
	
	F3 = modelo.substring(0, modelo.indexOf(';')).replace('F3: ', "").trim() == 'true';

	modelo = modelo.substring(modelo.indexOf(';') + 1);
	
	F4 = modelo.substring(0, modelo.indexOf(';')).replace('F4: ', "").trim() == 'true';

	modelo = modelo.substring(modelo.indexOf(';') + 1);
	
	F5 = modelo.substring(0, modelo.indexOf(';')).replace('F5: ', "").trim() == 'true';

	modelo = modelo.substring(modelo.indexOf(';') + 1);
	
	F6 = modelo.substring(0, modelo.indexOf(';')).replace('F6: ', "").trim() == 'true';

	modelo = modelo.substring(modelo.indexOf(';') + 1);
	
	codigo = "Product Name = " + product_name + "\n\n";

	if(F1 == true){
		codigo += 	"#feature 1\n class Inscricao(models.Model):\n"+
				    "\t inscricao_id = models.AutoField(primary_key = True)\n"+
				    "\t data = models.DateField()\n"+
				    "\t participante = models.ForeignKey(Participante, on_delete=models.CASCADE, blank=True)\n"+
				    "\t evento = models.ForeignKey(Apresentacao, on_delete=models.CASCADE, blank=True)\n"+
				    "\t confirmacao = models.BooleanField(default=False)\n\n"+
				    "\t def __str__(self):\n"+
				        "\t \t return self.participante.nome\n\n"

		codigo += 	"#feature 1\n class Participante(models.Model): \n" +
				    "\t participante_id = models.AutoField(primary_key = True)\n" +
				    "\t nome = models.CharField(max_length=255)\n" +
				    "\t instituicao = models.CharField(max_length=255)\n" +
				    "\t data_inscricao = models.DateField()\n" +
				    "\t email = models.EmailField()\n" +
				    "\t cpf = models.CharField(max_length=255)\n" +
				    "\t senha = models.CharField(max_length=255)\n\n" +
				    "\t def __str__(self):\n" +
				        "\t \t return self.nome	\n\n\n"
	}

	if(F2 == true){
		codigo += 	"#feature 2\n class Programacao(models.Model):\n"+
				    "\t programacao_id = models.AutoField(primary_key = True)\n"+
				    "\t evento = models.ForeignKey(Apresentacao, on_delete=models.CASCADE, blank=True)\n"+
				    "\t data = models.DateField()\n\n"+
				    "\t def __str__(self):\n"+
				    	"\t \t return self.data\n\n"

		codigo +=   "#feature 2\n class Apresentacao(models.Model): \n" +
    				"\t evento_id = models.AutoField(primary_key = True) \n" +
    				"\t titulo = models.CharField(max_length=255) \n" +
    				"\t descricao = models.TextField()\n"+
    				"\t data = models.DateField() \n\n"+
    				"\t def __str__(self):\n"+
        			"\t \t	return self.titulo\n\n\n"
	}

	if(F3 == true){
		codigo += 	"#feature 3\n class Trabalho(models.Model):\n"+
				    "\t trabalho_id = models.AutoField(primary_key = True)\n"+
				    "\t titulo = models.CharField(max_length=255)\n"+
				    "\t instituicao = models.CharField(max_length=255)\n"+
				    "\t participante = models.ForeignKey(Participante, on_delete=models.CASCADE, blank=True)\n"+
				    "\t conteudo = models.TextField()\n"+
				    "\t confirmacao = models.BooleanField(default=False)\n\n"+
					"\t def __str__(self):\n"+
    					"\t \t return self.titulo\n\n\n"
	}

	if(F4 == true){
		codigo += "#feature 5\n class Instituicao(models.Model):\n"+
				"\t instituicao_id = models.AutoField(primary_key = True)\n"+
				"\t nome = models.CharField(max_length=255)\n"+
				"\t site = models.CharField(max_length=255)\n"+
				"\t email = models.CharField(max_length=255)\n"+
				"\t contato = models.CharField(max_length=255)\n\n"+
				"\t def __str__(self):\n"+
					"\t \t return self.nome\n\n\n"
	}

	if(F5 == true){
		codigo += "#feature 5\n class CBSoft(models.Model):\n"+
				"\t evento_id = models.AutoField(primary_key = True)\n"+
				"\t nome = models.CharField(max_length=255)\n"+
				"\t site = models.CharField(max_length=255)\n"+
				"\t email = models.CharField(max_length=255)\n"+
				"\t contato = models.CharField(max_length=255)\n\n"+
				"\t def __str__(self):\n"+
					"\t \t return self.nome\n\n\n"
	}

	if(F6 == true){
		codigo += "#feature 5\n class SEnC(models.Model):\n"+
				"\t evento_id = models.AutoField(primary_key = True)\n"+
				"\t nome = models.CharField(max_length=255)\n"+
				"\t site = models.CharField(max_length=255)\n"+
				"\t email = models.CharField(max_length=255)\n"+
				"\t contato = models.CharField(max_length=255)\n\n"+
				"\t def __str__(self):\n"+
					"\t \t return self.nome\n\n\n"
	}

	document.getElementById("txtCodigo").value = codigo;	
}
