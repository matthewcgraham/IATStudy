define(['pipAPI','https://cdn.jsdelivr.net/gh/matthewcgraham/IATStudy/IAT_T15.js'], function(APIConstructor, iatExtension){
	var API = new APIConstructor();

return iatExtension({
      attribute1 : {
			name : 'Mammal', //Will appear in the data.
			title : {
				media : {word : 'Mammal'}, //Name of the category presented in the task.
				css : {color:'#0000FF','font-size':'1.8em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
				{word: 'Elephant'},
				{word: 'Bison'},
				{word: 'Deer'},
				{word: 'Cow'},

			], 
			//Stimulus css (style)
			stimulusCss : {color:'#0000FF','font-size':'2.3em'}
		},	
		attribute2 :	{
			name : 'Bird', //Will appear in the data.
			title : {
				media : {word : 'Bird'}, //Name of the category presented in the task.
				css : {color:'#0000FF','font-size':'1.8em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
				{word: 'Crow'},
				{word: 'Sparrow'},
				{word: 'Finch'},
				{word: 'Pigeon'},

			], 
			//Stimulus css
			stimulusCss : {color:'#0000FF','font-size':'2.3em'}
		},
		category1 : 
		{
			name : 'Small', 
			title : {
				media : {word : 'Small'}, 
				css : {color:'#31940F','font-size':'1.8em'}, 
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
				{word: 'Small'},
				{word: 'Little'},
				{word: 'Tiny'},
				{word: 'Teeny'},

			], 
			//Stimulus css
			stimulusCss : {color:'#31940F','font-size':'2.3em'} 
		},
		category2 : 
		{
			name : 'Large', 
			title : {
				media : {word : 'Large'}, 
				css : {color:'#31940F','font-size':'1.8em'}, 
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
				{word: 'Huge'},
				{word: 'Big'},
				{word: 'Gigantic'},
				{word: 'Massive'},

			], 
			//Stimulus css
			stimulusCss : {color:'#31940F','font-size':'2.3em'}
		},
		
		//The default feedback messages for each cutoff -
			//attribute1, and attribute2 will be replaced with the name of attribute1 and attribute2.
			//categoryA is the name of the category that is found to be associated with attribute1,
			//and categoryB is the name of the category that is found to be associated with attribute2.
			fb_strong_Att1WithCatA_Att2WithCatB : 'Your data suggest a strong association for attribute1 with categoryA and attribute2 with categoryB.',
			fb_moderate_Att1WithCatA_Att2WithCatB : 'Your data suggest a moderate association for attribute1 with categoryA and attribute2 with categoryB.',
			fb_slight_Att1WithCatA_Att2WithCatB : 'Your data suggest a slight association for attribute1 with categoryA and attribute2 with categoryB.',
			fb_equal_CatAvsCatB : 'Your data suggest little or no association between attribute2 and attribute1 with categoryA and categoryB..',
    });
});
