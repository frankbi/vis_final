$(document).ready(function() {
	window.onload = function() { Tabletop.init( { key: spreadsheet_url, callback: showInfo } ); }	
	initMap(combined);
});

function showInfo(data) {
	acutemyeloidleukemia = data.Acute_myeloid_leukemia.elements;
	bladder = data.Bladder.elements;
	brain = data.Brain_nervous_system.elements;
	breast = data.Breast.elements;
	chroniclymphocyticleukemia = data.Chronic_lymphocytic_leukemia.elements;
	colorectal = data.Colorectal.elements;
	esophagus = data.Esophagus.elements;
	kidney = data.Kidney.elements;
	larynx = data.Larynx.elements;
	leukemia = data.Leukemia.elements;
	liver = data.Liver.elements;
	lungandbronchus = data.Lung_and_bronchus.elements;
	melanoma = data.Melanoma.elements;
	mesothelioma = data.Mesothelioma.elements;
	nonhodgkinlymphoma = data.Non_Hodgkin_lymphoma.elements;
	thyroid = data.Thyroid.elements;
	pancreas = data.Pancreas.elements;
	oral = data.Oral_cavity_and_pharynx.elements;
}

function changeColor(cancer, colormapping) {

	var temp = new Array();
	for (var l = 0; l < cancer.length; l++) {
		var u = cancer[l].incidencerateper100000;
		temp.push(u);	
	}
	
	var maximum = Array.max(temp);
	var minimum = Array.min(temp);
	
	var count = 1;
	g.transition()
		.duration(800)
		.selectAll("path")
		.attr("fill", function() {		
			switch(colormapping) {
			case "YlGn":
				var color = d3.scale.quantile().domain([minimum,maximum]).range(colorbrewer.YlGn[8]);
				var c = cancer[count].incidencerateper100000;
				count++;						
				return color(c);
			case "YlGnBu":
				var color = d3.scale.quantile().domain([minimum,maximum]).range(colorbrewer.YlGnBu[8]);
				var c = cancer[count].incidencerateper100000;
				count++;						
				return color(c);
			case "GnBu":
				var color = d3.scale.quantile().domain([minimum,maximum]).range(colorbrewer.GnBu[8]);
				var c = cancer[count].incidencerateper100000;
				count++;						
				return color(c);
			case "BuGn":
				var color = d3.scale.quantile().domain([minimum,maximum]).range(colorbrewer.BuGn[8]);
				var c = cancer[count].incidencerateper100000;
				count++;						
				return color(c);
			case "PuBuGn":
				var color = d3.scale.quantile().domain([minimum,maximum]).range(colorbrewer.PuBuGn[8]);
				var c = cancer[count].incidencerateper100000;
				count++;						
				return color(c);
			case "PuBu":
				var color = d3.scale.quantile().domain([minimum,maximum]).range(colorbrewer.PuBu[8]);
				var c = cancer[count].incidencerateper100000;
				count++;						
				return color(c);
			case "BuPu":
				var color = d3.scale.quantile().domain([minimum,maximum]).range(colorbrewer.BuPu[8]);
				var c = cancer[count].incidencerateper100000;
				count++;						
				return color(c);
			case "RdPu":
				var color = d3.scale.quantile().domain([minimum,maximum]).range(colorbrewer.RdPu[8]);
				var c = cancer[count].incidencerateper100000;
				count++;						
				return color(c);
			case "PuRd":
				var color = d3.scale.quantile().domain([minimum,maximum]).range(colorbrewer.PuRd[8]);
				var c = cancer[count].incidencerateper100000;
				count++;						
				return color(c);
			case "OrRd":
				var color = d3.scale.quantile().domain([minimum,maximum]).range(colorbrewer.OrRd[8]);
				var c = cancer[count].incidencerateper100000;
				count++;						
				return color(c);
			case "YlOrRd":
				var color = d3.scale.quantile().domain([minimum,maximum]).range(colorbrewer.YlOrRd[8]);
				var c = cancer[count].incidencerateper100000;
				count++;						
				return color(c);
			case "YlOrBr":
				var color = d3.scale.quantile().domain([minimum,maximum]).range(colorbrewer.YlOrBr[8]);
				var c = cancer[count].incidencerateper100000;
				count++;						
				return color(c);
			case "Purples":
				var color = d3.scale.quantile().domain([minimum,maximum]).range(colorbrewer.Purples[8]);
				var c = cancer[count].incidencerateper100000;
				count++;						
				return color(c);
			case "Blues":
				var color = d3.scale.quantile().domain([minimum,maximum]).range(colorbrewer.Blues[8]);
				var c = cancer[count].incidencerateper100000;
				count++;						
				return color(c);
			case "Greens":
				var color = d3.scale.quantile().domain([minimum,maximum]).range(colorbrewer.Greens[8]);
				var c = cancer[count].incidencerateper100000;
				count++;						
				return color(c);
			case "Oranges":
				var color = d3.scale.quantile().domain([minimum,maximum]).range(colorbrewer.Oranges[8]);
				var c = cancer[count].incidencerateper100000;
				count++;						
				return color(c);
			case "Reds":
				var color = d3.scale.quantile().domain([minimum,maximum]).range(colorbrewer.Reds[8]);
				var c = cancer[count].incidencerateper100000;
				count++;						
				return color(c);
			case "Greys":
				var color = d3.scale.quantile().domain([minimum,maximum]).range(colorbrewer.Greys[8]);
				var c = cancer[count].incidencerateper100000;
				count++;						
				return color(c);
			case "PuOr":
				var color = d3.scale.quantile().domain([minimum,maximum]).range(colorbrewer.PuOr[8]);
				var c = cancer[count].incidencerateper100000;
				count++;						
				return color(c);
			case "BrBG":
				var color = d3.scale.quantile().domain([minimum,maximum]).range(colorbrewer.BrBG[8]);
				var c = cancer[count].incidencerateper100000;
				count++;						
				return color(c);
			case "PRGn":
				var color = d3.scale.quantile().domain([minimum,maximum]).range(colorbrewer.PRGn[8]);
				var c = cancer[count].incidencerateper100000;
				count++;						
				return color(c);
			case "PiYG":
				var color = d3.scale.quantile().domain([minimum,maximum]).range(colorbrewer.PiYG[8]);
				var c = cancer[count].incidencerateper100000;
				count++;						
				return color(c);
			case "RdBu":
				var color = d3.scale.quantile().domain([minimum,maximum]).range(colorbrewer.RdBu[8]);
				var c = cancer[count].incidencerateper100000;
				count++;						
				return color(c);
			case "RdGy":
				var color = d3.scale.quantile().domain([minimum,maximum]).range(colorbrewer.RdGy[8]);
				var c = cancer[count].incidencerateper100000;
				count++;						
				return color(c);
			case "RdYlBu":
				var color = d3.scale.quantile().domain([minimum,maximum]).range(colorbrewer.RdYlBu[8]);
				var c = cancer[count].incidencerateper100000;
				count++;						
				return color(c);
			case "Spectral":
				var color = d3.scale.quantile().domain([minimum,maximum]).range(colorbrewer.Spectral[8]);
				var c = cancer[count].incidencerateper100000;
				count++;						
				return color(c);
			case "RdYlGn":
				var color = d3.scale.quantile().domain([minimum,maximum]).range(colorbrewer.RdYlGn[8]);
				var c = cancer[count].incidencerateper100000;
				count++;						
				return color(c);
			case "Accent":
				var color = d3.scale.quantile().domain([minimum,maximum]).range(colorbrewer.Accent[8]);
				var c = cancer[count].incidencerateper100000;
				count++;						
				return color(c);
			case "Dark2":
				var color = d3.scale.quantile().domain([minimum,maximum]).range(colorbrewer.Dark2[8]);
				var c = cancer[count].incidencerateper100000;
				count++;						
				return color(c);
			case "Paired":
				var color = d3.scale.quantile().domain([minimum,maximum]).range(colorbrewer.Paired[8]);
				var c = cancer[count].incidencerateper100000;
				count++;						
				return color(c);
			case "Pastel1":
				var color = d3.scale.quantile().domain([minimum,maximum]).range(colorbrewer.Pastel1[8]);
				var c = cancer[count].incidencerateper100000;
				count++;						
				return color(c);
			case "Pastel2":
				var color = d3.scale.quantile().domain([minimum,maximum]).range(colorbrewer.Pastel2[8]);
				var c = cancer[count].incidencerateper100000;
				count++;						
				return color(c);
			case "Set1":
				var color = d3.scale.quantile().domain([minimum,maximum]).range(colorbrewer.Set1[8]);
				var c = cancer[count].incidencerateper100000;
				count++;						
				return color(c);
			case "Set2":
				var color = d3.scale.quantile().domain([minimum,maximum]).range(colorbrewer.Set2[8]);
				var c = cancer[count].incidencerateper100000;
				count++;						
				return color(c);
			case "Set3":
				var color = d3.scale.quantile().domain([minimum,maximum]).range(colorbrewer.Set3[8]);
				var c = cancer[count].incidencerateper100000;
				count++;						
				return color(c);
			default:
				alert("errorbot says hi");	
			}
		});
}

var initcolor = d3.scale.quantile()
		.domain([410.6,528])
		.range(colorbrewer.YlGn[8]);

function initMap(x) {
	d3.json("mn-county-2010.json", function(json) {
		var features = json.features;
		var j = -1
		sortJsonArrayByProperty(features, 'properties.NAME');
		g.selectAll("path")
		    .data(json.features)
		    .enter()
		    .append("path")
		    .attr("fill", function(d,i) {
		    	i++;
			return initcolor(x[i].incidencerateper100000);
		    })
		    .attr("d", path)
		    .attr("id", function() {
		    	j++;
		    	return "path" + j;
		    })
		    .attr("stroke","white")
		    .attr("stroke-width","2")
		    .on("click", click);
	});
}

function click(d) {
	var id = $(this).attr("id");
	id = id.replace("path","");
	var numId = parseInt(id) + 1;
	$(".dis").remove();
	document.getElementById("county").innerHTML = d.properties.NAME + " County";
	document.getElementById("acutemyeloidleukemia").innerHTML = "Acute Myeloid Leukemia: <b>" + co(acutemyeloidleukemia[numId].numberofnewcancers) + "</b>";
	document.getElementById("bladder").innerHTML = "Bladder: <b>" + co(bladder[numId].numberofnewcancers) + "</b>";
	document.getElementById("brain").innerHTML = "Brain & Nervous System: <b>" + co(brain[numId].numberofnewcancers) + "</b>";
	document.getElementById("breast").innerHTML = "Breast: <b>" + co(breast[numId].numberofnewcancers) + "</b>";
	document.getElementById("chroniclymphocyticleukemia").innerHTML = "Chronic Lymphocytic Leukemia: <b>" + co(chroniclymphocyticleukemia[numId].numberofnewcancers) + "</b>";
	document.getElementById("colorectal").innerHTML = "Colorectal: <b>" + co(colorectal[numId].numberofnewcancers) + "</b>";
	document.getElementById("esophagus").innerHTML = "Esophagus: <b>" + co(esophagus[numId].numberofnewcancers) + "</b>";
	document.getElementById("kidney").innerHTML = "Kidney: <b>" + co(kidney[numId].numberofnewcancers) + "</b>";
	document.getElementById("larynx").innerHTML = "Larynx: <b>" + co(larynx[numId].numberofnewcancers) + "</b>";
	document.getElementById("leukemia").innerHTML = "Leukemia: <b>" + co(leukemia[numId].numberofnewcancers) + "</b>";
	document.getElementById("liver").innerHTML = "Liver: <b>" + co(liver[numId].numberofnewcancers) + "</b>";
	document.getElementById("lungandbronchus").innerHTML = "Lung: <b>" + co(lungandbronchus[numId].numberofnewcancers) + "</b>";
	document.getElementById("melanoma").innerHTML = "Melanoma: <b>" + co(melanoma[numId].numberofnewcancers) + "</b>";
	document.getElementById("mesothelioma").innerHTML = "Mesothelioma: <b>" + co(mesothelioma[numId].numberofnewcancers) + "</b>";
	document.getElementById("nonhodgkinlymphoma").innerHTML = "Non-Hodgkin Lymphoma: <b>" + co(nonhodgkinlymphoma[numId].numberofnewcancers) + "</b>";
	document.getElementById("thyroid").innerHTML = "Thyroid: <b>" + co(thyroid[numId].numberofnewcancers) + "</b>";
	document.getElementById("pancreas").innerHTML = "Pancreas: <b>" + co(pancreas[numId].numberofnewcancers) + "</b>";
	document.getElementById("oral").innerHTML = "Oral & Pharyngeal: <b>" + co(oral[numId].numberofnewcancers) + "</b>";
	
	var x, y, k;
	if (d && centered !== d) {
		var centroid = path.centroid(d);
		x = centroid[0];
		y = centroid[1];
		k = 4;
		centered = d;
	} else {
		x = width / 2;
		y = height / 2;
		k = 1;
		centered = null;
	}

	g.selectAll("path")
		.classed("active", centered && function(d) { 
			return d === centered; 
		});

	g.transition()
		.duration(1300)
		.attr("transform", "translate(" + width / 2 + "," + height / 2 + ")scale(" + k + ")translate(" + -x + "," + -y + ")")
		.style("stroke-width", k + "px");
	
}

function checkForm() {
	var cancer = document.getElementById("cancer").value;
	var mapping = document.getElementById("mapping").value;
	if (cancer == false || mapping == false) { alert("Please select from both drop-down menus."); }
	switch(cancer) {
		case "combined":
			changeColor(combined,mapping);
			break;
		case "thyroid":
			changeColor(thyroid,mapping);
			break;
		case "pancreas":
			changeColor(pancreas,mapping);
			break;
		case "oral":
			changeColor(oral,mapping);
			break;
		case "melanoma":
			changeColor(melanoma,mapping);
			break;
		case "bladder":
			changeColor(bladder,mapping);
			break;
		case "nonhodgkinlymphoma":
			changeColor(nonhodgkinlymphoma,mapping);
			break;
		case "leukemia":
			changeColor(leukemia,mapping);
			break;
		case "lungandbronchus":
			changeColor(lungandbronchus,mapping);
			break;
		case "mesothelioma":
			changeColor(mesothelioma,mapping);
			break;
		case "colorectal":
			changeColor(colorectal,mapping);
			break;
		case "breast":
			changeColor(breast,mapping);
			break;
		case "kidney":
			changeColor(kidney,mapping);
			break;
		case "esophagus":
			changeColor(esophagus,mapping);
			break;
		case "liver":
			changeColor(liver,mapping);
			break;
		case "larynx":
			changeColor(larynx,mapping);
			break;
		case "chroniclymphocyticleukemia":
			changeColor(chroniclymphocyticleukemia,mapping);
			break;
		case "acutemyeloidleukemia":
			changeColor(acutemyeloidleukemia,mapping);
			break;
		case "brain":
			changeColor(brain,mapping);
			break;
		default:
			break;
	}
}

/**********************************
	d3
**********************************/

var width = 600, 
    height = 650, 
    centered;

var projection = d3.geo.mercator()
	.scale(4000)
	.translate([6825, 4000]);

var path = d3.geo.path()
	.projection(projection);

var svg = d3.select("#map").append("svg")
	.attr("width", width)
	.attr("height", height);

svg.append("rect")
	.attr("class", "background")
	.attr("width", width)
	.attr("height", height)
	.attr("fill", "none");

var g = svg.append("g")
	.attr("id", "states");
	

/**********************************
	json sorting
**********************************/

function sortJsonArrayByProperty(objArray, prop, direction) {
	if (arguments.length < 2) throw new Error("sortJsonArrayByProp requires 2 arguments");
	var direct = arguments.length > 2 ? arguments[2] : 1;
	if (objArray && objArray.constructor===Array) {
		var propPath = (prop.constructor===Array) ? prop : prop.split(".");
        	objArray.sort (function(a,b) {
		    for (var p in propPath) {
		        if (a[propPath[p]] && b[propPath[p]]) {
		            a = a[propPath[p]];
		            b = b[propPath[p]];
		        }
		    }
		    a = a.match(/^\d+$/) ? +a : a;
		    b = b.match(/^\d+$/) ? +b : b;
		    return ( (a < b) ? -1*direct : ((a > b) ? 1*direct : 0) );
        	});
    }
}

/**********************************
	min/max of array
**********************************/

Array.max = function( array ){
    return Math.max.apply( Math, array );
};
 
Array.min = function( array ){
    return Math.min.apply( Math, array );
};

/**********************************
	commas in thousands
**********************************/

function co(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
