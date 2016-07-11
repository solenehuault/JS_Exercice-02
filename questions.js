/**
 * Exercice sur les chaines de caractères.
 * Trouvez la façon de faire la plus optimal.
 * Il peut y avoir plusieur façon de faire.
 */

/**
 * Exercices sur les nombres et les caluls mathématiques
 */

function tailleString(str) {
	return (str.length);
};

function remplaceCar(str, element, remplace) {
	return (str.replace(element, remplace));
};

function concatString(str1, str2) {
	return (str1+str2);
};

function afficherCar(str, n) {
	return (str.charAt(n-1));
};

function afficherNCar(str, n) {
	return (str.substring(0,9));
};

function majusculeString(str) {
	return (str.toUpperCase());
};

function SupprEspaceString(str) {
	return (str.trim());
};

function IsString(str) {
	 return (typeof str === 'string');
};

function AfficherExtensionString(str) {
	var pos = str.lastIndexOf(".");
	return str.substring(pos+1, str.length);
};

function NombreEspaceString(str) {
	return str.match(/[" "]/g).length;
};

function InverseString(str) {
	return str.split("").reverse().join("");
};

function minusculeString(str) {
	return str.toLowerCase();
};

function countDistinctCar(str) {
	var listeChar = [];
	for (var i = 0 ; i < str.length ; i++) {
		var index = str.charAt(i);
		listeChar[index] = "Coucou Toto !";
	}
	var j = 0;
	//Parcours mon object
	for (x in listeChar) {
		j++;
	}
	return j;
};




function calculPuissance(n, e) {
	return Math.pow(n, e);
};

function valeurAbsolue(n) {
	return Math.abs(n);
};

function valeurAbsolueArray(array) {
	return array.map(Math.abs);
};

function sufaceCercle(n) {
	var r = Math.PI * n * n;
	return Math.round(r);
};

function hypothenuse(a, b) {
	return Math.sqrt(a * a + b * b);
};

function calculIMC(poid, taille) {
	var r = poid / (taille * taille);
	return Number.parseFloat(r.toFixed(2));
};
