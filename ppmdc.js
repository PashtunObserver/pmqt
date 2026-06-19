(function(){

  // ---------------------------------------------------------
  // Subjects configuration: each maps to its own MCQ JSON array
  // and a color theme for the card.
  // ---------------------------------------------------------
  const subjectsData = {
    "Biodiversity": {
      color: "#16a085",
      icon: "🦋",
      questions: [
        {
        "Q.No": "1",
        "Question": "What is biodiversity?",
        "Option A": "Variety of life on Earth",
        "Option B": "Only plants diversity",
        "Option C": "Only animal diversity",
        "Option D": "Only microbial diversity",
        "Correct Option": "A",
        "Explanation": "Biodiversity refers to the variety of all life forms on Earth, including plants, animals, fungi, and microorganisms."
    },
    {
        "Q.No": "2",
        "Question": "Which domain do viruses belong to?",
        "Option A": "Bacteria",
        "Option B": "Archaea",
        "Option C": "Eukarya",
        "Option D": "None",
        "Correct Option": "D",
        "Explanation": "Viruses are acellular and do not belong to any domain of life."
    },
    {
        "Q.No": "3",
        "Question": "What is the basic unit of biodiversity?",
        "Option A": "Biome",
        "Option B": "Ecosystem",
        "Option C": "Species",
        "Option D": "Population",
        "Correct Option": "C",
        "Explanation": "Species is the fundamental unit of biodiversity as it represents distinct biological entities."
    },
    {
        "Q.No": "4",
        "Question": "Which of the following is acellular?",
        "Option A": "Bacteria",
        "Option B": "Fungi",
        "Option C": "Viruses",
        "Option D": "Protists",
        "Correct Option": "C",
        "Explanation": "Viruses are non-cellular entities that require a host to replicate."
    },
    {
        "Q.No": "5",
        "Question": "Who proposed the five-kingdom classification?",
        "Option A": "Linnaeus",
        "Option B": "Whittaker",
        "Option C": "Haeckel",
        "Option D": "Darwin",
        "Correct Option": "B",
        "Explanation": "Robert Whittaker proposed the five-kingdom classification in 1969."
    },
    {
        "Q.No": "6",
        "Question": "Which of the following is NOT considered living?",
        "Option A": "Fungi",
        "Option B": "Protozoa",
        "Option C": "Viruses",
        "Option D": "Algae",
        "Correct Option": "C",
        "Explanation": "Viruses are considered non-living outside a host but show life-like properties inside a host."
    },
    {
        "Q.No": "7",
        "Question": "The smallest infectious agents are",
        "Option A": "Bacteria",
        "Option B": "Protozoa",
        "Option C": "Fungi",
        "Option D": "Viruses",
        "Correct Option": "D",
        "Explanation": "Viruses are the smallest infectious agents, smaller than bacteria."
    },
    {
        "Q.No": "8",
        "Question": "What is the protein coat of a virus called?",
        "Option A": "Capsule",
        "Option B": "Capsid",
        "Option C": "Cell wall",
        "Option D": "Envelope",
        "Correct Option": "B",
        "Explanation": "The protein coat of a virus is called a capsid, which protects its genetic material."
    },
    {
        "Q.No": "9",
        "Question": "The genetic material of viruses can be",
        "Option A": "Only DNA",
        "Option B": "Only RNA",
        "Option C": "Both DNA and RNA",
        "Option D": "Either DNA or RNA",
        "Correct Option": "D",
        "Explanation": "Viruses can have either DNA or RNA but not both."
    },
    {
        "Q.No": "10",
        "Question": "HIV is an example of",
        "Option A": "Bacteriophage",
        "Option B": "Retrovirus",
        "Option C": "DNA virus",
        "Option D": "Lytic virus",
        "Correct Option": "B",
        "Explanation": "HIV is a retrovirus that contains RNA and uses reverse transcriptase to convert RNA into DNA."
    },
    {
        "Q.No": "11",
        "Question": "Which virus infects bacteria?",
        "Option A": "Influenza",
        "Option B": "Polio",
        "Option C": "Bacteriophage",
        "Option D": "Adenovirus",
        "Correct Option": "C",
        "Explanation": "Bacteriophages are viruses that infect and replicate within bacteria."
    },
    {
        "Q.No": "12",
        "Question": "Which of the following diseases is caused by a virus?",
        "Option A": "Tuberculosis",
        "Option B": "Malaria",
        "Option C": "Measles",
        "Option D": "Ringworm",
        "Correct Option": "C",
        "Explanation": "Measles is caused by the measles virus."
    },
    {
        "Q.No": "13",
        "Question": "Which of the following is a characteristic of viruses?",
        "Option A": "Can reproduce outside host",
        "Option B": "Have their own metabolism",
        "Option C": "Are always beneficial",
        "Option D": "Lack cellular structure",
        "Correct Option": "D",
        "Explanation": "Viruses lack cellular structure and metabolic machinery."
    },
    {
        "Q.No": "14",
        "Question": "Biodiversity is highest in",
        "Option A": "Desert",
        "Option B": "Tundra",
        "Option C": "Rainforest",
        "Option D": "Grassland",
        "Correct Option": "C",
        "Explanation": "Rainforests have the highest biodiversity due to favorable climatic conditions."
    },
    {
        "Q.No": "15",
        "Question": "What is the study of viruses called?",
        "Option A": "Virology",
        "Option B": "Microbiology",
        "Option C": "Mycology",
        "Option D": "Bacteriology",
        "Correct Option": "A",
        "Explanation": "Virology is the branch of science that deals with the study of viruses."
    },
    {
        "Q.No": "16",
        "Question": "Prions are",
        "Option A": "Infectious proteins",
        "Option B": "DNA viruses",
        "Option C": "RNA viruses",
        "Option D": "Bacteria",
        "Correct Option": "A",
        "Explanation": "Prions are infectious proteins that cause diseases like mad cow disease."
    },
    {
        "Q.No": "17",
        "Question": "Which kingdom has the highest biodiversity?",
        "Option A": "Plantae",
        "Option B": "Animalia",
        "Option C": "Monera",
        "Option D": "Fungi",
        "Correct Option": "B",
        "Explanation": "Animalia has the highest biodiversity with the largest number of species."
    },
    {
        "Q.No": "18",
        "Question": "Endemic species are found",
        "Option A": "Everywhere",
        "Option B": "Only in zoos",
        "Option C": "In multiple continents",
        "Option D": "In a specific region",
        "Correct Option": "D",
        "Explanation": "Endemic species are found in a particular region and nowhere else."
    },
    {
        "Q.No": "19",
        "Question": "Which of the following is a viral disease?",
        "Option A": "Cholera",
        "Option B": "Typhoid",
        "Option C": "Dengue",
        "Option D": "Tuberculosis",
        "Correct Option": "C",
        "Explanation": "Dengue is caused by the dengue virus, transmitted by mosquitoes."
    },
    {
        "Q.No": "20",
        "Question": "Lichens are an example of",
        "Option A": "Mutualism",
        "Option B": "Parasitism",
        "Option C": "Commensalism",
        "Option D": "Predation",
        "Correct Option": "A",
        "Explanation": "Lichens are a mutualistic association between fungi and algae."
    },
    {
        "Q.No": "21",
        "Question": "The term \"\"hotspot\"\" in biodiversity refers to",
        "Option A": "Cold regions",
        "Option B": "Areas with high species richness",
        "Option C": "Places with no biodiversity",
        "Option D": "Places with only aquatic life",
        "Correct Option": "B",
        "Explanation": "Biodiversity hotspots are regions with high species richness and endemism."
    },
    {
        "Q.No": "22",
        "Question": "Which virus caused the COVID-19 pandemic?",
        "Option A": "Influenza virus",
        "Option B": "HIV",
        "Option C": "SARS-CoV-2",
        "Option D": "H1N1",
        "Correct Option": "C",
        "Explanation": "The SARS-CoV-2 virus caused the COVID-19 pandemic."
    },
    {
        "Q.No": "23",
        "Question": "The smallest unit of classification is",
        "Option A": "Family",
        "Option B": "Order",
        "Option C": "Genus",
        "Option D": "Species",
        "Correct Option": "D",
        "Explanation": "Species is the most specific taxonomic rank."
    },
    {
        "Q.No": "24",
        "Question": "What type of biodiversity exists at the genetic level?",
        "Option A": "Species diversity",
        "Option B": "Ecosystem diversity",
        "Option C": "Genetic diversity",
        "Option D": "Functional diversity",
        "Correct Option": "C",
        "Explanation": "Genetic diversity refers to the variation in genes within a species."
    },
    {
        "Q.No": "25",
        "Question": "A retrovirus contains",
        "Option A": "DNA only",
        "Option B": "RNA only",
        "Option C": "Both DNA and RNA",
        "Option D": "No genetic material",
        "Correct Option": "B",
        "Explanation": "Retroviruses contain RNA as their genetic material."
    },
    {
        "Q.No": "26",
        "Question": "Which part of a virus helps it attach to a host cell?",
        "Option A": "Tail fibers",
        "Option B": "Nucleus",
        "Option C": "Ribosomes",
        "Option D": "Mitochondria",
        "Correct Option": "A",
        "Explanation": "Tail fibers help viruses attach to specific receptors on host cells."
    },
    {
        "Q.No": "27",
        "Question": "Which of the following is NOT a component of biodiversity?",
        "Option A": "Genetic diversity",
        "Option B": "Species diversity",
        "Option C": "Ecosystem diversity",
        "Option D": "Chemical diversity",
        "Correct Option": "D",
        "Explanation": "Biodiversity consists of genetic, species, and ecosystem diversity, but not chemical diversity."
    },
    {
        "Q.No": "28",
        "Question": "Which organism is known as a \"\"living fossil\"\"?",
        "Option A": "Crocodile",
        "Option B": "Bacteria",
        "Option C": "Horseshoe crab",
        "Option D": "Starfish",
        "Correct Option": "C",
        "Explanation": "Horseshoe crabs are considered living fossils due to their ancient lineage."
    },
    {
        "Q.No": "29",
        "Question": "The most diverse group of animals is",
        "Option A": "Mammals",
        "Option B": "Birds",
        "Option C": "Insects",
        "Option D": "Amphibians",
        "Correct Option": "C",
        "Explanation": "Insects make up the largest group of animals in terms of species diversity."
    },
    {
        "Q.No": "30",
        "Question": "Which of the following is an RNA virus?",
        "Option A": "Rabies virus",
        "Option B": "Smallpox virus",
        "Option C": "Adenovirus",
        "Option D": "Bacteriophage",
        "Correct Option": "A",
        "Explanation": "The rabies virus contains RNA as its genetic material."
    },
    {
        "Q.No": "31",
        "Question": "Which of the following is NOT a characteristic of living organisms but is found in viruses?",
        "Option A": "Cellular structure",
        "Option B": "Metabolism",
        "Option C": "Independent reproduction",
        "Option D": "Ability to mutate",
        "Correct Option": "D",
        "Explanation": "Viruses can mutate, but they lack metabolism and cellular structure."
    },
    {
        "Q.No": "32",
        "Question": "The enzyme used by retroviruses to convert RNA into DNA is",
        "Option A": "DNA polymerase",
        "Option B": "RNA polymerase",
        "Option C": "Reverse transcriptase",
        "Option D": "Ligase",
        "Correct Option": "C",
        "Explanation": "Reverse transcriptase helps convert RNA into DNA in retroviruses."
    },
    {
        "Q.No": "33",
        "Question": "Which of the following is an example of ex-situ conservation?",
        "Option A": "National park",
        "Option B": "Wildlife sanctuary",
        "Option C": "Botanical garden",
        "Option D": "Biosphere reserve",
        "Correct Option": "C",
        "Explanation": "Ex-situ conservation involves protecting species outside their natural habitat, like in botanical gardens."
    },
    {
        "Q.No": "34",
        "Question": "In which type of viral cycle does the virus integrate its genome into the host's DNA?",
        "Option A": "Lytic cycle",
        "Option B": "Lysogenic cycle",
        "Option C": "Binary fission",
        "Option D": "Budding",
        "Correct Option": "B",
        "Explanation": "In the lysogenic cycle, the viral genome integrates into the host DNA and remains dormant."
    },
    {
        "Q.No": "35",
        "Question": "The total number of known species on Earth is approximately",
        "Option A": "1 million",
        "Option B": "5 million",
        "Option C": "8.7 million",
        "Option D": "50 million",
        "Correct Option": "C",
        "Explanation": "Scientists estimate about 8.7 million species, though many remain undiscovered."
    },
    {
        "Q.No": "36",
        "Question": "Which biome has the lowest biodiversity?",
        "Option A": "Rainforest",
        "Option B": "Desert",
        "Option C": "Tundra",
        "Option D": "Grassland",
        "Correct Option": "C",
        "Explanation": "Tundra has the lowest biodiversity due to extreme cold conditions."
    },
    {
        "Q.No": "37",
        "Question": "What is the most common shape of bacteriophages?",
        "Option A": "Helical",
        "Option B": "Spherical",
        "Option C": "Icosahedral",
        "Option D": "Complex",
        "Correct Option": "D",
        "Explanation": "Bacteriophages have a complex structure with a head and tail fibers."
    },
    {
        "Q.No": "38",
        "Question": "The biodiversity of an area is measured by its",
        "Option A": "Number of biomes",
        "Option B": "Number of ecosystems",
        "Option C": "Number of species",
        "Option D": "Number of genes",
        "Correct Option": "C",
        "Explanation": "Biodiversity is measured by the number of species in an ecosystem."
    },
    {
        "Q.No": "39",
        "Question": "Which of the following is NOT a method of biodiversity conservation?",
        "Option A": "Afforestation",
        "Option B": "Deforestation",
        "Option C": "Wildlife protection laws",
        "Option D": "Captive breeding",
        "Correct Option": "B",
        "Explanation": "Deforestation destroys biodiversity instead of conserving it."
    },
    {
        "Q.No": "40",
        "Question": "Which type of RNA virus can be directly used as mRNA for protein synthesis?",
        "Option A": "Negative-sense RNA virus",
        "Option B": "Positive-sense RNA virus",
        "Option C": "Double-stranded RNA virus",
        "Option D": "Retrovirus",
        "Correct Option": "B",
        "Explanation": "Positive-sense RNA viruses can directly function as mRNA."
    },
    {
        "Q.No": "41",
        "Question": "Which is the smallest known virus?",
        "Option A": "Polio virus",
        "Option B": "Hepatitis B virus",
        "Option C": "Tobacco mosaic virus",
        "Option D": "Rhinovirus",
        "Correct Option": "A",
        "Explanation": "The polio virus is one of the smallest known viruses."
    },
    {
        "Q.No": "42",
        "Question": "Viroids are composed of",
        "Option A": "DNA only",
        "Option B": "RNA only",
        "Option C": "Proteins",
        "Option D": "Lipids",
        "Correct Option": "B",
        "Explanation": "Viroids are infectious RNA molecules without a protein coat."
    },
    {
        "Q.No": "43",
        "Question": "Which of the following is an example of in-situ conservation?",
        "Option A": "Zoo",
        "Option B": "Aquarium",
        "Option C": "National park",
        "Option D": "Seed bank",
        "Correct Option": "C",
        "Explanation": "National parks conserve species in their natural habitats."
    },
    {
        "Q.No": "44",
        "Question": "Which organisms are considered nature's decomposers?",
        "Option A": "Herbivores",
        "Option B": "Carnivores",
        "Option C": "Fungi and bacteria",
        "Option D": "Viruses",
        "Correct Option": "C",
        "Explanation": "Fungi and bacteria break down organic matter, recycling nutrients."
    },
    {
        "Q.No": "45",
        "Question": "Which of the following viruses causes warts in humans?",
        "Option A": "HIV",
        "Option B": "Human papillomavirus (HPV)",
        "Option C": "Ebola virus",
        "Option D": "Hepatitis C virus",
        "Correct Option": "B",
        "Explanation": "HPV causes warts and is linked to cervical cancer."
    },
    {
        "Q.No": "46",
        "Question": "The first virus to be crystallized was",
        "Option A": "HIV",
        "Option B": "Influenza virus",
        "Option C": "Tobacco mosaic virus",
        "Option D": "Adenovirus",
        "Correct Option": "C",
        "Explanation": "Tobacco mosaic virus was the first virus to be crystallized."
    },
    {
        "Q.No": "47",
        "Question": "The function of a viral envelope is to",
        "Option A": "Replicate genetic material",
        "Option B": "Protect against host defenses",
        "Option C": "Store nutrients",
        "Option D": "Capture sunlight",
        "Correct Option": "B",
        "Explanation": "The viral envelope helps the virus evade host immune defenses."
    },
    {
        "Q.No": "48",
        "Question": "The term \"\"gene pool\"\" refers to",
        "Option A": "All genes in a species",
        "Option B": "DNA in a single organism",
        "Option C": "Collection of similar proteins",
        "Option D": "Genetic diversity in an ecosystem",
        "Correct Option": "A",
        "Explanation": "The gene pool represents all genetic material in a species population."
    },
    {
        "Q.No": "49",
        "Question": "What do bacteriophages inject into bacteria?",
        "Option A": "Proteins",
        "Option B": "RNA",
        "Option C": "DNA",
        "Option D": "Lipids",
        "Correct Option": "C",
        "Explanation": "Bacteriophages inject DNA into bacterial cells for replication."
    },
    {
        "Q.No": "50",
        "Question": "How do fungi primarily obtain nutrients?",
        "Option A": "Photosynthesis",
        "Option B": "Parasitism",
        "Option C": "Absorption",
        "Option D": "Ingestion",
        "Correct Option": "C",
        "Explanation": "Fungi absorb nutrients by breaking down organic material."
    },
    {
        "Q.No": "51",
        "Question": "Which type of biodiversity refers to the variety of ecosystems within a region?",
        "Option A": "Genetic diversity",
        "Option B": "Species diversity",
        "Option C": "Ecosystem diversity",
        "Option D": "Functional diversity",
        "Correct Option": "C",
        "Explanation": "Ecosystem diversity refers to the variety of ecosystems in a region."
    },
    {
        "Q.No": "52",
        "Question": "Which scientist first discovered viruses?",
        "Option A": "Louis Pasteur",
        "Option B": "Robert Koch",
        "Option C": "Martinus Beijerinck",
        "Option D": "Alexander Fleming",
        "Correct Option": "C",
        "Explanation": "Beijerinck confirmed the existence of viruses by studying the tobacco mosaic virus."
    },
    {
        "Q.No": "53",
        "Question": "Which of the following is the most abundant entity in the biosphere?",
        "Option A": "Bacteria",
        "Option B": "Fungi",
        "Option C": "Viruses",
        "Option D": "Protozoa",
        "Correct Option": "C",
        "Explanation": "Viruses outnumber all other biological entities in the biosphere."
    },
    {
        "Q.No": "54",
        "Question": "The rabies virus is transmitted through",
        "Option A": "Air",
        "Option B": "Water",
        "Option C": "Direct contact",
        "Option D": "Animal bites",
        "Correct Option": "D",
        "Explanation": "Rabies spreads through the bite of infected animals."
    },
    {
        "Q.No": "55",
        "Question": "Which of the following is the largest virus?",
        "Option A": "Mimivirus",
        "Option B": "Influenza virus",
        "Option C": "Dengue virus",
        "Option D": "Poliovirus",
        "Correct Option": "A",
        "Explanation": "Mimivirus is one of the largest known viruses."
    },
    {
        "Q.No": "56",
        "Question": "The central dogma of molecular biology involves",
        "Option A": "DNA → RNA → Protein",
        "Option B": "RNA → DNA → Protein",
        "Option C": "Protein → RNA → DNA",
        "Option D": "RNA → Protein → DNA",
        "Correct Option": "A",
        "Explanation": "The central dogma describes genetic information flow from DNA to RNA to protein."
    },
    {
        "Q.No": "57",
        "Question": "Genetic drift affects",
        "Option A": "Large populations",
        "Option B": "Small populations",
        "Option C": "Both equally",
        "Option D": "None of these",
        "Correct Option": "B",
        "Explanation": "Genetic drift has a greater effect on small populations."
    },
    {
        "Q.No": "58",
        "Question": "The study of fungi is called",
        "Option A": "Bacteriology",
        "Option B": "Virology",
        "Option C": "Mycology",
        "Option D": "Phycology",
        "Correct Option": "C",
        "Explanation": "Mycology is the scientific study of fungi."
    },
    {
        "Q.No": "59",
        "Question": "The leading cause of species extinction today is",
        "Option A": "Overhunting",
        "Option B": "Climate change",
        "Option C": "Habitat destruction",
        "Option D": "Disease",
        "Correct Option": "C",
        "Explanation": "Habitat destruction is the primary cause of species extinction."
    },
    {
        "Q.No": "60",
        "Question": "The protein shell of a virus is made up of",
        "Option A": "Lipids",
        "Option B": "Polysaccharides",
        "Option C": "Capsomeres",
        "Option D": "Nucleotides",
        "Correct Option": "C",
        "Explanation": "Capsomeres are protein subunits that form the capsid of a virus."
    },
    {
        "Q.No": "61",
        "Question": "What is the primary function of a viral spike protein?",
        "Option A": "DNA replication",
        "Option B": "Protein synthesis",
        "Option C": "Host cell recognition and entry",
        "Option D": "Energy production",
        "Correct Option": "C",
        "Explanation": "Viral spike proteins help viruses attach to and enter host cells."
    },
    {
        "Q.No": "62",
        "Question": "Which kingdom does yeast belong to?",
        "Option A": "Monera",
        "Option B": "Fungi",
        "Option C": "Protista",
        "Option D": "Plantae",
        "Correct Option": "B",
        "Explanation": "Yeast is a unicellular fungus."
    },
    {
        "Q.No": "63",
        "Question": "The most significant greenhouse gas affecting biodiversity is",
        "Option A": "Oxygen",
        "Option B": "Carbon dioxide",
        "Option C": "Nitrogen",
        "Option D": "Helium",
        "Correct Option": "B",
        "Explanation": "CO₂ contributes to climate change, which impacts biodiversity."
    },
    {
        "Q.No": "64",
        "Question": "The most common shape of helical viruses is",
        "Option A": "Rod-shaped",
        "Option B": "Spherical",
        "Option C": "Complex",
        "Option D": "Icosahedral",
        "Correct Option": "A",
        "Explanation": "Helical viruses, like the tobacco mosaic virus, are rod-shaped."
    },
    {
        "Q.No": "65",
        "Question": "Ebola virus primarily spreads through",
        "Option A": "Airborne transmission",
        "Option B": "Contaminated water",
        "Option C": "Direct contact with bodily fluids",
        "Option D": "Vector-borne transmission",
        "Correct Option": "C",
        "Explanation": "Ebola spreads through direct contact with infected bodily fluids."
    },
    {
        "Q.No": "66",
        "Question": "Genetic recombination in viruses occurs through",
        "Option A": "Binary fission",
        "Option B": "Budding",
        "Option C": "Transduction",
        "Option D": "Lysis",
        "Correct Option": "C",
        "Explanation": "Viruses can undergo genetic recombination via transduction."
    },
    {
        "Q.No": "67",
        "Question": "Which of the following does NOT contribute to biodiversity loss?",
        "Option A": "Deforestation",
        "Option B": "Climate change",
        "Option C": "Overfishing",
        "Option D": "Ecotourism",
        "Correct Option": "D",
        "Explanation": "Ecotourism promotes conservation rather than biodiversity loss."
    },
    {
        "Q.No": "68",
        "Question": "Which type of biodiversity includes different functional roles of organisms in an ecosystem?",
        "Option A": "Genetic diversity",
        "Option B": "Species diversity",
        "Option C": "Ecosystem diversity",
        "Option D": "Functional diversity",
        "Correct Option": "D",
        "Explanation": "Functional diversity refers to the variety of roles organisms play in an ecosystem."
    },
    {
        "Q.No": "69",
        "Question": "The primary component of viral genomes is",
        "Option A": "Only DNA",
        "Option B": "Only RNA",
        "Option C": "Either DNA or RNA",
        "Option D": "Both DNA and RNA",
        "Correct Option": "C",
        "Explanation": "Viruses contain either DNA or RNA, but never both."
    },
    {
        "Q.No": "70",
        "Question": "What is the main function of biodiversity in an ecosystem?",
        "Option A": "Increase energy flow",
        "Option B": "Maintain ecological balance",
        "Option C": "Provide raw materials",
        "Option D": "Prevent natural disasters",
        "Correct Option": "B",
        "Explanation": "Biodiversity maintains ecological balance and stability."
    },
    {
        "Q.No": "71",
        "Question": "The first vaccine developed was against which viral disease?",
        "Option A": "Influenza",
        "Option B": "Rabies",
        "Option C": "Smallpox",
        "Option D": "Polio",
        "Correct Option": "C",
        "Explanation": "Edward Jenner developed the first vaccine against smallpox."
    },
    {
        "Q.No": "72",
        "Question": "What is the main purpose of a viral capsid?",
        "Option A": "To store nutrients",
        "Option B": "To transport the virus",
        "Option C": "To protect viral genetic material",
        "Option D": "To provide energy",
        "Correct Option": "C",
        "Explanation": "The capsid protects the viral genome from external damage."
    },
    {
        "Q.No": "73",
        "Question": "Which of the following is an example of an RNA virus?",
        "Option A": "Hepatitis B",
        "Option B": "HIV",
        "Option C": "Adenovirus",
        "Option D": "Herpesvirus",
        "Correct Option": "B",
        "Explanation": "HIV is an RNA virus that uses reverse transcriptase to replicate."
    },
    {
        "Q.No": "74",
        "Question": "Which type of biodiversity focuses on the variety of genes within a species?",
        "Option A": "Species diversity",
        "Option B": "Genetic diversity",
        "Option C": "Ecosystem diversity",
        "Option D": "Functional diversity",
        "Correct Option": "B",
        "Explanation": "Genetic diversity refers to variations in genes within a species."
    },
    {
        "Q.No": "75",
        "Question": "Which category of viruses infects bacteria?",
        "Option A": "Retroviruses",
        "Option B": "Bacteriophages",
        "Option C": "Viroids",
        "Option D": "Prions",
        "Correct Option": "B",
        "Explanation": "Bacteriophages specifically infect bacterial cells."
    },
    {
        "Q.No": "76",
        "Question": "Which organism is responsible for nitrogen fixation?",
        "Option A": "Viruses",
        "Option B": "Cyanobacteria",
        "Option C": "Fungi",
        "Option D": "Protozoa",
        "Correct Option": "B",
        "Explanation": "Cyanobacteria (e.g., Nostoc) fix atmospheric nitrogen."
    },
    {
        "Q.No": "77",
        "Question": "The ability of viruses to infect specific cells depends on",
        "Option A": "Their metabolic activity",
        "Option B": "Their energy production",
        "Option C": "The presence of specific receptors",
        "Option D": "Their size",
        "Correct Option": "C",
        "Explanation": "Viruses attach to host cells using specific receptor sites."
    },
    {
        "Q.No": "78",
        "Question": "What is the protein subunit that makes up the viral capsid called?",
        "Option A": "Nucleoid",
        "Option B": "Ribosome",
        "Option C": "Capsomere",
        "Option D": "Envelope",
        "Correct Option": "C",
        "Explanation": "Capsomeres assemble to form the viral capsid."
    },
    {
        "Q.No": "79",
        "Question": "Which of the following is NOT considered a living organism?",
        "Option A": "Bacteria",
        "Option B": "Fungi",
        "Option C": "Virus",
        "Option D": "Protozoa",
        "Correct Option": "C",
        "Explanation": "Viruses lack cellular structures and metabolism, making them non-living."
    },
    {
        "Q.No": "80",
        "Question": "Which kingdom has the highest species diversity?",
        "Option A": "Plantae",
        "Option B": "Animalia",
        "Option C": "Fungi",
        "Option D": "Monera",
        "Correct Option": "B",
        "Explanation": "The Animalia kingdom has the most species diversity."
    },
    {
        "Q.No": "81",
        "Question": "What is the term for the disappearance of a species from Earth?",
        "Option A": "Endemism",
        "Option B": "Extinction",
        "Option C": "Evolution",
        "Option D": "Mutation",
        "Correct Option": "B",
        "Explanation": "Extinction refers to the permanent loss of a species."
    },
    {
        "Q.No": "82",
        "Question": "The International Union for Conservation of Nature (IUCN) maintains the",
        "Option A": "Biodiversity Index",
        "Option B": "Red List",
        "Option C": "Blue List",
        "Option D": "Ecological Report",
        "Correct Option": "B",
        "Explanation": "The IUCN Red List categorizes species based on their risk of extinction."
    },
    {
        "Q.No": "83",
        "Question": "Which of the following is NOT an example of ecosystem diversity?",
        "Option A": "Coral reefs",
        "Option B": "Tropical rainforests",
        "Option C": "DNA variation in a population",
        "Option D": "Grasslands",
        "Correct Option": "C",
        "Explanation": "DNA variation is part of genetic diversity, not ecosystem diversity."
    },
    {
        "Q.No": "84",
        "Question": "Which type of virus contains both DNA and RNA?",
        "Option A": "Retroviruses",
        "Option B": "Adenoviruses",
        "Option C": "None",
        "Option D": "Bacteriophages",
        "Correct Option": "C",
        "Explanation": "No known virus contains both DNA and RNA."
    },
    {
        "Q.No": "85",
        "Question": "What does the term \"\"biodiversity hotspot\"\" refer to?",
        "Option A": "Areas with high desertification",
        "Option B": "Areas with rich but threatened biodiversity",
        "Option C": "Areas with uniform species distribution",
        "Option D": "Areas with no endemic species",
        "Correct Option": "B",
        "Explanation": "Biodiversity hotspots have high species richness but face threats."
    },
    {
        "Q.No": "86",
        "Question": "Which structure in viruses is responsible for attaching to host cells?",
        "Option A": "Envelope",
        "Option B": "Capsid",
        "Option C": "Tail fibers",
        "Option D": "Nucleic acid",
        "Correct Option": "C",
        "Explanation": "Tail fibers help bacteriophages attach to bacterial cells."
    },
    {
        "Q.No": "87",
        "Question": "The loss of biodiversity can lead to",
        "Option A": "Increased ecosystem stability",
        "Option B": "Improved food security",
        "Option C": "Ecological imbalance",
        "Option D": "Greater genetic variation",
        "Correct Option": "C",
        "Explanation": "Biodiversity loss disrupts ecological balance."
    },
    {
        "Q.No": "88",
        "Question": "Which of the following is NOT a human-induced cause of biodiversity loss?",
        "Option A": "Climate change",
        "Option B": "Natural disasters",
        "Option C": "Habitat destruction",
        "Option D": "Overfishing",
        "Correct Option": "B",
        "Explanation": "Natural disasters are not caused by human activities."
    },
    {
        "Q.No": "89",
        "Question": "What is the primary reason viruses are not classified as living organisms?",
        "Option A": "They lack a nucleus",
        "Option B": "They cannot replicate independently",
        "Option C": "They have no genetic material",
        "Option D": "They do not have cell walls",
        "Correct Option": "B",
        "Explanation": "Viruses require a host cell for replication."
    },
    {
        "Q.No": "90",
        "Question": "How do prions differ from viruses?",
        "Option A": "Prions have DNA, but viruses do not",
        "Option B": "Prions are made only of protein",
        "Option C": "Prions infect plants, viruses do not",
        "Option D": "Prions have a lipid membrane",
        "Correct Option": "B",
        "Explanation": "Prions are infectious proteins without genetic material."
    },
    {
        "Q.No": "91",
        "Question": "Which ecosystem is known for having the highest biodiversity?",
        "Option A": "Tundra",
        "Option B": "Rainforest",
        "Option C": "Desert",
        "Option D": "Ocean",
        "Correct Option": "B",
        "Explanation": "Rainforests have the highest biodiversity due to favorable conditions."
    },
    {
        "Q.No": "92",
        "Question": "The primary role of decomposers in an ecosystem is to",
        "Option A": "Produce oxygen",
        "Option B": "Break down organic matter",
        "Option C": "Absorb sunlight",
        "Option D": "Fix nitrogen",
        "Correct Option": "B",
        "Explanation": "Decomposers recycle nutrients by breaking down dead matter."
    },
    {
        "Q.No": "93",
        "Question": "The most significant role of biodiversity in agriculture is",
        "Option A": "Increasing soil erosion",
        "Option B": "Enhancing genetic variation",
        "Option C": "Reducing food production",
        "Option D": "Increasing habitat loss",
        "Correct Option": "B",
        "Explanation": "Biodiversity ensures genetic variation, which is crucial for crops and livestock."
    },
    {
        "Q.No": "94",
        "Question": "Which term describes a species found only in a specific geographic location?",
        "Option A": "Endemic species",
        "Option B": "Invasive species",
        "Option C": "Extinct species",
        "Option D": "Migratory species",
        "Correct Option": "A",
        "Explanation": "Endemic species are restricted to a particular region."
    },
    {
        "Q.No": "95",
        "Question": "Which of the following is an example of a zoonotic virus?",
        "Option A": "Dengue",
        "Option B": "Measles",
        "Option C": "Rabies",
        "Option D": "Smallpox",
        "Correct Option": "C",
        "Explanation": "Rabies is transmitted from animals to humans (zoonotic)."
    },
    {
        "Q.No": "96",
        "Question": "What is the primary mode of transmission for the influenza virus?",
        "Option A": "Contaminated food",
        "Option B": "Mosquito bites",
        "Option C": "Airborne droplets",
        "Option D": "Waterborne transmission",
        "Correct Option": "C",
        "Explanation": "Influenza spreads through airborne droplets."
    },
    {
        "Q.No": "97",
        "Question": "Which of the following contributes most to habitat destruction?",
        "Option A": "Recycling",
        "Option B": "Urbanization",
        "Option C": "Sustainable farming",
        "Option D": "Wildlife corridors",
        "Correct Option": "B",
        "Explanation": "Urbanization leads to habitat loss for many species."
    },
    {
        "Q.No": "98",
        "Question": "What is the function of the viral envelope?",
        "Option A": "Provides metabolic energy",
        "Option B": "Helps viruses avoid the immune system",
        "Option C": "Synthesizes proteins",
        "Option D": "Replicates viral DNA",
        "Correct Option": "B",
        "Explanation": "The viral envelope protects the virus and aids in host cell entry."
    },
    {
        "Q.No": "99",
        "Question": "Which viral disease has been eradicated through vaccination?",
        "Option A": "Smallpox",
        "Option B": "Polio",
        "Option C": "Measles",
        "Option D": "HIV/AIDS",
        "Correct Option": "A",
        "Explanation": "Smallpox was eradicated through global vaccination efforts."
    },
    {
        "Q.No": "100",
        "Question": "The study of the interaction between organisms and their environment is called",
        "Option A": "Biology",
        "Option B": "Genetics",
        "Option C": "Ecology",
        "Option D": "Taxonomy",
        "Correct Option": "C",
        "Explanation": "Ecology focuses on interactions between organisms and their surroundings."
    }
      ]
    },
    "Cellular Respiration & Photosynthesis": {
      color: "#8e44ad",
      icon: "⚡🌱🧬",
      questions: [
        {
        "Q.No": "1",
        "Question": "What is the main energy currency of the cell?",
        "Option A": "NADH",
        "Option B": "ATP",
        "Option C": "FADH2",
        "Option D": "Glucose",
        "Correct Option": "B",
        "Explanation": "ATP (Adenosine Triphosphate) is the primary energy carrier in cells."
    },
    {
        "Q.No": "2",
        "Question": "Which process directly produces ATP in the absence of oxygen?",
        "Option A": "Aerobic respiration",
        "Option B": "Glycolysis",
        "Option C": "Krebs cycle",
        "Option D": "Electron transport chain",
        "Correct Option": "B",
        "Explanation": "Glycolysis produces ATP anaerobically."
    },
    {
        "Q.No": "3",
        "Question": "What is the final electron acceptor in the electron transport chain?",
        "Option A": "Oxygen",
        "Option B": "NAD+",
        "Option C": "FAD+",
        "Option D": "Carbon dioxide",
        "Correct Option": "A",
        "Explanation": "Oxygen accepts electrons and combines with protons to form water."
    },
    {
        "Q.No": "4",
        "Question": "Which of the following molecules stores the most energy?",
        "Option A": "ATP",
        "Option B": "Glucose",
        "Option C": "NADH",
        "Option D": "FADH2",
        "Correct Option": "B",
        "Explanation": "Glucose contains the most stored energy."
    },
    {
        "Q.No": "5",
        "Question": "Where does glycolysis occur in the cell?",
        "Option A": "Mitochondria",
        "Option B": "Cytoplasm",
        "Option C": "Nucleus",
        "Option D": "Ribosome",
        "Correct Option": "B",
        "Explanation": "Glycolysis takes place in the cytoplasm."
    },
    {
        "Q.No": "6",
        "Question": "The first step of glycolysis involves the conversion of glucose into",
        "Option A": "Pyruvate",
        "Option B": "Fructose-6-phosphate",
        "Option C": "Glucose-6-phosphate",
        "Option D": "Acetyl-CoA",
        "Correct Option": "C",
        "Explanation": "Glucose is phosphorylated to glucose-6-phosphate."
    },
    {
        "Q.No": "7",
        "Question": "How many ATP molecules are produced per glucose in glycolysis?",
        "Option A": "2",
        "Option B": "4",
        "Option C": "6",
        "Option D": "8",
        "Correct Option": "B",
        "Explanation": "Glycolysis produces 4 ATP, but the net gain is 2 ATP."
    },
    {
        "Q.No": "8",
        "Question": "Which of the following is not a product of glycolysis?",
        "Option A": "ATP",
        "Option B": "Pyruvate",
        "Option C": "NADH",
        "Option D": "FADH2",
        "Correct Option": "D",
        "Explanation": "FADH2 is produced in the Krebs cycle, not glycolysis."
    },
    {
        "Q.No": "9",
        "Question": "What is the primary function of the Krebs cycle?",
        "Option A": "Produce ATP directly",
        "Option B": "Generate high-energy electron carriers",
        "Option C": "Store glucose",
        "Option D": "Break down amino acids",
        "Correct Option": "B",
        "Explanation": "The Krebs cycle produces NADH and FADH2 for ATP synthesis."
    },
    {
        "Q.No": "10",
        "Question": "Where does the Krebs cycle take place?",
        "Option A": "Cytoplasm",
        "Option B": "Nucleus",
        "Option C": "Mitochondrial matrix",
        "Option D": "Ribosome",
        "Correct Option": "C",
        "Explanation": "The Krebs cycle occurs in the mitochondrial matrix."
    },
    {
        "Q.No": "11",
        "Question": "What is the total number of NADH molecules generated per glucose molecule during the Krebs cycle?",
        "Option A": "2",
        "Option B": "4",
        "Option C": "6",
        "Option D": "8",
        "Correct Option": "C",
        "Explanation": "The Krebs cycle generates 6 NADH per glucose molecule."
    },
    {
        "Q.No": "12",
        "Question": "What enzyme catalyzes ATP synthesis in oxidative phosphorylation?",
        "Option A": "Hexokinase",
        "Option B": "ATP synthase",
        "Option C": "Rubisco",
        "Option D": "Phosphofructokinase",
        "Correct Option": "B",
        "Explanation": "ATP synthase uses the proton gradient to generate ATP."
    },
    {
        "Q.No": "13",
        "Question": "Which molecule provides electrons for oxidative phosphorylation?",
        "Option A": "Oxygen",
        "Option B": "Water",
        "Option C": "NADH",
        "Option D": "ATP",
        "Correct Option": "C",
        "Explanation": "NADH donates electrons to the electron transport chain."
    },
    {
        "Q.No": "14",
        "Question": "How many ATP molecules are produced from one glucose in aerobic respiration?",
        "Option A": "2",
        "Option B": "12",
        "Option C": "30-32",
        "Option D": "40-42",
        "Correct Option": "C",
        "Explanation": "Aerobic respiration yields about 30-32 ATP per glucose."
    },
    {
        "Q.No": "15",
        "Question": "What happens to excess energy in cells?",
        "Option A": "Stored as ATP",
        "Option B": "Stored as glycogen or fat",
        "Option C": "Lost as heat",
        "Option D": "Converted to CO2",
        "Correct Option": "B",
        "Explanation": "Extra energy is stored in glycogen or fat."
    },
    {
        "Q.No": "16",
        "Question": "What is the main purpose of fermentation?",
        "Option A": "Produce ATP",
        "Option B": "Regenerate NAD+",
        "Option C": "Generate CO2",
        "Option D": "Store energy",
        "Correct Option": "B",
        "Explanation": "Fermentation regenerates NAD+ for glycolysis to continue."
    },
    {
        "Q.No": "17",
        "Question": "Which type of fermentation occurs in human muscles under low oxygen?",
        "Option A": "Alcoholic",
        "Option B": "Lactic acid",
        "Option C": "Acetic acid",
        "Option D": "Butyric acid",
        "Correct Option": "B",
        "Explanation": "Lactic acid fermentation occurs in muscles during anaerobic conditions."
    },
    {
        "Q.No": "18",
        "Question": "In which organelle does photosynthesis occur?",
        "Option A": "Mitochondria",
        "Option B": "Chloroplast",
        "Option C": "Nucleus",
        "Option D": "Ribosome",
        "Correct Option": "B",
        "Explanation": "Photosynthesis occurs in the chloroplasts of plant cells."
    },
    {
        "Q.No": "19",
        "Question": "The light-dependent reactions take place in the",
        "Option A": "Stroma",
        "Option B": "Thylakoid membrane",
        "Option C": "Cytoplasm",
        "Option D": "Mitochondria",
        "Correct Option": "B",
        "Explanation": "Light-dependent reactions occur in the thylakoid membrane."
    },
    {
        "Q.No": "20",
        "Question": "What is the main pigment involved in photosynthesis?",
        "Option A": "Carotenoids",
        "Option B": "Xanthophylls",
        "Option C": "Chlorophyll",
        "Option D": "Hemoglobin",
        "Correct Option": "C",
        "Explanation": "Chlorophyll absorbs light for photosynthesis."
    },
    {
        "Q.No": "21",
        "Question": "Which molecule is produced in the Calvin cycle?",
        "Option A": "ATP",
        "Option B": "NADH",
        "Option C": "Glucose",
        "Option D": "Oxygen",
        "Correct Option": "C",
        "Explanation": "The Calvin cycle synthesizes glucose."
    },
    {
        "Q.No": "22",
        "Question": "What is the source of oxygen released during photosynthesis?",
        "Option A": "Carbon dioxide",
        "Option B": "Water",
        "Option C": "Glucose",
        "Option D": "NADPH",
        "Correct Option": "B",
        "Explanation": "Oxygen comes from the splitting of water."
    },
    {
        "Q.No": "23",
        "Question": "The energy required for photosynthesis comes from",
        "Option A": "ATP",
        "Option B": "Heat",
        "Option C": "Sunlight",
        "Option D": "Carbon dioxide",
        "Correct Option": "C",
        "Explanation": "Photosynthesis depends on light energy."
    },
    {
        "Q.No": "24",
        "Question": "Which enzyme fixes carbon in the Calvin cycle?",
        "Option A": "ATP synthase",
        "Option B": "Hexokinase",
        "Option C": "Rubisco",
        "Option D": "Pyruvate kinase",
        "Correct Option": "C",
        "Explanation": "Rubisco catalyzes carbon fixation."
    },
    {
        "Q.No": "25",
        "Question": "How many ATP molecules are consumed in the Calvin cycle per glucose?",
        "Option A": "2",
        "Option B": "6",
        "Option C": "12",
        "Option D": "18",
        "Correct Option": "D",
        "Explanation": "The Calvin cycle requires 18 ATP to form one glucose molecule."
    },
    {
        "Q.No": "26",
        "Question": "The main product of the light reactions of photosynthesis is",
        "Option A": "ATP",
        "Option B": "Glucose",
        "Option C": "CO2",
        "Option D": "Pyruvate",
        "Correct Option": "A",
        "Explanation": "ATP is produced in the light reactions."
    },
    {
        "Q.No": "27",
        "Question": "Which alternative pathway allows plants to survive in hot climates?",
        "Option A": "CAM pathway",
        "Option B": "Krebs cycle",
        "Option C": "Glycolysis",
        "Option D": "Oxidative phosphorylation",
        "Correct Option": "A",
        "Explanation": "The CAM pathway helps plants conserve water."
    },
    {
        "Q.No": "28",
        "Question": "What is the first stable compound formed in the Calvin cycle?",
        "Option A": "PGA",
        "Option B": "RuBP",
        "Option C": "NADPH",
        "Option D": "Oxygen",
        "Correct Option": "A",
        "Explanation": "PGA (3-phosphoglycerate) is the first stable compound."
    },
    {
        "Q.No": "29",
        "Question": "Which process generates the most ATP per glucose molecule?",
        "Option A": "Glycolysis",
        "Option B": "Krebs cycle",
        "Option C": "Electron transport chain",
        "Option D": "Fermentation",
        "Correct Option": "C",
        "Explanation": "The electron transport chain produces the most ATP."
    },
    {
        "Q.No": "30",
        "Question": "The efficiency of cellular respiration is approximately",
        "Option A": "10%",
        "Option B": "20%",
        "Option C": "40%",
        "Option D": "90%",
        "Correct Option": "C",
        "Explanation": "About 40% of glucose’s energy is converted to ATP."
    },
    {
        "Q.No": "31",
        "Question": "What is the final product of anaerobic respiration in yeast?",
        "Option A": "Lactic acid",
        "Option B": "Ethanol and CO2",
        "Option C": "Glucose",
        "Option D": "ATP",
        "Correct Option": "B",
        "Explanation": "Yeast produces ethanol and CO2 in anaerobic respiration."
    },
    {
        "Q.No": "32",
        "Question": "What happens to pyruvate in the absence of oxygen?",
        "Option A": "Enters the Krebs cycle",
        "Option B": "Converts to acetyl-CoA",
        "Option C": "Undergoes fermentation",
        "Option D": "Joins the electron transport chain",
        "Correct Option": "C",
        "Explanation": "Pyruvate undergoes fermentation when oxygen is absent."
    },
    {
        "Q.No": "33",
        "Question": "In which part of the mitochondrion does the electron transport chain occur?",
        "Option A": "Matrix",
        "Option B": "Cristae",
        "Option C": "Inner membrane",
        "Option D": "Outer membrane",
        "Correct Option": "C",
        "Explanation": "The electron transport chain is in the inner mitochondrial membrane."
    },
    {
        "Q.No": "34",
        "Question": "What drives ATP synthesis in the electron transport chain?",
        "Option A": "Electrons",
        "Option B": "Proton gradient",
        "Option C": "CO2",
        "Option D": "Glucose",
        "Correct Option": "B",
        "Explanation": "The proton gradient across the inner membrane powers ATP synthesis."
    },
    {
        "Q.No": "35",
        "Question": "Which molecule donates electrons at the start of the electron transport chain?",
        "Option A": "NADH",
        "Option B": "ATP",
        "Option C": "Glucose",
        "Option D": "CO2",
        "Correct Option": "A",
        "Explanation": "NADH donates electrons to the first protein complex."
    },
    {
        "Q.No": "36",
        "Question": "Which of the following is an electron carrier in cellular respiration?",
        "Option A": "ATP",
        "Option B": "FADH2",
        "Option C": "CO2",
        "Option D": "O2",
        "Correct Option": "B",
        "Explanation": "FADH2 carries electrons to the electron transport chain."
    },
    {
        "Q.No": "37",
        "Question": "The chemiosmotic theory explains ATP generation through",
        "Option A": "Electron transfer",
        "Option B": "Proton gradient",
        "Option C": "Glycolysis",
        "Option D": "Substrate-level phosphorylation",
        "Correct Option": "B",
        "Explanation": "ATP is synthesized using the proton gradient created by the electron transport chain."
    },
    {
        "Q.No": "38",
        "Question": "Which process produces the most NADH?",
        "Option A": "Glycolysis",
        "Option B": "Krebs cycle",
        "Option C": "Calvin cycle",
        "Option D": "Fermentation",
        "Correct Option": "B",
        "Explanation": "The Krebs cycle produces 6 NADH per glucose molecule."
    },
    {
        "Q.No": "39",
        "Question": "The first step of the Krebs cycle combines acetyl-CoA with",
        "Option A": "Oxaloacetate",
        "Option B": "Citrate",
        "Option C": "Pyruvate",
        "Option D": "Malate",
        "Correct Option": "A",
        "Explanation": "Acetyl-CoA combines with oxaloacetate to form citrate."
    },
    {
        "Q.No": "40",
        "Question": "ATP synthesis in glycolysis occurs via",
        "Option A": "Oxidative phosphorylation",
        "Option B": "Substrate-level phosphorylation",
        "Option C": "Chemiosmosis",
        "Option D": "Fermentation",
        "Correct Option": "B",
        "Explanation": "ATP in glycolysis is generated through substrate-level phosphorylation."
    },
    {
        "Q.No": "41",
        "Question": "What is the end product of glycolysis?",
        "Option A": "Acetyl-CoA",
        "Option B": "ATP",
        "Option C": "NADH",
        "Option D": "Pyruvate",
        "Correct Option": "D",
        "Explanation": "Pyruvate is the final product of glycolysis."
    },
    {
        "Q.No": "42",
        "Question": "How many ATP molecules are directly generated in the Krebs cycle per glucose?",
        "Option A": "1",
        "Option B": "2",
        "Option C": "4",
        "Option D": "6",
        "Correct Option": "B",
        "Explanation": "Each turn of the cycle generates 1 ATP, making 2 per glucose."
    },
    {
        "Q.No": "43",
        "Question": "Where does the Calvin cycle take place?",
        "Option A": "Stroma",
        "Option B": "Thylakoid",
        "Option C": "Cytoplasm",
        "Option D": "Mitochondria",
        "Correct Option": "A",
        "Explanation": "The Calvin cycle occurs in the stroma of chloroplasts."
    },
    {
        "Q.No": "44",
        "Question": "Which step of cellular respiration releases CO2?",
        "Option A": "Glycolysis",
        "Option B": "Krebs cycle",
        "Option C": "Electron transport chain",
        "Option D": "ATP synthesis",
        "Correct Option": "B",
        "Explanation": "The Krebs cycle releases CO2 as a byproduct."
    },
    {
        "Q.No": "45",
        "Question": "Which molecule provides electrons in the light reactions of photosynthesis?",
        "Option A": "Water",
        "Option B": "Glucose",
        "Option C": "NADH",
        "Option D": "Oxygen",
        "Correct Option": "A",
        "Explanation": "Water splits to provide electrons."
    },
    {
        "Q.No": "46",
        "Question": "The main function of cyclic photophosphorylation is to",
        "Option A": "Generate ATP only",
        "Option B": "Produce NADPH",
        "Option C": "Release oxygen",
        "Option D": "Split water",
        "Correct Option": "A",
        "Explanation": "Cyclic photophosphorylation produces ATP but not NADPH."
    },
    {
        "Q.No": "47",
        "Question": "What type of energy conversion occurs in photosynthesis?",
        "Option A": "Chemical to light",
        "Option B": "Light to chemical",
        "Option C": "Heat to chemical",
        "Option D": "Electrical to chemical",
        "Correct Option": "B",
        "Explanation": "Light energy is converted into chemical energy in photosynthesis."
    },
    {
        "Q.No": "48",
        "Question": "Which factor does not affect the rate of photosynthesis?",
        "Option A": "Light intensity",
        "Option B": "CO2 concentration",
        "Option C": "Oxygen concentration",
        "Option D": "Temperature",
        "Correct Option": "C",
        "Explanation": "Oxygen concentration does not significantly impact photosynthesis."
    },
    {
        "Q.No": "49",
        "Question": "The enzyme that catalyzes the formation of ATP in photosynthesis is",
        "Option A": "ATP synthase",
        "Option B": "Rubisco",
        "Option C": "NADP reductase",
        "Option D": "Cytochrome c",
        "Correct Option": "A",
        "Explanation": "ATP synthase is responsible for ATP formation."
    },
    {
        "Q.No": "50",
        "Question": "What is the purpose of the NADPH produced in the light reactions?",
        "Option A": "Provide electrons for the Calvin cycle",
        "Option B": "Generate ATP",
        "Option C": "Split water",
        "Option D": "Release oxygen",
        "Correct Option": "A",
        "Explanation": "NADPH carries electrons to the Calvin cycle for carbon fixation."
    },
    {
        "Q.No": "51",
        "Question": "Which process occurs in both photosynthesis and cellular respiration?",
        "Option A": "Glycolysis",
        "Option B": "Calvin cycle",
        "Option C": "Electron transport chain",
        "Option D": "Fermentation",
        "Correct Option": "C",
        "Explanation": "The electron transport chain exists in both processes."
    },
    {
        "Q.No": "52",
        "Question": "The ATP produced in photosynthesis is used for",
        "Option A": "Glycolysis",
        "Option B": "Krebs cycle",
        "Option C": "Light reactions",
        "Option D": "Calvin cycle",
        "Correct Option": "D",
        "Explanation": "ATP from the light reactions powers the Calvin cycle."
    },
    {
        "Q.No": "53",
        "Question": "During aerobic respiration, oxygen is used to",
        "Option A": "Form glucose",
        "Option B": "Accept electrons at the end of the electron transport chain",
        "Option C": "Donate electrons",
        "Option D": "Split ATP",
        "Correct Option": "B",
        "Explanation": "Oxygen is the final electron acceptor."
    },
    {
        "Q.No": "54",
        "Question": "In which stage of photosynthesis is oxygen produced?",
        "Option A": "Light-dependent reactions",
        "Option B": "Light-independent reactions",
        "Option C": "Calvin cycle",
        "Option D": "Glycolysis",
        "Correct Option": "A",
        "Explanation": "Oxygen is released during the light-dependent reactions."
    },
    {
        "Q.No": "55",
        "Question": "How many ATP molecules are produced per FADH2 molecule in the electron transport chain?",
        "Option A": "1",
        "Option B": "1.5",
        "Option C": "2.5",
        "Option D": "3",
        "Correct Option": "B",
        "Explanation": "FADH2 produces approximately 1.5 ATP per molecule."
    },
    {
        "Q.No": "56",
        "Question": "The primary function of cellular respiration is to",
        "Option A": "Produce ATP",
        "Option B": "Store glucose",
        "Option C": "Synthesize proteins",
        "Option D": "Generate heat",
        "Correct Option": "A",
        "Explanation": "Cellular respiration generates ATP."
    },
    {
        "Q.No": "57",
        "Question": "Which pigment is directly involved in photosynthesis?",
        "Option A": "Carotenoids",
        "Option B": "Chlorophyll a",
        "Option C": "Xanthophylls",
        "Option D": "Chlorophyll b",
        "Correct Option": "B",
        "Explanation": "Chlorophyll a is the main photosynthetic pigment."
    },
    {
        "Q.No": "58",
        "Question": "The function of cytochrome c in the electron transport chain is to",
        "Option A": "Pump protons",
        "Option B": "Transfer electrons",
        "Option C": "Produce ATP",
        "Option D": "Fix carbon",
        "Correct Option": "B",
        "Explanation": "Cytochrome c transfers electrons between complexes."
    },
    {
        "Q.No": "59",
        "Question": "What is the role of carbon fixation in the Calvin cycle?",
        "Option A": "ATP generation",
        "Option B": "Sugar synthesis",
        "Option C": "CO2 incorporation",
        "Option D": "Oxygen release",
        "Correct Option": "C",
        "Explanation": "Carbon fixation incorporates CO2 into organic molecules."
    },
    {
        "Q.No": "60",
        "Question": "The immediate product of photosystem II is",
        "Option A": "Oxygen",
        "Option B": "ATP",
        "Option C": "NADPH",
        "Option D": "Glucose",
        "Correct Option": "A",
        "Explanation": "Photosystem II produces oxygen via water splitting."
    },
    {
        "Q.No": "61",
        "Question": "What is the fate of pyruvate in aerobic respiration?",
        "Option A": "Converted to acetyl-CoA",
        "Option B": "Used directly in the Krebs cycle",
        "Option C": "Converted to ethanol",
        "Option D": "Broken into glucose",
        "Correct Option": "A",
        "Explanation": "Pyruvate is converted to acetyl-CoA."
    },
    {
        "Q.No": "62",
        "Question": "Which organelle is responsible for breaking down glucose in eukaryotic cells?",
        "Option A": "Nucleus",
        "Option B": "Ribosome",
        "Option C": "Mitochondria",
        "Option D": "Chloroplast",
        "Correct Option": "C",
        "Explanation": "Mitochondria break down glucose for ATP production."
    },
    {
        "Q.No": "63",
        "Question": "The process of breaking down lipids for energy is called",
        "Option A": "Lipolysis",
        "Option B": "Glycolysis",
        "Option C": "Photosynthesis",
        "Option D": "Oxidation",
        "Correct Option": "A",
        "Explanation": "Lipolysis breaks down fats into fatty acids for energy."
    },
    {
        "Q.No": "64",
        "Question": "The enzyme that catalyzes the first step of glycolysis is",
        "Option A": "ATP synthase",
        "Option B": "Phosphofructokinase",
        "Option C": "Hexokinase",
        "Option D": "Pyruvate kinase",
        "Correct Option": "C",
        "Explanation": "Hexokinase phosphorylates glucose in glycolysis."
    },
    {
        "Q.No": "65",
        "Question": "Where do the light-independent reactions of photosynthesis occur?",
        "Option A": "Thylakoid membrane",
        "Option B": "Stroma",
        "Option C": "Cytoplasm",
        "Option D": "Inner mitochondrial membrane",
        "Correct Option": "B",
        "Explanation": "The Calvin cycle occurs in the stroma."
    },
    {
        "Q.No": "66",
        "Question": "What is the primary electron donor in cellular respiration?",
        "Option A": "NADH",
        "Option B": "Oxygen",
        "Option C": "ATP",
        "Option D": "CO2",
        "Correct Option": "A",
        "Explanation": "NADH donates electrons to the electron transport chain."
    },
    {
        "Q.No": "67",
        "Question": "The hydrogen ion gradient required for ATP synthesis is established in the",
        "Option A": "Cytoplasm",
        "Option B": "Inner mitochondrial membrane",
        "Option C": "Outer mitochondrial membrane",
        "Option D": "Stroma",
        "Correct Option": "B",
        "Explanation": "The inner mitochondrial membrane maintains the gradient."
    },
    {
        "Q.No": "68",
        "Question": "Which part of a plant cell captures sunlight for photosynthesis?",
        "Option A": "Nucleus",
        "Option B": "Chloroplast",
        "Option C": "Mitochondria",
        "Option D": "Ribosome",
        "Correct Option": "B",
        "Explanation": "Chloroplasts capture sunlight for photosynthesis."
    },
    {
        "Q.No": "69",
        "Question": "What is the first molecule formed in the Calvin cycle?",
        "Option A": "RuBP",
        "Option B": "PGA",
        "Option C": "Acetyl-CoA",
        "Option D": "CO2",
        "Correct Option": "B",
        "Explanation": "PGA (3-phosphoglycerate) is the first stable compound."
    },
    {
        "Q.No": "70",
        "Question": "Which of the following molecules is an intermediate in both photosynthesis and respiration?",
        "Option A": "RuBP",
        "Option B": "NADH",
        "Option C": "G3P",
        "Option D": "ATP",
        "Correct Option": "C",
        "Explanation": "G3P is involved in both pathways."
    },
    {
        "Q.No": "71",
        "Question": "The energy source for oxidative phosphorylation is",
        "Option A": "Sunlight",
        "Option B": "Proton gradient",
        "Option C": "ATP",
        "Option D": "CO2",
        "Correct Option": "B",
        "Explanation": "The proton gradient powers ATP synthesis."
    },
    {
        "Q.No": "72",
        "Question": "What is the role of oxygen in cellular respiration?",
        "Option A": "Electron acceptor",
        "Option B": "Proton donor",
        "Option C": "Glucose carrier",
        "Option D": "ATP donor",
        "Correct Option": "A",
        "Explanation": "Oxygen acts as the final electron acceptor."
    },
    {
        "Q.No": "73",
        "Question": "What is the main function of NAD+ in glycolysis?",
        "Option A": "Store energy",
        "Option B": "Accept electrons",
        "Option C": "Generate ATP",
        "Option D": "Form CO2",
        "Correct Option": "B",
        "Explanation": "NAD+ accepts electrons and forms NADH."
    },
    {
        "Q.No": "74",
        "Question": "Which molecule carries electrons from the Krebs cycle to the electron transport chain?",
        "Option A": "ATP",
        "Option B": "NADH",
        "Option C": "FADH2",
        "Option D": "CO2",
        "Correct Option": "B",
        "Explanation": "NADH carries electrons to the electron transport chain."
    },
    {
        "Q.No": "75",
        "Question": "The ATP produced in glycolysis is a result of",
        "Option A": "Oxidative phosphorylation",
        "Option B": "Substrate-level phosphorylation",
        "Option C": "Photophosphorylation",
        "Option D": "Chemiosmosis",
        "Correct Option": "B",
        "Explanation": "Glycolysis produces ATP via substrate-level phosphorylation."
    },
    {
        "Q.No": "76",
        "Question": "What is the final product of the electron transport chain?",
        "Option A": "ATP",
        "Option B": "CO2",
        "Option C": "Water",
        "Option D": "Oxygen",
        "Correct Option": "C",
        "Explanation": "Water is formed when oxygen accepts electrons and hydrogen ions."
    },
    {
        "Q.No": "77",
        "Question": "The enzyme that fixes carbon in the Calvin cycle is",
        "Option A": "ATP synthase",
        "Option B": "Rubisco",
        "Option C": "PEP carboxylase",
        "Option D": "NADP reductase",
        "Correct Option": "B",
        "Explanation": "Rubisco catalyzes carbon fixation in the Calvin cycle."
    },
    {
        "Q.No": "78",
        "Question": "Where does glycolysis occur?",
        "Option A": "Mitochondria",
        "Option B": "Cytoplasm",
        "Option C": "Chloroplast",
        "Option D": "Nucleus",
        "Correct Option": "B",
        "Explanation": "Glycolysis takes place in the cytoplasm."
    },
    {
        "Q.No": "79",
        "Question": "Which molecule is a product of anaerobic respiration in yeast?",
        "Option A": "Ethanol",
        "Option B": "Lactate",
        "Option C": "Acetyl-CoA",
        "Option D": "Fumarate",
        "Correct Option": "A",
        "Explanation": "Yeast produces ethanol during anaerobic respiration."
    },
    {
        "Q.No": "80",
        "Question": "The energy required to start a chemical reaction is called",
        "Option A": "Free energy",
        "Option B": "Activation energy",
        "Option C": "Gibbs energy",
        "Option D": "Potential energy",
        "Correct Option": "B",
        "Explanation": "Activation energy is needed to initiate a reaction."
    },
    {
        "Q.No": "81",
        "Question": "The movement of protons across a membrane to drive ATP synthesis is known as",
        "Option A": "Chemiosmosis",
        "Option B": "Glycolysis",
        "Option C": "Oxidation",
        "Option D": "Fermentation",
        "Correct Option": "A",
        "Explanation": "Chemiosmosis drives ATP synthesis using a proton gradient."
    },
    {
        "Q.No": "82",
        "Question": "What is the main role of NADPH in photosynthesis?",
        "Option A": "ATP production",
        "Option B": "Electron transport",
        "Option C": "Carbon fixation",
        "Option D": "Oxygen release",
        "Correct Option": "B",
        "Explanation": "NADPH provides electrons for carbon fixation in the Calvin cycle."
    },
    {
        "Q.No": "83",
        "Question": "The conversion of glucose into two pyruvate molecules produces how many net ATP?",
        "Option A": "2",
        "Option B": "4",
        "Option C": "6",
        "Option D": "8",
        "Correct Option": "A",
        "Explanation": "Glycolysis results in a net gain of 2 ATP."
    },
    {
        "Q.No": "84",
        "Question": "Which organelle is responsible for ATP production in eukaryotic cells?",
        "Option A": "Nucleus",
        "Option B": "Golgi apparatus",
        "Option C": "Mitochondria",
        "Option D": "Chloroplast",
        "Correct Option": "C",
        "Explanation": "Mitochondria produce ATP through cellular respiration."
    },
    {
        "Q.No": "85",
        "Question": "What is the first molecule formed in the Krebs cycle?",
        "Option A": "Acetyl-CoA",
        "Option B": "Oxaloacetate",
        "Option C": "Citrate",
        "Option D": "Succinate",
        "Correct Option": "C",
        "Explanation": "Citrate is the first compound formed in the Krebs cycle."
    },
    {
        "Q.No": "86",
        "Question": "The oxygen released in photosynthesis comes from",
        "Option A": "CO2",
        "Option B": "H2O",
        "Option C": "Glucose",
        "Option D": "ATP",
        "Correct Option": "B",
        "Explanation": "Water molecules are split to release oxygen."
    },
    {
        "Q.No": "87",
        "Question": "Which type of reaction releases energy?",
        "Option A": "Endergonic",
        "Option B": "Exergonic",
        "Option C": "Anabolic",
        "Option D": "Dehydration",
        "Correct Option": "B",
        "Explanation": "Exergonic reactions release energy."
    },
    {
        "Q.No": "88",
        "Question": "The site of the electron transport chain in mitochondria is the",
        "Option A": "Inner membrane",
        "Option B": "Outer membrane",
        "Option C": "Cytoplasm",
        "Option D": "Matrix",
        "Correct Option": "A",
        "Explanation": "The electron transport chain is located in the inner mitochondrial membrane."
    },
    {
        "Q.No": "89",
        "Question": "Which enzyme is responsible for ATP production in oxidative phosphorylation?",
        "Option A": "Pyruvate kinase",
        "Option B": "Rubisco",
        "Option C": "ATP synthase",
        "Option D": "Hexokinase",
        "Correct Option": "C",
        "Explanation": "ATP synthase catalyzes ATP formation."
    },
    {
        "Q.No": "90",
        "Question": "What is the primary function of glycolysis?",
        "Option A": "ATP production",
        "Option B": "Oxygen release",
        "Option C": "CO2 fixation",
        "Option D": "NADPH formation",
        "Correct Option": "A",
        "Explanation": "Glycolysis produces ATP and NADH."
    },
    {
        "Q.No": "91",
        "Question": "Which process generates the most ATP in cellular respiration?",
        "Option A": "Glycolysis",
        "Option B": "Krebs cycle",
        "Option C": "Electron transport chain",
        "Option D": "Fermentation",
        "Correct Option": "C",
        "Explanation": "The electron transport chain generates the most ATP."
    },
    {
        "Q.No": "92",
        "Question": "What is the major function of fermentation?",
        "Option A": "ATP synthesis",
        "Option B": "Oxygen production",
        "Option C": "Regeneration of NAD+",
        "Option D": "CO2 fixation",
        "Correct Option": "C",
        "Explanation": "Fermentation regenerates NAD+ to allow glycolysis to continue."
    },
    {
        "Q.No": "93",
        "Question": "How many ATP are produced per molecule of glucose in aerobic respiration?",
        "Option A": "30-32",
        "Option B": "2",
        "Option C": "36-38",
        "Option D": "20-24",
        "Correct Option": "A",
        "Explanation": "Aerobic respiration yields about 30-32 ATP per glucose molecule."
    },
    {
        "Q.No": "94",
        "Question": "The pH inside the mitochondrial matrix is",
        "Option A": "Acidic",
        "Option B": "Neutral",
        "Option C": "Basic",
        "Option D": "Variable",
        "Correct Option": "C",
        "Explanation": "The matrix is more basic due to proton pumping."
    },
    {
        "Q.No": "95",
        "Question": "What is the function of light energy in photosynthesis?",
        "Option A": "Split water molecules",
        "Option B": "Fix CO2",
        "Option C": "Produce glucose",
        "Option D": "Generate ATP directly",
        "Correct Option": "A",
        "Explanation": "Light energy splits water molecules in photosynthesis."
    },
    {
        "Q.No": "96",
        "Question": "The Calvin cycle occurs in the",
        "Option A": "Mitochondria",
        "Option B": "Cytoplasm",
        "Option C": "Stroma",
        "Option D": "Thylakoid",
        "Correct Option": "C",
        "Explanation": "The Calvin cycle takes place in the stroma of chloroplasts."
    },
    {
        "Q.No": "97",
        "Question": "The energy source for the electron transport chain in cellular respiration is",
        "Option A": "NADH and FADH2",
        "Option B": "ATP",
        "Option C": "CO2",
        "Option D": "Oxygen",
        "Correct Option": "A",
        "Explanation": "NADH and FADH2 donate electrons to drive the electron transport chain."
    },
    {
        "Q.No": "98",
        "Question": "Which of the following is an anabolic process?",
        "Option A": "Glycolysis",
        "Option B": "Krebs cycle",
        "Option C": "Photosynthesis",
        "Option D": "Fermentation",
        "Correct Option": "C",
        "Explanation": "Photosynthesis is an anabolic process as it synthesizes glucose."
    },
    {
        "Q.No": "99",
        "Question": "The process of breaking down complex molecules into simpler ones is called",
        "Option A": "Anabolism",
        "Option B": "Catabolism",
        "Option C": "Photosynthesis",
        "Option D": "Polymerization",
        "Correct Option": "B",
        "Explanation": "Catabolism breaks down molecules to release energy."
    },
    {
        "Q.No": "100",
        "Question": "What is the main purpose of ATP in the cell?",
        "Option A": "Store genetic information",
        "Option B": "Catalyze reactions",
        "Option C": "Provide energy",
        "Option D": "Transport oxygen",
        "Correct Option": "C",
        "Explanation": "ATP serves as the main energy currency of the cell."
    }
      ]
    },
    "Biomolecules & Molecular Biology": {
      color: "#2980b9",
      icon: "🧬⚗️🍬",
      questions: [
        {
        "Q.No": "1",
        "Question": "The monomer unit of proteins is",
        "Option A": "Amino acids",
        "Option B": "Nucleotides",
        "Option C": "Fatty acids",
        "Option D": "Monosaccharides",
        "Correct Option": "A",
        "Explanation": "Amino acids are the building blocks of proteins."
    },
    {
        "Q.No": "2",
        "Question": "Which of the following is a polysaccharide?",
        "Option A": "Glucose",
        "Option B": "Sucrose",
        "Option C": "Starch",
        "Option D": "Fructose",
        "Correct Option": "C",
        "Explanation": "Starch is a polysaccharide made of glucose units."
    },
    {
        "Q.No": "3",
        "Question": "The building blocks of nucleic acids are",
        "Option A": "Amino acids",
        "Option B": "Fatty acids",
        "Option C": "Nucleotides",
        "Option D": "Sugars",
        "Correct Option": "C",
        "Explanation": "Nucleic acids are made up of nucleotides."
    },
    {
        "Q.No": "4",
        "Question": "The process by which a protein is synthesized from an mRNA template is called",
        "Option A": "Replication",
        "Option B": "Translation",
        "Option C": "Transcription",
        "Option D": "Mutation",
        "Correct Option": "B",
        "Explanation": "Translation is the synthesis of proteins from mRNA."
    },
    {
        "Q.No": "5",
        "Question": "Which of the following is NOT a component of a nucleotide?",
        "Option A": "Phosphate group",
        "Option B": "Sugar",
        "Option C": "Amino acid",
        "Option D": "Nitrogenous base",
        "Correct Option": "C",
        "Explanation": "Nucleotides consist of a phosphate group, sugar, and nitrogenous base."
    },
    {
        "Q.No": "6",
        "Question": "The primary function of lipids is to",
        "Option A": "Store genetic information",
        "Option B": "Store energy",
        "Option C": "Catalyze reactions",
        "Option D": "Provide structure to cells",
        "Correct Option": "B",
        "Explanation": "Lipids primarily serve as energy storage molecules."
    },
    {
        "Q.No": "7",
        "Question": "Which type of bond forms between amino acids in proteins?",
        "Option A": "Ionic bond",
        "Option B": "Hydrogen bond",
        "Option C": "Peptide bond",
        "Option D": "Disulfide bond",
        "Correct Option": "C",
        "Explanation": "A peptide bond forms between amino acids."
    },
    {
        "Q.No": "8",
        "Question": "Which of the following is a major component of the cell membrane?",
        "Option A": "Carbohydrates",
        "Option B": "Proteins",
        "Option C": "Phospholipids",
        "Option D": "Nucleotides",
        "Correct Option": "C",
        "Explanation": "Phospholipids form the bilayer structure of cell membranes."
    },
    {
        "Q.No": "9",
        "Question": "Which macromolecule is primarily responsible for catalyzing biochemical reactions?",
        "Option A": "Carbohydrates",
        "Option B": "Proteins",
        "Option C": "Lipids",
        "Option D": "Nucleic acids",
        "Correct Option": "B",
        "Explanation": "Enzymes, which are proteins, catalyze biochemical reactions."
    },
    {
        "Q.No": "10",
        "Question": "Which of the following is a simple sugar?",
        "Option A": "Sucrose",
        "Option B": "Glucose",
        "Option C": "Starch",
        "Option D": "Glycogen",
        "Correct Option": "B",
        "Explanation": "Glucose is a monosaccharide, or simple sugar."
    },
    {
        "Q.No": "11",
        "Question": "What type of molecule is DNA?",
        "Option A": "Carbohydrate",
        "Option B": "Protein",
        "Option C": "Lipid",
        "Option D": "Nucleic acid",
        "Correct Option": "D",
        "Explanation": "DNA is a type of nucleic acid."
    },
    {
        "Q.No": "12",
        "Question": "The structural component of plant cell walls is",
        "Option A": "Cellulose",
        "Option B": "Glycogen",
        "Option C": "Chitin",
        "Option D": "Starch",
        "Correct Option": "A",
        "Explanation": "Cellulose is the main structural component of plant cell walls."
    },
    {
        "Q.No": "13",
        "Question": "Which molecule is an example of a disaccharide?",
        "Option A": "Glucose",
        "Option B": "Sucrose",
        "Option C": "Fructose",
        "Option D": "Starch",
        "Correct Option": "B",
        "Explanation": "Sucrose is a disaccharide made of glucose and fructose."
    },
    {
        "Q.No": "14",
        "Question": "Which of the following is a function of nucleic acids?",
        "Option A": "Energy storage",
        "Option B": "Genetic information storage",
        "Option C": "Catalyzing reactions",
        "Option D": "Insulation",
        "Correct Option": "B",
        "Explanation": "Nucleic acids store and transmit genetic information."
    },
    {
        "Q.No": "15",
        "Question": "The secondary structure of proteins refers to",
        "Option A": "The sequence of amino acids",
        "Option B": "The 3D folding pattern",
        "Option C": "The formation of alpha-helices and beta-pleated sheets",
        "Option D": "The overall shape of the protein",
        "Correct Option": "C",
        "Explanation": "The secondary structure involves folding into alpha-helices and beta-pleated sheets."
    },
    {
        "Q.No": "16",
        "Question": "A phospholipid has a hydrophilic head and hydrophobic tails. What does this property help with?",
        "Option A": "Enzyme function",
        "Option B": "DNA replication",
        "Option C": "Membrane formation",
        "Option D": "Protein synthesis",
        "Correct Option": "C",
        "Explanation": "The amphipathic nature of phospholipids forms the cell membrane."
    },
    {
        "Q.No": "17",
        "Question": "Which of the following is a characteristic of all enzymes?",
        "Option A": "They are proteins",
        "Option B": "They increase activation energy",
        "Option C": "They are consumed in reactions",
        "Option D": "They change the equilibrium of a reaction",
        "Correct Option": "A",
        "Explanation": "Enzymes are proteins that catalyze reactions without being consumed."
    },
    {
        "Q.No": "18",
        "Question": "Which of the following is a lipid?",
        "Option A": "Glucose",
        "Option B": "Phospholipid",
        "Option C": "RNA",
        "Option D": "Insulin",
        "Correct Option": "B",
        "Explanation": "Phospholipids are a type of lipid."
    },
    {
        "Q.No": "19",
        "Question": "Which component of nucleotides varies between different nucleic acids?",
        "Option A": "Nitrogenous base",
        "Option B": "Phosphate group",
        "Option C": "Sugar",
        "Option D": "Ribosome",
        "Correct Option": "A",
        "Explanation": "The nitrogenous base distinguishes DNA from RNA and various other nucleic acids."
    },
    {
        "Q.No": "20",
        "Question": "What is the primary function of carbohydrates in the body?",
        "Option A": "Provide genetic information",
        "Option B": "Provide long-term energy storage",
        "Option C": "Serve as structural components",
        "Option D": "Provide quick energy",
        "Correct Option": "D",
        "Explanation": "Carbohydrates, especially glucose, provide quick energy."
    },
    {
        "Q.No": "21",
        "Question": "Which of the following molecules contains a sugar-phosphate backbone?",
        "Option A": "Proteins",
        "Option B": "Nucleic acids",
        "Option C": "Lipids",
        "Option D": "Carbohydrates",
        "Correct Option": "B",
        "Explanation": "Nucleic acids, such as DNA and RNA, contain a sugar-phosphate backbone."
    },
    {
        "Q.No": "22",
        "Question": "The sequence of amino acids in a protein determines its",
        "Option A": "Primary structure",
        "Option B": "Secondary structure",
        "Option C": "Tertiary structure",
        "Option D": "Quaternary structure",
        "Correct Option": "A",
        "Explanation": "The primary structure is the specific sequence of amino acids in a protein."
    },
    {
        "Q.No": "23",
        "Question": "Which of the following is an example of a storage carbohydrate in animals?",
        "Option A": "Starch",
        "Option B": "Cellulose",
        "Option C": "Glycogen",
        "Option D": "Chitin",
        "Correct Option": "C",
        "Explanation": "Glycogen is the storage form of glucose in animals."
    },
    {
        "Q.No": "24",
        "Question": "The quaternary structure of a protein refers to",
        "Option A": "The sequence of amino acids",
        "Option B": "The folding of polypeptides into 3D shapes",
        "Option C": "The interaction of multiple polypeptide chains",
        "Option D": "The formation of alpha-helices",
        "Correct Option": "C",
        "Explanation": "The quaternary structure involves the interaction of multiple polypeptide chains."
    },
    {
        "Q.No": "25",
        "Question": "Which of the following is a component of RNA but not DNA?",
        "Option A": "Uracil",
        "Option B": "Thymine",
        "Option C": "Adenine",
        "Option D": "Cytosine",
        "Correct Option": "A",
        "Explanation": "RNA contains uracil, while DNA contains thymine."
    },
    {
        "Q.No": "26",
        "Question": "What type of bond holds the two strands of DNA together?",
        "Option A": "Ionic bond",
        "Option B": "Hydrogen bond",
        "Option C": "Covalent bond",
        "Option D": "Peptide bond",
        "Correct Option": "B",
        "Explanation": "Hydrogen bonds hold complementary base pairs together in DNA."
    },
    {
        "Q.No": "27",
        "Question": "Which of the following is the main function of ribosomes?",
        "Option A": "DNA replication",
        "Option B": "Protein synthesis",
        "Option C": "Energy production",
        "Option D": "Lipid synthesis",
        "Correct Option": "B",
        "Explanation": "Ribosomes are responsible for protein synthesis."
    },
    {
        "Q.No": "28",
        "Question": "What type of molecule is a steroid?",
        "Option A": "Carbohydrate",
        "Option B": "Lipid",
        "Option C": "Protein",
        "Option D": "Nucleic acid",
        "Correct Option": "B",
        "Explanation": "Steroids are a type of lipid molecule."
    },
    {
        "Q.No": "29",
        "Question": "What is the main function of triglycerides?",
        "Option A": "Store genetic information",
        "Option B": "Provide energy storage",
        "Option C": "Catalyze biochemical reactions",
        "Option D": "Build cell structures",
        "Correct Option": "B",
        "Explanation": "Triglycerides are the primary form of energy storage in animals."
    },
    {
        "Q.No": "30",
        "Question": "The structure of RNA is similar to that of DNA, but RNA has",
        "Option A": "Deoxyribose sugar",
        "Option B": "Thymine as a base",
        "Option C": "A single-stranded structure",
        "Option D": "A double-stranded helix",
        "Correct Option": "C",
        "Explanation": "RNA is single-stranded, unlike DNA."
    },
    {
        "Q.No": "31",
        "Question": "Which of the following is a function of cholesterol in cell membranes?",
        "Option A": "Act as a storage molecule",
        "Option B": "Provide energy for cells",
        "Option C": "Maintain membrane fluidity",
        "Option D": "Synthesize proteins",
        "Correct Option": "C",
        "Explanation": "Cholesterol helps maintain the fluidity of cell membranes."
    },
    {
        "Q.No": "32",
        "Question": "Which type of RNA carries the genetic code from DNA to the ribosome?",
        "Option A": "tRNA",
        "Option B": "mRNA",
        "Option C": "rRNA",
        "Option D": "snRNA",
        "Correct Option": "B",
        "Explanation": "mRNA carries the genetic code from DNA to the ribosome for protein synthesis."
    },
    {
        "Q.No": "33",
        "Question": "The monosaccharide glucose is a product of",
        "Option A": "Protein synthesis",
        "Option B": "Photosynthesis",
        "Option C": "Glycogen breakdown",
        "Option D": "Fatty acid synthesis",
        "Correct Option": "B",
        "Explanation": "Glucose is a product of photosynthesis in plants."
    },
    {
        "Q.No": "34",
        "Question": "Which of the following is the most abundant type of lipid in cell membranes?",
        "Option A": "Phospholipids",
        "Option B": "Steroids",
        "Option C": "Triglycerides",
        "Option D": "Waxes",
        "Correct Option": "A",
        "Explanation": "Phospholipids are the major component of cell membranes."
    },
    {
        "Q.No": "35",
        "Question": "Which structure of a protein determines its function?",
        "Option A": "Primary structure",
        "Option B": "Secondary structure",
        "Option C": "Tertiary structure",
        "Option D": "Quaternary structure",
        "Correct Option": "C",
        "Explanation": "The 3D shape of a protein (tertiary structure) is essential for its function."
    },
    {
        "Q.No": "36",
        "Question": "Which of the following is the simplest type of carbohydrate?",
        "Option A": "Monosaccharide",
        "Option B": "Disaccharide",
        "Option C": "Polysaccharide",
        "Option D": "Glycogen",
        "Correct Option": "A",
        "Explanation": "Monosaccharides are simple sugars like glucose."
    },
    {
        "Q.No": "37",
        "Question": "What is the primary function of enzymes?",
        "Option A": "Store energy",
        "Option B": "Speed up chemical reactions",
        "Option C": "Transport molecules",
        "Option D": "Provide structural support",
        "Correct Option": "B",
        "Explanation": "Enzymes act as catalysts to speed up chemical reactions."
    },
    {
        "Q.No": "38",
        "Question": "What are the monomers of nucleic acids?",
        "Option A": "Amino acids",
        "Option B": "Nucleotides",
        "Option C": "Fatty acids",
        "Option D": "Monosaccharides",
        "Correct Option": "B",
        "Explanation": "Nucleotides are the monomers of nucleic acids."
    },
    {
        "Q.No": "39",
        "Question": "Which of the following is the major energy carrier in cells?",
        "Option A": "ATP",
        "Option B": "NADH",
        "Option C": "FADH2",
        "Option D": "GTP",
        "Correct Option": "A",
        "Explanation": "ATP is the main energy carrier molecule in cells."
    },
    {
        "Q.No": "40",
        "Question": "What is the function of the enzyme amylase?",
        "Option A": "Break down proteins",
        "Option B": "Break down lipids",
        "Option C": "Break down carbohydrates",
        "Option D": "Break down nucleic acids",
        "Correct Option": "C",
        "Explanation": "Amylase is an enzyme that breaks down carbohydrates (starch)."
    },
    {
        "Q.No": "41",
        "Question": "Which molecule is formed when a peptide bond is broken?",
        "Option A": "Amino acid",
        "Option B": "Protein",
        "Option C": "Nucleotide",
        "Option D": "Fatty acid",
        "Correct Option": "A",
        "Explanation": "Breaking a peptide bond releases amino acids."
    },
    {
        "Q.No": "42",
        "Question": "Which of the following is a disaccharide?",
        "Option A": "Glucose",
        "Option B": "Sucrose",
        "Option C": "Starch",
        "Option D": "Fructose",
        "Correct Option": "B",
        "Explanation": "Sucrose is a disaccharide composed of glucose and fructose."
    },
    {
        "Q.No": "43",
        "Question": "Which of the following is a function of lipids in the body?",
        "Option A": "Store genetic information",
        "Option B": "Provide energy storage",
        "Option C": "Act as a catalyst",
        "Option D": "Help in protein synthesis",
        "Correct Option": "B",
        "Explanation": "Lipids store energy in the body, particularly in adipose tissue."
    },
    {
        "Q.No": "44",
        "Question": "Which element is a major component of proteins?",
        "Option A": "Carbon",
        "Option B": "Hydrogen",
        "Option C": "Nitrogen",
        "Option D": "Oxygen",
        "Correct Option": "C",
        "Explanation": "Nitrogen is a key component of amino acids and proteins."
    },
    {
        "Q.No": "45",
        "Question": "What is the role of ribosomal RNA (rRNA)?",
        "Option A": "Translates mRNA into protein",
        "Option B": "Synthesizes mRNA",
        "Option C": "Makes up the structure of ribosomes",
        "Option D": "Carries amino acids to the ribosome",
        "Correct Option": "C",
        "Explanation": "rRNA forms the structural component of ribosomes."
    },
    {
        "Q.No": "46",
        "Question": "Which molecule is used for long-term energy storage in plants?",
        "Option A": "Glucose",
        "Option B": "Fructose",
        "Option C": "Starch",
        "Option D": "Glycogen",
        "Correct Option": "C",
        "Explanation": "Starch is the energy storage molecule in plants."
    },
    {
        "Q.No": "47",
        "Question": "Which is a characteristic feature of enzymes?",
        "Option A": "They are consumed in reactions",
        "Option B": "They lower activation energy",
        "Option C": "They increase the activation energy",
        "Option D": "They do not affect reaction rates",
        "Correct Option": "B",
        "Explanation": "Enzymes lower the activation energy of biochemical reactions."
    },
    {
        "Q.No": "48",
        "Question": "What is the function of transfer RNA (tRNA)?",
        "Option A": "Carry amino acids to the ribosome",
        "Option B": "Transcribe DNA into RNA",
        "Option C": "Act as a catalyst",
        "Option D": "Break down carbohydrates",
        "Correct Option": "A",
        "Explanation": "tRNA transports amino acids to the ribosome for protein synthesis."
    },
    {
        "Q.No": "49",
        "Question": "Which of the following best describes a phospholipid?",
        "Option A": "A hydrophilic molecule",
        "Option B": "A hydrophobic molecule",
        "Option C": "A molecule with both hydrophilic and hydrophobic parts",
        "Option D": "A polar molecule",
        "Correct Option": "C",
        "Explanation": "Phospholipids have hydrophobic tails and hydrophilic heads."
    },
    {
        "Q.No": "50",
        "Question": "Which of the following is NOT a function of proteins?",
        "Option A": "Enzyme catalysis",
        "Option B": "Immune defense",
        "Option C": "Energy storage",
        "Option D": "Structural support",
        "Correct Option": "C",
        "Explanation": "Proteins serve in catalysis, defense, and structure, but not primarily in energy storage."
    },
    {
        "Q.No": "51",
        "Question": "Which of the following is true about an enzyme-substrate complex?",
        "Option A": "The enzyme is altered during the reaction",
        "Option B": "It slows down the reaction",
        "Option C": "It is unstable and quickly dissociates",
        "Option D": "The substrate is unchanged",
        "Correct Option": "C",
        "Explanation": "The enzyme-substrate complex is transient and quickly dissociates after the reaction."
    },
    {
        "Q.No": "52",
        "Question": "The primary source of energy in cells comes from the breakdown of which molecule?",
        "Option A": "Protein",
        "Option B": "Lipids",
        "Option C": "Carbohydrates",
        "Option D": "Nucleic acids",
        "Correct Option": "C",
        "Explanation": "Carbohydrates are the primary energy source in most cells."
    },
    {
        "Q.No": "53",
        "Question": "What is the function of chitin in animals?",
        "Option A": "Energy storage",
        "Option B": "Structural support in exoskeletons",
        "Option C": "Catalyze reactions",
        "Option D": "Insulation",
        "Correct Option": "B",
        "Explanation": "Chitin provides structural support, particularly in the exoskeletons of arthropods."
    },
    {
        "Q.No": "54",
        "Question": "Which of the following is NOT a feature of RNA?",
        "Option A": "Contains ribose sugar",
        "Option B": "Contains uracil",
        "Option C": "Double-stranded",
        "Option D": "Single-stranded",
        "Correct Option": "C",
        "Explanation": "RNA is usually single-stranded and contains ribose sugar and uracil instead of thymine."
    },
    {
        "Q.No": "55",
        "Question": "What is the function of phospholipids in cell membranes?",
        "Option A": "Transport molecules across the membrane",
        "Option B": "Store energy",
        "Option C": "Provide structural support",
        "Option D": "Form the bilayer structure",
        "Correct Option": "D",
        "Explanation": "Phospholipids form the bilayer structure of the cell membrane, which is crucial for its function."
    },
    {
        "Q.No": "56",
        "Question": "Which of the following is a function of the carbohydrate glycogen in animals?",
        "Option A": "Energy storage",
        "Option B": "Structural support",
        "Option C": "Immune response",
        "Option D": "Hormone regulation",
        "Correct Option": "A",
        "Explanation": "Glycogen is the primary storage form of glucose in animals, mainly found in the liver and muscles."
    },
    {
        "Q.No": "57",
        "Question": "Which of the following is a nitrogenous base found in RNA but not in DNA?",
        "Option A": "Thymine",
        "Option B": "Cytosine",
        "Option C": "Adenine",
        "Option D": "Uracil",
        "Correct Option": "D",
        "Explanation": "Uracil is found in RNA, whereas thymine is found in DNA."
    },
    {
        "Q.No": "58",
        "Question": "What type of bond forms between the hydroxyl group of one sugar and the anomeric carbon of another sugar in a disaccharide?",
        "Option A": "Ionic bond",
        "Option B": "Hydrogen bond",
        "Option C": "Covalent bond",
        "Option D": "Peptide bond",
        "Correct Option": "C",
        "Explanation": "The bond between sugars in a disaccharide is a covalent bond called a glycosidic bond."
    },
    {
        "Q.No": "59",
        "Question": "Which of the following is an example of an essential amino acid?",
        "Option A": "Glycine",
        "Option B": "Alanine",
        "Option C": "Tryptophan",
        "Option D": "Serine",
        "Correct Option": "C",
        "Explanation": "Tryptophan is an essential amino acid, meaning it must be obtained from the diet."
    },
    {
        "Q.No": "60",
        "Question": "Which of the following biomolecules is primarily involved in genetic information transfer?",
        "Option A": "Carbohydrates",
        "Option B": "Proteins",
        "Option C": "Nucleic acids",
        "Option D": "Lipids",
        "Correct Option": "C",
        "Explanation": "Nucleic acids, such as DNA and RNA, are primarily responsible for genetic information transfer."
    },
    {
        "Q.No": "61",
        "Question": "What is the name of the bond formed between the carboxyl group of one amino acid and the amino group of another?",
        "Option A": "Peptide bond",
        "Option B": "Hydrogen bond",
        "Option C": "Glycosidic bond",
        "Option D": "Disulfide bond",
        "Correct Option": "A",
        "Explanation": "A peptide bond forms between the carboxyl group of one amino acid and the amino group of another."
    },
    {
        "Q.No": "62",
        "Question": "Which of the following lipids are essential components of the plasma membrane?",
        "Option A": "Triglycerides",
        "Option B": "Phospholipids",
        "Option C": "Steroids",
        "Option D": "Waxes",
        "Correct Option": "B",
        "Explanation": "Phospholipids are essential components of the plasma membrane, forming its bilayer."
    },
    {
        "Q.No": "63",
        "Question": "Which process is responsible for the formation of proteins from mRNA?",
        "Option A": "Replication",
        "Option B": "Transcription",
        "Option C": "Translation",
        "Option D": "Transformation",
        "Correct Option": "C",
        "Explanation": "Translation is the process in which proteins are synthesized from mRNA."
    },
    {
        "Q.No": "64",
        "Question": "Which of the following molecules is a product of cellular respiration?",
        "Option A": "Glucose",
        "Option B": "Oxygen",
        "Option C": "ATP",
        "Option D": "NADH",
        "Correct Option": "C",
        "Explanation": "ATP is the main product of cellular respiration, providing energy to the cell."
    },
    {
        "Q.No": "65",
        "Question": "Which of the following proteins is involved in the defense of the body against pathogens?",
        "Option A": "Hemoglobin",
        "Option B": "Antibodies",
        "Option C": "Collagen",
        "Option D": "Enzymes",
        "Correct Option": "B",
        "Explanation": "Antibodies are proteins that help the immune system defend against pathogens."
    },
    {
        "Q.No": "66",
        "Question": "Which molecule stores the genetic instructions for the development and functioning of living organisms?",
        "Option A": "Proteins",
        "Option B": "Nucleic acids",
        "Option C": "Carbohydrates",
        "Option D": "Lipids",
        "Correct Option": "B",
        "Explanation": "Nucleic acids, specifically DNA, store genetic instructions."
    },
    {
        "Q.No": "67",
        "Question": "Which of the following types of proteins are responsible for muscle contraction?",
        "Option A": "Transport proteins",
        "Option B": "Structural proteins",
        "Option C": "Enzymes",
        "Option D": "Motor proteins",
        "Correct Option": "D",
        "Explanation": "Motor proteins like actin and myosin are responsible for muscle contraction."
    },
    {
        "Q.No": "68",
        "Question": "What is the name of the process where DNA is copied into RNA?",
        "Option A": "Replication",
        "Option B": "Transcription",
        "Option C": "Translation",
        "Option D": "Reverse transcription",
        "Correct Option": "B",
        "Explanation": "Transcription is the process where DNA is copied into RNA."
    },
    {
        "Q.No": "69",
        "Question": "Which of the following is an example of a protein's tertiary structure?",
        "Option A": "Amino acid sequence",
        "Option B": "Alpha helix",
        "Option C": "Beta-pleated sheet",
        "Option D": "3D folded structure",
        "Correct Option": "D",
        "Explanation": "The tertiary structure refers to the three-dimensional folding of a protein."
    },
    {
        "Q.No": "70",
        "Question": "The main role of ATP in cells is to",
        "Option A": "Store genetic information",
        "Option B": "Provide energy for cellular activities",
        "Option C": "Act as a structural component of the cell",
        "Option D": "Carry out protein synthesis",
        "Correct Option": "B",
        "Explanation": "ATP provides the energy needed for most cellular activities."
    },
    {
        "Q.No": "71",
        "Question": "What type of bond holds the double helix of DNA together?",
        "Option A": "Ionic bond",
        "Option B": "Covalent bond",
        "Option C": "Hydrogen bond",
        "Option D": "Peptide bond",
        "Correct Option": "C",
        "Explanation": "Hydrogen bonds hold the complementary nitrogenous bases together in the double helix."
    },
    {
        "Q.No": "72",
        "Question": "Which biomolecule is primarily used for short-term energy storage in animals?",
        "Option A": "Starch",
        "Option B": "Glycogen",
        "Option C": "Proteins",
        "Option D": "Lipids",
        "Correct Option": "B",
        "Explanation": "Glycogen is used by animals for short-term energy storage."
    },
    {
        "Q.No": "73",
        "Question": "What is the difference between saturated and unsaturated fatty acids?",
        "Option A": "Saturated fatty acids have one double bond",
        "Option B": "Saturated fatty acids are liquid at room temperature",
        "Option C": "Unsaturated fatty acids have no double bonds",
        "Option D": "Unsaturated fatty acids are solid at room temperature",
        "Correct Option": "A",
        "Explanation": "Saturated fatty acids have no double bonds, while unsaturated fatty acids have at least one double bond."
    },
    {
        "Q.No": "74",
        "Question": "Which of the following macromolecules plays a major role in energy storage in plants?",
        "Option A": "Proteins",
        "Option B": "Lipids",
        "Option C": "Carbohydrates",
        "Option D": "Nucleic acids",
        "Correct Option": "C",
        "Explanation": "Carbohydrates, especially starch, are the primary energy storage molecules in plants."
    },
    {
        "Q.No": "75",
        "Question": "Which of the following is NOT a polymer?",
        "Option A": "Proteins",
        "Option B": "Nucleic acids",
        "Option C": "Glucose",
        "Option D": "Polysaccharides",
        "Correct Option": "C",
        "Explanation": "Glucose is a monosaccharide, not a polymer."
    },
    {
        "Q.No": "76",
        "Question": "Which biomolecule is involved in providing the instructions for the synthesis of proteins?",
        "Option A": "Nucleic acids",
        "Option B": "Proteins",
        "Option C": "Carbohydrates",
        "Option D": "Lipids",
        "Correct Option": "A",
        "Explanation": "Nucleic acids, particularly mRNA, provide the instructions for protein synthesis."
    },
    {
        "Q.No": "77",
        "Question": "The basic structural unit of a phospholipid is composed of",
        "Option A": "Two fatty acids, a glycerol backbone, and a phosphate group",
        "Option B": "One fatty acid and a glucose backbone",
        "Option C": "One glycerol molecule and three phosphate groups",
        "Option D": "Two sugar molecules and a nitrogenous base",
        "Correct Option": "A",
        "Explanation": "A phospholipid consists of two fatty acids, a glycerol backbone, and a phosphate group."
    },
    {
        "Q.No": "78",
        "Question": "What is the main function of cellulose in plants?",
        "Option A": "Energy storage",
        "Option B": "Structural support",
        "Option C": "Hormonal regulation",
        "Option D": "Enzyme activity",
        "Correct Option": "B",
        "Explanation": "Cellulose provides structural support in plant cell walls."
    },
    {
        "Q.No": "79",
        "Question": "Which of the following is an example of a purine base in nucleic acids?",
        "Option A": "Thymine",
        "Option B": "Cytosine",
        "Option C": "Adenine",
        "Option D": "Uracil",
        "Correct Option": "C",
        "Explanation": "Adenine is a purine base found in both DNA and RNA."
    },
    {
        "Q.No": "80",
        "Question": "Which type of protein is responsible for the immune response by identifying and neutralizing foreign objects?",
        "Option A": "Receptor proteins",
        "Option B": "Transport proteins",
        "Option C": "Antibodies",
        "Option D": "Structural proteins",
        "Correct Option": "C",
        "Explanation": "Antibodies are proteins that identify and neutralize foreign objects such as pathogens."
    },
    {
        "Q.No": "81",
        "Question": "Which of the following is a function of the sugar phosphate backbone in nucleic acids?",
        "Option A": "Store genetic information",
        "Option B": "Provide structural stability",
        "Option C": "Catalyze chemical reactions",
        "Option D": "Act as a messenger molecule",
        "Correct Option": "B",
        "Explanation": "The sugar-phosphate backbone provides structural stability to the DNA or RNA molecule."
    },
    {
        "Q.No": "82",
        "Question": "Which of the following is a characteristic of enzymes?",
        "Option A": "They increase the activation energy of reactions",
        "Option B": "They are proteins that act as catalysts",
        "Option C": "They can only work at low temperatures",
        "Option D": "They are destroyed after catalyzing a reaction",
        "Correct Option": "B",
        "Explanation": "Enzymes are proteins that speed up chemical reactions by lowering the activation energy."
    },
    {
        "Q.No": "83",
        "Question": "What is the role of RNA polymerase in transcription?",
        "Option A": "To unwind the DNA double helix",
        "Option B": "To synthesize mRNA from a DNA template",
        "Option C": "To carry amino acids to the ribosome",
        "Option D": "To assemble ribosomal subunits",
        "Correct Option": "B",
        "Explanation": "RNA polymerase synthesizes mRNA from the DNA template during transcription."
    },
    {
        "Q.No": "84",
        "Question": "Which of the following is the main function of triglycerides?",
        "Option A": "Store genetic information",
        "Option B": "Provide energy and insulation",
        "Option C": "Act as structural components in cells",
        "Option D": "Serve as signaling molecules",
        "Correct Option": "B",
        "Explanation": "Triglycerides store energy and provide insulation in animals."
    },
    {
        "Q.No": "85",
        "Question": "Which type of chemical bond holds the two strands of a double-stranded DNA molecule together?",
        "Option A": "Peptide bond",
        "Option B": "Disulfide bond",
        "Option C": "Hydrogen bond",
        "Option D": "Ionic bond",
        "Correct Option": "C",
        "Explanation": "Hydrogen bonds between nitrogenous bases hold the two strands of DNA together."
    },
    {
        "Q.No": "86",
        "Question": "Which of the following molecules is composed of a long chain of fatty acids?",
        "Option A": "Phospholipids",
        "Option B": "Triglycerides",
        "Option C": "Proteins",
        "Option D": "Carbohydrates",
        "Correct Option": "B",
        "Explanation": "Triglycerides are composed of three fatty acids attached to a glycerol molecule."
    },
    {
        "Q.No": "87",
        "Question": "What is the primary function of nucleotides in the body?",
        "Option A": "Store genetic information",
        "Option B": "Store energy",
        "Option C": "Catalyze biochemical reactions",
        "Option D": "Provide structural support",
        "Correct Option": "A",
        "Explanation": "Nucleotides are the building blocks of nucleic acids, which store and transmit genetic information."
    },
    {
        "Q.No": "88",
        "Question": "Which of the following is a function of enzymes?",
        "Option A": "Increase the energy needed to start a reaction",
        "Option B": "Speed up chemical reactions",
        "Option C": "Serve as structural components",
        "Option D": "Store genetic information",
        "Correct Option": "B",
        "Explanation": "Enzymes act as catalysts, speeding up chemical reactions without being consumed."
    },
    {
        "Q.No": "89",
        "Question": "Which type of biomolecule is the main structural component of cell membranes?",
        "Option A": "Proteins",
        "Option B": "Carbohydrates",
        "Option C": "Nucleic acids",
        "Option D": "Lipids",
        "Correct Option": "D",
        "Explanation": "Lipids, especially phospholipids, are the main structural components of cell membranes."
    },
    {
        "Q.No": "90",
        "Question": "What is the function of the enzyme amylase?",
        "Option A": "To break down carbohydrates",
        "Option B": "To break down proteins",
        "Option C": "To catalyze the synthesis of DNA",
        "Option D": "To produce ATP",
        "Correct Option": "A",
        "Explanation": "Amylase is an enzyme that breaks down carbohydrates, specifically starch."
    },
    {
        "Q.No": "91",
        "Question": "What is the function of the nitrogenous base in nucleic acids?",
        "Option A": "To provide energy",
        "Option B": "To form the backbone of DNA",
        "Option C": "To store genetic information",
        "Option D": "To create structural stability",
        "Correct Option": "C",
        "Explanation": "The nitrogenous base in nucleic acids encodes genetic information."
    },
    {
        "Q.No": "92",
        "Question": "What is the main role of ribosomal RNA (rRNA)?",
        "Option A": "Catalyzing chemical reactions",
        "Option B": "Synthesizing proteins",
        "Option C": "Structurally composing ribosomes",
        "Option D": "Carrying genetic information",
        "Correct Option": "C",
        "Explanation": "rRNA is a component of ribosomes and is involved in protein synthesis."
    },
    {
        "Q.No": "93",
        "Question": "What is the major function of carbohydrates in the human body?",
        "Option A": "Provide long-term energy storage",
        "Option B": "Carry genetic information",
        "Option C": "Provide quick energy",
        "Option D": "Act as a signaling molecule",
        "Correct Option": "C",
        "Explanation": "Carbohydrates, particularly glucose, provide quick energy to the body."
    },
    {
        "Q.No": "94",
        "Question": "Which of the following lipids are important for signaling in the body?",
        "Option A": "Triglycerides",
        "Option B": "Cholesterol",
        "Option C": "Phospholipids",
        "Option D": "Waxes",
        "Correct Option": "B",
        "Explanation": "Cholesterol plays a key role in cell signaling and hormone production."
    },
    {
        "Q.No": "95",
        "Question": "Which of the following is NOT a component of a nucleotide?",
        "Option A": "Sugar",
        "Option B": "Phosphate group",
        "Option C": "Nitrogenous base",
        "Option D": "Fatty acid",
        "Correct Option": "D",
        "Explanation": "Nucleotides consist of a sugar, phosphate group, and nitrogenous base."
    },
    {
        "Q.No": "96",
        "Question": "Which of the following is a characteristic of unsaturated fatty acids?",
        "Option A": "They contain no double bonds",
        "Option B": "They are solid at room temperature",
        "Option C": "They contain one or more double bonds",
        "Option D": "They are found only in animal fats",
        "Correct Option": "C",
        "Explanation": "Unsaturated fatty acids have one or more double bonds and are usually liquid at room temperature."
    },
    {
        "Q.No": "97",
        "Question": "Which of the following is a polymer of amino acids?",
        "Option A": "Lipids",
        "Option B": "Carbohydrates",
        "Option C": "Proteins",
        "Option D": "Nucleic acids",
        "Correct Option": "C",
        "Explanation": "Proteins are polymers made of amino acid monomers."
    },
    {
        "Q.No": "98",
        "Question": "The alpha helix and beta sheet are examples of which protein structure?",
        "Option A": "Primary structure",
        "Option B": "Secondary structure",
        "Option C": "Tertiary structure",
        "Option D": "Quaternary structure",
        "Correct Option": "B",
        "Explanation": "The alpha helix and beta sheet are examples of secondary protein structure."
    },
    {
        "Q.No": "99",
        "Question": "What is the role of water in protein structure?",
        "Option A": "Water dissolves amino acids",
        "Option B": "Water stabilizes protein structure by forming hydrogen bonds",
        "Option C": "Water is not involved in protein structure",
        "Option D": "Water helps in energy production",
        "Correct Option": "B",
        "Explanation": "Water helps stabilize protein structures through hydrogen bonds."
    },
    {
        "Q.No": "100",
        "Question": "Which of the following is an example of a hydrophilic molecule?",
        "Option A": "Lipids",
        "Option B": "DNA",
        "Option C": "Triglycerides",
        "Option D": "Fatty acids",
        "Correct Option": "B",
        "Explanation": "DNA is hydrophilic, meaning it interacts well with water."
    }
      ]
    },
    "Cell Biology (Cell Structure & Organelles)": {
      color: "#d35400",
      icon: "🔬",
      questions: [
        {
        "Q.No": "1",
        "Question": "Which organelle is known as the powerhouse of the cell?",
        "Option A": "Nucleus",
        "Option B": "Mitochondrion",
        "Option C": "Ribosome",
        "Option D": "Golgi apparatus",
        "Correct Option": "B",
        "Explanation": "Mitochondria produce energy for the cell through cellular respiration."
    },
    {
        "Q.No": "2",
        "Question": "What is the main function of the cell membrane?",
        "Option A": "Control the cell's growth",
        "Option B": "Protect the cell",
        "Option C": "Regulate what enters and leaves the cell",
        "Option D": "Produce energy",
        "Correct Option": "C",
        "Explanation": "The cell membrane controls the movement of substances in and out of the cell."
    },
    {
        "Q.No": "3",
        "Question": "Which structure is found in plant cells but not in animal cells?",
        "Option A": "Mitochondrion",
        "Option B": "Chloroplast",
        "Option C": "Nucleus",
        "Option D": "Ribosome",
        "Correct Option": "B",
        "Explanation": "Chloroplasts are responsible for photosynthesis and are found only in plant cells."
    },
    {
        "Q.No": "4",
        "Question": "The fluid mosaic model refers to the structure of which part of the cell?",
        "Option A": "Nucleus",
        "Option B": "Cytoplasm",
        "Option C": "Ribosome",
        "Option D": "Cell membrane",
        "Correct Option": "D",
        "Explanation": "The fluid mosaic model describes the flexible structure of the cell membrane, made up of phospholipids and proteins."
    },
    {
        "Q.No": "5",
        "Question": "Which organelle is responsible for protein synthesis?",
        "Option A": "Mitochondrion",
        "Option B": "Ribosome",
        "Option C": "Endoplasmic reticulum",
        "Option D": "Golgi apparatus",
        "Correct Option": "B",
        "Explanation": "Ribosomes are responsible for protein synthesis in the cell."
    },
    {
        "Q.No": "6",
        "Question": "What is the main function of the nucleus?",
        "Option A": "Energy production",
        "Option B": "Protein synthesis",
        "Option C": "DNA storage and transcription",
        "Option D": "Cell division",
        "Correct Option": "C",
        "Explanation": "The nucleus contains the cell's genetic material and controls gene expression."
    },
    {
        "Q.No": "7",
        "Question": "Which part of the cell is responsible for packaging and modifying proteins?",
        "Option A": "Golgi apparatus",
        "Option B": "Endoplasmic reticulum",
        "Option C": "Mitochondrion",
        "Option D": "Ribosome",
        "Correct Option": "A",
        "Explanation": "The Golgi apparatus processes and packages proteins for secretion or use within the cell."
    },
    {
        "Q.No": "8",
        "Question": "What type of cell has a cell wall, chloroplasts, and large vacuoles?",
        "Option A": "Animal cell",
        "Option B": "Bacterial cell",
        "Option C": "Plant cell",
        "Option D": "Fungal cell",
        "Correct Option": "C",
        "Explanation": "Plant cells contain cell walls, chloroplasts for photosynthesis, and large vacuoles for storage."
    },
    {
        "Q.No": "9",
        "Question": "Which of the following is a function of lysosomes?",
        "Option A": "Protein synthesis",
        "Option B": "Digestion of cellular waste",
        "Option C": "Energy production",
        "Option D": "DNA replication",
        "Correct Option": "B",
        "Explanation": "Lysosomes contain enzymes that digest cellular waste and foreign particles."
    },
    {
        "Q.No": "10",
        "Question": "What is the primary function of the endoplasmic reticulum (ER)?",
        "Option A": "Protein synthesis",
        "Option B": "Lipid production and detoxification",
        "Option C": "Storage of nutrients",
        "Option D": "Transport of substances within the cell",
        "Correct Option": "B",
        "Explanation": "The ER is involved in lipid synthesis, detoxification, and transport of proteins and lipids."
    },
    {
        "Q.No": "11",
        "Question": "Which of the following is part of the cytoskeleton?",
        "Option A": "Golgi apparatus",
        "Option B": "Mitochondria",
        "Option C": "Microtubules",
        "Option D": "Ribosomes",
        "Correct Option": "C",
        "Explanation": "Microtubules are part of the cytoskeleton, providing structural support and aiding in intracellular transport."
    },
    {
        "Q.No": "12",
        "Question": "What is the function of the vacuole in plant cells?",
        "Option A": "Protein synthesis",
        "Option B": "Storage of water, nutrients, and waste",
        "Option C": "Photosynthesis",
        "Option D": "DNA storage",
        "Correct Option": "B",
        "Explanation": "Vacuoles in plant cells store water, nutrients, and waste products."
    },
    {
        "Q.No": "13",
        "Question": "Which organelle contains its own DNA and is involved in energy production?",
        "Option A": "Chloroplast",
        "Option B": "Nucleus",
        "Option C": "Mitochondrion",
        "Option D": "Golgi apparatus",
        "Correct Option": "C",
        "Explanation": "Mitochondria contain their own DNA and are responsible for producing ATP through cellular respiration."
    },
    {
        "Q.No": "14",
        "Question": "What is the main function of ribosomes in the cell?",
        "Option A": "Lipid synthesis",
        "Option B": "Protein synthesis",
        "Option C": "DNA replication",
        "Option D": "Energy production",
        "Correct Option": "B",
        "Explanation": "Ribosomes are the site of protein synthesis in the cell."
    },
    {
        "Q.No": "15",
        "Question": "What is the role of the Golgi apparatus?",
        "Option A": "Packaging and distributing proteins",
        "Option B": "Synthesizing lipids",
        "Option C": "Transcribing DNA",
        "Option D": "Synthesizing ribosomes",
        "Correct Option": "A",
        "Explanation": "The Golgi apparatus modifies, sorts, and packages proteins for secretion or use within the cell."
    },
    {
        "Q.No": "16",
        "Question": "Which part of the cell is responsible for cellular respiration?",
        "Option A": "Mitochondria",
        "Option B": "Nucleus",
        "Option C": "Chloroplast",
        "Option D": "Ribosome",
        "Correct Option": "A",
        "Explanation": "Mitochondria are the site of cellular respiration, where energy is produced in the form of ATP."
    },
    {
        "Q.No": "17",
        "Question": "What is the main component of the cell membrane?",
        "Option A": "Proteins",
        "Option B": "Carbohydrates",
        "Option C": "Phospholipids",
        "Option D": "Nucleic acids",
        "Correct Option": "C",
        "Explanation": "The cell membrane is primarily composed of a phospholipid bilayer with embedded proteins."
    },
    {
        "Q.No": "18",
        "Question": "What is the function of the cytoplasm?",
        "Option A": "It controls cellular activities",
        "Option B": "It stores genetic material",
        "Option C": "It supports organelles and provides a medium for chemical reactions",
        "Option D": "It synthesizes proteins",
        "Correct Option": "C",
        "Explanation": "The cytoplasm provides structural support for the cell and facilitates chemical reactions."
    },
    {
        "Q.No": "19",
        "Question": "Which organelle is responsible for detoxifying harmful substances in the cell?",
        "Option A": "Smooth endoplasmic reticulum",
        "Option B": "Ribosome",
        "Option C": "Mitochondrion",
        "Option D": "Nucleus",
        "Correct Option": "A",
        "Explanation": "The smooth ER is involved in detoxification and lipid synthesis."
    },
    {
        "Q.No": "20",
        "Question": "Which of the following structures is responsible for maintaining cell shape?",
        "Option A": "Lysosomes",
        "Option B": "Nucleus",
        "Option C": "Cytoskeleton",
        "Option D": "Mitochondrion",
        "Correct Option": "C",
        "Explanation": "The cytoskeleton helps maintain cell shape and facilitates cell movement."
    },
    {
        "Q.No": "21",
        "Question": "Which type of cell has a nucleoid region instead of a nucleus?",
        "Option A": "Animal cell",
        "Option B": "Plant cell",
        "Option C": "Bacterial cell",
        "Option D": "Fungal cell",
        "Correct Option": "C",
        "Explanation": "Bacterial cells have a nucleoid region where the genetic material is located, rather than a membrane-bound nucleus."
    },
    {
        "Q.No": "22",
        "Question": "Which of the following is the function of peroxisomes?",
        "Option A": "Protein synthesis",
        "Option B": "Lipid synthesis",
        "Option C": "Detoxification of harmful substances",
        "Option D": "Storing genetic information",
        "Correct Option": "C",
        "Explanation": "Peroxisomes break down fatty acids and detoxify harmful substances."
    },
    {
        "Q.No": "23",
        "Question": "Which of the following is a characteristic of prokaryotic cells?",
        "Option A": "Membrane-bound organelles",
        "Option B": "Nucleus",
        "Option C": "No membrane-bound organelles",
        "Option D": "Multiple chromosomes",
        "Correct Option": "C",
        "Explanation": "Prokaryotic cells lack membrane-bound organelles and a true nucleus."
    },
    {
        "Q.No": "24",
        "Question": "What is the function of the smooth endoplasmic reticulum (SER)?",
        "Option A": "Protein synthesis",
        "Option B": "Lipid synthesis and detoxification",
        "Option C": "Packaging proteins",
        "Option D": "Storage of nutrients",
        "Correct Option": "B",
        "Explanation": "The SER is involved in lipid synthesis, metabolism, and detoxification of harmful substances."
    },
    {
        "Q.No": "25",
        "Question": "Which of the following is the primary function of chloroplasts in plant cells?",
        "Option A": "Protein synthesis",
        "Option B": "Storage of energy",
        "Option C": "Photosynthesis",
        "Option D": "DNA replication",
        "Correct Option": "C",
        "Explanation": "Chloroplasts convert light energy into chemical energy through photosynthesis."
    },
    {
        "Q.No": "26",
        "Question": "Which structure in the cell is responsible for transporting proteins within the cell?",
        "Option A": "Ribosome",
        "Option B": "Nucleus",
        "Option C": "Endoplasmic reticulum",
        "Option D": "Golgi apparatus",
        "Correct Option": "C",
        "Explanation": "The rough endoplasmic reticulum helps transport synthesized proteins."
    },
    {
        "Q.No": "27",
        "Question": "What is the structure of the cell membrane called?",
        "Option A": "Phospholipid bilayer",
        "Option B": "Phospholipid monolayer",
        "Option C": "Protein layer",
        "Option D": "Carbohydrate layer",
        "Correct Option": "A",
        "Explanation": "The cell membrane is primarily composed of a phospholipid bilayer with embedded proteins."
    },
    {
        "Q.No": "28",
        "Question": "What is the primary function of the nucleolus?",
        "Option A": "Transcribing RNA",
        "Option B": "Storing DNA",
        "Option C": "Synthesizing ribosomal RNA (rRNA)",
        "Option D": "Producing energy",
        "Correct Option": "C",
        "Explanation": "The nucleolus is responsible for synthesizing rRNA, a key component of ribosomes."
    },
    {
        "Q.No": "29",
        "Question": "Which of the following is a characteristic of eukaryotic cells?",
        "Option A": "No membrane-bound organelles",
        "Option B": "Single circular chromosome",
        "Option C": "Membrane-bound organelles",
        "Option D": "Lack of a nucleus",
        "Correct Option": "C",
        "Explanation": "Eukaryotic cells have membrane-bound organelles, including a true nucleus."
    },
    {
        "Q.No": "30",
        "Question": "What is the main role of the cell wall in plant cells?",
        "Option A": "Protect the cell and provide structural support",
        "Option B": "Store energy",
        "Option C": "Regulate cell division",
        "Option D": "Transport nutrients",
        "Correct Option": "A",
        "Explanation": "The cell wall provides structural support and protection in plant cells."
    },
    {
        "Q.No": "31",
        "Question": "Which of the following is the function of the flagella in prokaryotic cells?",
        "Option A": "Protein synthesis",
        "Option B": "Movement",
        "Option C": "DNA replication",
        "Option D": "Storage",
        "Correct Option": "B",
        "Explanation": "Flagella are used for movement in prokaryotic cells."
    },
    {
        "Q.No": "32",
        "Question": "What is the function of the centrosome in animal cells?",
        "Option A": "Cell division",
        "Option B": "Protein synthesis",
        "Option C": "Lipid synthesis",
        "Option D": "Energy production",
        "Correct Option": "A",
        "Explanation": "The centrosome organizes the microtubules and is involved in cell division."
    },
    {
        "Q.No": "33",
        "Question": "Which of the following is a function of the cell membrane's carbohydrate chains?",
        "Option A": "Transport substances",
        "Option B": "Serve as enzymes",
        "Option C": "Recognition and signaling",
        "Option D": "Provide structural support",
        "Correct Option": "C",
        "Explanation": "Carbohydrates attached to proteins and lipids in the cell membrane play a role in cell recognition and signaling."
    },
    {
        "Q.No": "34",
        "Question": "What is the role of the ribosome in the cell?",
        "Option A": "Protein synthesis",
        "Option B": "Lipid synthesis",
        "Option C": "Detoxification",
        "Option D": "Energy production",
        "Correct Option": "A",
        "Explanation": "Ribosomes are the sites of protein synthesis in both prokaryotic and eukaryotic cells."
    },
    {
        "Q.No": "35",
        "Question": "What is the function of the mitochondrion in eukaryotic cells?",
        "Option A": "Photosynthesis",
        "Option B": "Detoxification",
        "Option C": "Cellular respiration",
        "Option D": "Protein synthesis",
        "Correct Option": "C",
        "Explanation": "Mitochondria generate ATP, the cell's energy currency, through cellular respiration."
    },
    {
        "Q.No": "36",
        "Question": "Which of the following organelles is involved in the breakdown of fatty acids and amino acids?",
        "Option A": "Peroxisomes",
        "Option B": "Golgi apparatus",
        "Option C": "Mitochondria",
        "Option D": "Chloroplasts",
        "Correct Option": "A",
        "Explanation": "Peroxisomes break down fatty acids and detoxify harmful substances."
    },
    {
        "Q.No": "37",
        "Question": "Which organelle is involved in storing and releasing calcium ions?",
        "Option A": "Lysosome",
        "Option B": "Endoplasmic reticulum",
        "Option C": "Nucleus",
        "Option D": "Mitochondrion",
        "Correct Option": "B",
        "Explanation": "The smooth ER stores and releases calcium ions, playing a role in muscle contraction and other processes."
    },
    {
        "Q.No": "38",
        "Question": "What is the function of the cytoskeleton?",
        "Option A": "Energy production",
        "Option B": "DNA replication",
        "Option C": "Maintaining cell shape and structure",
        "Option D": "Packaging proteins",
        "Correct Option": "C",
        "Explanation": "The cytoskeleton provides structural support and helps with cell movement."
    },
    {
        "Q.No": "39",
        "Question": "Which part of the cell controls the entry and exit of materials?",
        "Option A": "Nucleus",
        "Option B": "Mitochondrion",
        "Option C": "Cell membrane",
        "Option D": "Cytoplasm",
        "Correct Option": "C",
        "Explanation": "The cell membrane regulates what enters and leaves the cell."
    },
    {
        "Q.No": "40",
        "Question": "What structure is responsible for providing shape and support to animal cells?",
        "Option A": "Cell membrane",
        "Option B": "Cytoplasm",
        "Option C": "Cytoskeleton",
        "Option D": "Nucleus",
        "Correct Option": "C",
        "Explanation": "The cytoskeleton provides structural support and shape to animal cells."
    },
    {
        "Q.No": "41",
        "Question": "Which of the following is found in both plant and animal cells?",
        "Option A": "Cell wall",
        "Option B": "Chloroplasts",
        "Option C": "Mitochondria",
        "Option D": "Vacuoles",
        "Correct Option": "C",
        "Explanation": "Mitochondria are found in both plant and animal cells for energy production."
    },
    {
        "Q.No": "42",
        "Question": "Which structure is involved in the synthesis of proteins and lipids?",
        "Option A": "Ribosomes",
        "Option B": "Golgi apparatus",
        "Option C": "Endoplasmic reticulum",
        "Option D": "Nucleolus",
        "Correct Option": "C",
        "Explanation": "The endoplasmic reticulum is involved in synthesizing proteins (rough ER) and lipids (smooth ER)."
    },
    {
        "Q.No": "43",
        "Question": "Which of the following is NOT a component of the cytoskeleton?",
        "Option A": "Microtubules",
        "Option B": "Intermediate filaments",
        "Option C": "Actin filaments",
        "Option D": "Mitochondria",
        "Correct Option": "D",
        "Explanation": "Mitochondria are not part of the cytoskeleton."
    },
    {
        "Q.No": "44",
        "Question": "Which structure in the cell is involved in the production of ribosomes?",
        "Option A": "Nucleus",
        "Option B": "Nucleolus",
        "Option C": "Golgi apparatus",
        "Option D": "Endoplasmic reticulum",
        "Correct Option": "B",
        "Explanation": "The nucleolus produces ribosomes in the cell."
    },
    {
        "Q.No": "45",
        "Question": "What is the function of the Golgi apparatus in relation to proteins?",
        "Option A": "Synthesizes proteins",
        "Option B": "Modifies and packages proteins",
        "Option C": "Breaks down proteins",
        "Option D": "Stores proteins",
        "Correct Option": "B",
        "Explanation": "The Golgi apparatus modifies, sorts, and packages proteins for secretion or use within the cell."
    },
    {
        "Q.No": "46",
        "Question": "Which of the following is a characteristic of chloroplasts?",
        "Option A": "Contain a pigment for photosynthesis",
        "Option B": "Found only in animal cells",
        "Option C": "Contain the cell's DNA",
        "Option D": "Synthesize proteins",
        "Correct Option": "A",
        "Explanation": "Chloroplasts contain chlorophyll, a pigment that captures light energy for photosynthesis."
    },
    {
        "Q.No": "47",
        "Question": "Which structure is responsible for transporting materials within the cell?",
        "Option A": "Golgi apparatus",
        "Option B": "Endoplasmic reticulum",
        "Option C": "Lysosome",
        "Option D": "Nucleolus",
        "Correct Option": "B",
        "Explanation": "The endoplasmic reticulum helps transport materials within the cell."
    },
    {
        "Q.No": "48",
        "Question": "Which of the following organelles is responsible for protein folding?",
        "Option A": "Ribosome",
        "Option B": "Golgi apparatus",
        "Option C": "Endoplasmic reticulum",
        "Option D": "Mitochondrion",
        "Correct Option": "C",
        "Explanation": "The rough endoplasmic reticulum is responsible for protein folding after synthesis."
    },
    {
        "Q.No": "49",
        "Question": "What is the function of the nucleolus?",
        "Option A": "Synthesize ribosomal RNA (rRNA)",
        "Option B": "Synthesize proteins",
        "Option C": "Store genetic material",
        "Option D": "Break down waste materials",
        "Correct Option": "A",
        "Explanation": "The nucleolus is involved in the synthesis of ribosomal RNA (rRNA), which is necessary for ribosome production."
    },
    {
        "Q.No": "50",
        "Question": "Which of the following is a function of the lysosome?",
        "Option A": "Protein synthesis",
        "Option B": "Waste digestion and recycling",
        "Option C": "Energy production",
        "Option D": "Protein folding",
        "Correct Option": "B",
        "Explanation": "Lysosomes digest waste materials and recycle cellular components."
    },
    {
        "Q.No": "51",
        "Question": "What is the function of microtubules in the cell?",
        "Option A": "Protein synthesis",
        "Option B": "Energy production",
        "Option C": "Structural support and intracellular transport",
        "Option D": "DNA replication",
        "Correct Option": "C",
        "Explanation": "Microtubules provide structural support and help transport materials within the cell."
    },
    {
        "Q.No": "52",
        "Question": "What structure in the cell is responsible for regulating cell division?",
        "Option A": "Centrosome",
        "Option B": "Ribosome",
        "Option C": "Cytoplasm",
        "Option D": "Nucleus",
        "Correct Option": "A",
        "Explanation": "The centrosome organizes microtubules and plays a role in cell division."
    },
    {
        "Q.No": "53",
        "Question": "What is the function of the plasma membrane?",
        "Option A": "Store genetic material",
        "Option B": "Control the movement of substances in and out of the cell",
        "Option C": "Produce energy",
        "Option D": "Manufacture proteins",
        "Correct Option": "B",
        "Explanation": "The plasma membrane regulates what enters and leaves the cell."
    },
    {
        "Q.No": "54",
        "Question": "Which organelle is responsible for storing genetic information in the form of DNA?",
        "Option A": "Nucleus",
        "Option B": "Mitochondrion",
        "Option C": "Ribosome",
        "Option D": "Golgi apparatus",
        "Correct Option": "A",
        "Explanation": "The nucleus contains the cell's DNA and controls genetic information."
    },
    {
        "Q.No": "55",
        "Question": "Which of the following is NOT found in eukaryotic cells?",
        "Option A": "Nucleus",
        "Option B": "Mitochondria",
        "Option C": "Ribosomes",
        "Option D": "Nucleoid",
        "Correct Option": "D",
        "Explanation": "The nucleoid is found in prokaryotic cells, not eukaryotic cells."
    },
    {
        "Q.No": "56",
        "Question": "What is the function of the mitochondrion in terms of energy?",
        "Option A": "Synthesize lipids",
        "Option B": "Produce ATP",
        "Option C": "Break down proteins",
        "Option D": "Store calcium",
        "Correct Option": "B",
        "Explanation": "Mitochondria produce ATP, the energy currency of the cell, through cellular respiration."
    },
    {
        "Q.No": "57",
        "Question": "What is the primary function of the Golgi apparatus?",
        "Option A": "Protein synthesis",
        "Option B": "Packaging and sorting proteins",
        "Option C": "Breaking down waste",
        "Option D": "Energy production",
        "Correct Option": "B",
        "Explanation": "The Golgi apparatus modifies, packages, and sorts proteins for secretion or use."
    },
    {
        "Q.No": "58",
        "Question": "What type of cell contains membrane-bound organelles?",
        "Option A": "Prokaryotic",
        "Option B": "Eukaryotic",
        "Option C": "Animal",
        "Option D": "Bacterial",
        "Correct Option": "B",
        "Explanation": "Eukaryotic cells contain membrane-bound organelles, unlike prokaryotic cells."
    },
    {
        "Q.No": "59",
        "Question": "What structure is involved in movement and sensing in some cells?",
        "Option A": "Flagella",
        "Option B": "Ribosome",
        "Option C": "Nucleus",
        "Option D": "Cytoplasm",
        "Correct Option": "A",
        "Explanation": "Flagella are used for movement and sensing in some cells, such as sperm cells."
    },
    {
        "Q.No": "60",
        "Question": "What is the main role of the rough endoplasmic reticulum (RER)?",
        "Option A": "Synthesizing lipids",
        "Option B": "Synthesizing proteins",
        "Option C": "Synthesizing carbohydrates",
        "Option D": "Detoxifying substances",
        "Correct Option": "B",
        "Explanation": "The rough ER is involved in synthesizing and folding proteins."
    },
    {
        "Q.No": "61",
        "Question": "What structure in the cell produces energy for cellular activities?",
        "Option A": "Mitochondrion",
        "Option B": "Nucleus",
        "Option C": "Chloroplast",
        "Option D": "Golgi apparatus",
        "Correct Option": "A",
        "Explanation": "Mitochondria produce ATP, which is used for cellular activities."
    },
    {
        "Q.No": "62",
        "Question": "Which of the following structures helps in cell division?",
        "Option A": "Microtubules",
        "Option B": "Ribosomes",
        "Option C": "Cytoplasm",
        "Option D": "Endoplasmic reticulum",
        "Correct Option": "A",
        "Explanation": "Microtubules help organize the spindle fibers during cell division."
    },
    {
        "Q.No": "63",
        "Question": "What structure in the cell contains the genetic material?",
        "Option A": "Nucleus",
        "Option B": "Golgi apparatus",
        "Option C": "Ribosome",
        "Option D": "Endoplasmic reticulum",
        "Correct Option": "A",
        "Explanation": "The nucleus contains the cell's genetic material in the form of DNA."
    },
    {
        "Q.No": "64",
        "Question": "What is the main function of the vacuole in animal cells?",
        "Option A": "Protein synthesis",
        "Option B": "Transporting nutrients",
        "Option C": "Storing water and nutrients",
        "Option D": "Cell division",
        "Correct Option": "C",
        "Explanation": "Vacuoles store water, nutrients, and waste in animal cells."
    },
    {
        "Q.No": "65",
        "Question": "What structure helps in the production of energy in the form of ATP?",
        "Option A": "Mitochondrion",
        "Option B": "Chloroplast",
        "Option C": "Ribosome",
        "Option D": "Golgi apparatus",
        "Correct Option": "A",
        "Explanation": "Mitochondria generate ATP through cellular respiration."
    },
    {
        "Q.No": "66",
        "Question": "What is the role of chloroplasts in plant cells?",
        "Option A": "Photosynthesis",
        "Option B": "Cell division",
        "Option C": "Energy production",
        "Option D": "Protein synthesis",
        "Correct Option": "A",
        "Explanation": "Chloroplasts carry out photosynthesis in plant cells."
    },
    {
        "Q.No": "67",
        "Question": "Which of the following is involved in maintaining the shape of a cell?",
        "Option A": "Cytoskeleton",
        "Option B": "Ribosome",
        "Option C": "Mitochondrion",
        "Option D": "Chloroplast",
        "Correct Option": "A",
        "Explanation": "The cytoskeleton provides structural support to the cell."
    },
    {
        "Q.No": "68",
        "Question": "What type of cell is responsible for making protein?",
        "Option A": "Prokaryotic cells",
        "Option B": "Eukaryotic cells",
        "Option C": "Animal cells",
        "Option D": "Plant cells",
        "Correct Option": "B",
        "Explanation": "Both prokaryotic and eukaryotic cells make proteins."
    },
    {
        "Q.No": "69",
        "Question": "What organelle helps in cellular waste disposal?",
        "Option A": "Lysosome",
        "Option B": "Golgi apparatus",
        "Option C": "Chloroplast",
        "Option D": "Ribosome",
        "Correct Option": "A",
        "Explanation": "Lysosomes digest cellular waste and recycle materials."
    },
    {
        "Q.No": "70",
        "Question": "Which part of the cell is responsible for storing and releasing calcium ions?",
        "Option A": "Cytoplasm",
        "Option B": "Endoplasmic reticulum",
        "Option C": "Nucleus",
        "Option D": "Ribosome",
        "Correct Option": "B",
        "Explanation": "The smooth ER is responsible for storing and releasing calcium ions."
    },
    {
        "Q.No": "71",
        "Question": "What is the function of the nuclear membrane?",
        "Option A": "Store DNA",
        "Option B": "Protect the cell",
        "Option C": "Protect the nucleus",
        "Option D": "Synthesize RNA",
        "Correct Option": "C",
        "Explanation": "The nuclear membrane surrounds the nucleus and protects it from external damage."
    },
    {
        "Q.No": "72",
        "Question": "Which of the following is responsible for cellular movement?",
        "Option A": "Cytoplasm",
        "Option B": "Microtubules",
        "Option C": "Mitochondrion",
        "Option D": "Golgi apparatus",
        "Correct Option": "B",
        "Explanation": "Microtubules are involved in cellular movement and division."
    },
    {
        "Q.No": "73",
        "Question": "What is the function of the centrosome?",
        "Option A": "Control cell division",
        "Option B": "Package proteins",
        "Option C": "Store genetic material",
        "Option D": "Control protein synthesis",
        "Correct Option": "A",
        "Explanation": "The centrosome organizes microtubules and aids in cell division."
    },
    {
        "Q.No": "74",
        "Question": "What is the function of the ribosome in the cell?",
        "Option A": "Synthesize proteins",
        "Option B": "Detoxify chemicals",
        "Option C": "Maintain cell shape",
        "Option D": "Store energy",
        "Correct Option": "A",
        "Explanation": "Ribosomes are responsible for protein synthesis."
    },
    {
        "Q.No": "75",
        "Question": "What structure is found in both plant and animal cells but is not present in bacterial cells?",
        "Option A": "Cytoplasm",
        "Option B": "Nucleus",
        "Option C": "Plasma membrane",
        "Option D": "Ribosomes",
        "Correct Option": "B",
        "Explanation": "The nucleus is found in eukaryotic cells but not in bacterial cells."
    },
    {
        "Q.No": "76",
        "Question": "What is the function of the cell membrane in relation to the environment?",
        "Option A": "Support the cell",
        "Option B": "Regulate what enters and leaves the cell",
        "Option C": "Synthesize proteins",
        "Option D": "Store genetic information",
        "Correct Option": "B",
        "Explanation": "The cell membrane controls the exchange of materials between the cell and its environment."
    },
    {
        "Q.No": "77",
        "Question": "What organelle is responsible for cellular respiration?",
        "Option A": "Nucleus",
        "Option B": "Mitochondrion",
        "Option C": "Chloroplast",
        "Option D": "Endoplasmic reticulum",
        "Correct Option": "B",
        "Explanation": "Mitochondria are responsible for cellular respiration in eukaryotic cells."
    },
    {
        "Q.No": "78",
        "Question": "What is the function of the smooth endoplasmic reticulum?",
        "Option A": "Protein synthesis",
        "Option B": "Lipid synthesis and detoxification",
        "Option C": "DNA replication",
        "Option D": "Packaging proteins",
        "Correct Option": "B",
        "Explanation": "The smooth ER is involved in lipid synthesis and detoxification."
    },
    {
        "Q.No": "79",
        "Question": "Which structure contains digestive enzymes to break down waste and foreign particles?",
        "Option A": "Lysosomes",
        "Option B": "Peroxisomes",
        "Option C": "Nucleus",
        "Option D": "Golgi apparatus",
        "Correct Option": "A",
        "Explanation": "Lysosomes contain digestive enzymes for waste breakdown."
    },
    {
        "Q.No": "80",
        "Question": "Which part of the cell is responsible for modifying and sorting proteins?",
        "Option A": "Nucleus",
        "Option B": "Ribosomes",
        "Option C": "Golgi apparatus",
        "Option D": "Endoplasmic reticulum",
        "Correct Option": "C",
        "Explanation": "The Golgi apparatus modifies and sorts proteins for secretion or use."
    },
    {
        "Q.No": "81",
        "Question": "What is the function of the ribosome?",
        "Option A": "Synthesize proteins",
        "Option B": "Store genetic material",
        "Option C": "Transport nutrients",
        "Option D": "Produce ATP",
        "Correct Option": "A",
        "Explanation": "Ribosomes synthesize proteins by translating messenger RNA."
    },
    {
        "Q.No": "82",
        "Question": "Which organelle is responsible for synthesizing ribosomal RNA (rRNA)?",
        "Option A": "Nucleus",
        "Option B": "Nucleolus",
        "Option C": "Golgi apparatus",
        "Option D": "Endoplasmic reticulum",
        "Correct Option": "B",
        "Explanation": "The nucleolus synthesizes rRNA, essential for ribosome production."
    },
    {
        "Q.No": "83",
        "Question": "What is the main function of the Golgi apparatus?",
        "Option A": "Protein synthesis",
        "Option B": "Packaging and sorting proteins",
        "Option C": "Photosynthesis",
        "Option D": "DNA replication",
        "Correct Option": "B",
        "Explanation": "The Golgi apparatus processes and packages proteins for secretion or storage."
    },
    {
        "Q.No": "84",
        "Question": "Which of the following is NOT a function of the smooth endoplasmic reticulum?",
        "Option A": "Detoxification",
        "Option B": "Lipid synthesis",
        "Option C": "Protein folding",
        "Option D": "Carbohydrate metabolism",
        "Correct Option": "C",
        "Explanation": "Protein folding is a function of the rough ER, not the smooth ER."
    },
    {
        "Q.No": "85",
        "Question": "Which of the following is an organelle involved in energy production?",
        "Option A": "Mitochondrion",
        "Option B": "Golgi apparatus",
        "Option C": "Endoplasmic reticulum",
        "Option D": "Lysosome",
        "Correct Option": "A",
        "Explanation": "Mitochondria generate energy for the cell through cellular respiration."
    },
    {
        "Q.No": "86",
        "Question": "Which structure helps in the synthesis of proteins from amino acids?",
        "Option A": "Ribosomes",
        "Option B": "Endoplasmic reticulum",
        "Option C": "Golgi apparatus",
        "Option D": "Nucleus",
        "Correct Option": "A",
        "Explanation": "Ribosomes are the sites of protein synthesis in the cell."
    },
    {
        "Q.No": "87",
        "Question": "Which part of the cell is responsible for maintaining the cell's shape and support?",
        "Option A": "Cytoskeleton",
        "Option B": "Nucleus",
        "Option C": "Ribosomes",
        "Option D": "Golgi apparatus",
        "Correct Option": "A",
        "Explanation": "The cytoskeleton helps maintain the shape and support of the cell."
    },
    {
        "Q.No": "88",
        "Question": "Which organelle is involved in the production of ATP?",
        "Option A": "Nucleus",
        "Option B": "Mitochondrion",
        "Option C": "Chloroplast",
        "Option D": "Golgi apparatus",
        "Correct Option": "B",
        "Explanation": "Mitochondria produce ATP through cellular respiration."
    },
    {
        "Q.No": "89",
        "Question": "What structure helps in maintaining cell shape, anchoring organelles, and enabling movement?",
        "Option A": "Microtubules",
        "Option B": "Nucleolus",
        "Option C": "Endoplasmic reticulum",
        "Option D": "Golgi apparatus",
        "Correct Option": "A",
        "Explanation": "Microtubules are part of the cytoskeleton and are involved in maintaining cell shape and movement."
    },
    {
        "Q.No": "90",
        "Question": "Which organelle helps in modifying proteins?",
        "Option A": "Endoplasmic reticulum",
        "Option B": "Golgi apparatus",
        "Option C": "Ribosome",
        "Option D": "Chloroplast",
        "Correct Option": "B",
        "Explanation": "The Golgi apparatus modifies proteins before they are distributed."
    },
    {
        "Q.No": "91",
        "Question": "What organelle contains digestive enzymes to break down cellular waste?",
        "Option A": "Lysosomes",
        "Option B": "Nucleus",
        "Option C": "Ribosome",
        "Option D": "Golgi apparatus",
        "Correct Option": "A",
        "Explanation": "Lysosomes contain enzymes that break down waste materials and cellular debris."
    },
    {
        "Q.No": "92",
        "Question": "Which of the following structures is found in both plant and animal cells?",
        "Option A": "Chloroplast",
        "Option B": "Nucleus",
        "Option C": "Cell wall",
        "Option D": "Ribosome",
        "Correct Option": "B",
        "Explanation": "The nucleus is present in both plant and animal cells."
    },
    {
        "Q.No": "93",
        "Question": "What is the function of the Golgi apparatus in relation to proteins?",
        "Option A": "Translates RNA",
        "Option B": "Packages and modifies proteins",
        "Option C": "Synthesizes proteins",
        "Option D": "Stores genetic material",
        "Correct Option": "B",
        "Explanation": "The Golgi apparatus modifies and packages proteins for use or export."
    },
    {
        "Q.No": "94",
        "Question": "Which of the following structures stores the cell's genetic information?",
        "Option A": "Nucleus",
        "Option B": "Golgi apparatus",
        "Option C": "Ribosomes",
        "Option D": "Endoplasmic reticulum",
        "Correct Option": "A",
        "Explanation": "The nucleus stores the genetic material (DNA) in eukaryotic cells."
    },
    {
        "Q.No": "95",
        "Question": "What is the function of the microtubules in the cell?",
        "Option A": "Maintain cell shape",
        "Option B": "Synthesize proteins",
        "Option C": "Regulate movement of chromosomes during cell division",
        "Option D": "Store nutrients",
        "Correct Option": "C",
        "Explanation": "Microtubules are involved in cell division and help organize the mitotic spindle."
    },
    {
        "Q.No": "96",
        "Question": "Which structure is responsible for helping cells move and divide?",
        "Option A": "Ribosome",
        "Option B": "Cytoskeleton",
        "Option C": "Mitochondrion",
        "Option D": "Nucleus",
        "Correct Option": "B",
        "Explanation": "The cytoskeleton supports cell movement and division."
    },
    {
        "Q.No": "97",
        "Question": "What part of the cell provides structural support and regulates cellular activities?",
        "Option A": "Cytoplasm",
        "Option B": "Ribosomes",
        "Option C": "Cell membrane",
        "Option D": "Cytoskeleton",
        "Correct Option": "D",
        "Explanation": "The cytoskeleton provides structural support and regulates movement and cell division."
    },
    {
        "Q.No": "98",
        "Question": "What is the function of the plasma membrane in relation to the environment?",
        "Option A": "Control cellular growth",
        "Option B": "Regulate what enters and leaves the cell",
        "Option C": "Store energy",
        "Option D": "Provide structural support",
        "Correct Option": "B",
        "Explanation": "The plasma membrane controls the exchange of materials with the environment."
    },
    {
        "Q.No": "99",
        "Question": "What organelle contains its own DNA and is involved in energy production?",
        "Option A": "Mitochondrion",
        "Option B": "Nucleus",
        "Option C": "Chloroplast",
        "Option D": "Ribosome",
        "Correct Option": "A",
        "Explanation": "Mitochondria contain their own DNA and are involved in producing ATP."
    },
    {
        "Q.No": "100",
        "Question": "Which structure is responsible for synthesizing proteins from mRNA?",
        "Option A": "Ribosome",
        "Option B": "Nucleus",
        "Option C": "Golgi apparatus",
        "Option D": "Mitochondrion",
        "Correct Option": "A",
        "Explanation": "Ribosomes synthesize proteins by translating mRNA into amino acid sequences."
    }
      ]
    },
    "Human Nervous System & Endocrine System": {
      color: "#c0392b",
      icon: "🧠",
      questions: [
        {
        "Q.No": "1",
        "Question": "Which part of the brain controls involuntary actions like breathing?",
        "Option A": "Medulla oblongata",
        "Option B": "Cerebrum",
        "Option C": "Cerebellum",
        "Option D": "Thalamus",
        "Correct Option": "A",
        "Explanation": "The medulla oblongata controls autonomic functions like breathing and heart rate."
    },
    {
        "Q.No": "2",
        "Question": "What is the function of the myelin sheath?",
        "Option A": "Increase electrical resistance",
        "Option B": "Speed up nerve impulse transmission",
        "Option C": "Protect the neuron from damage",
        "Option D": "Provide nutrients to the neuron",
        "Correct Option": "B",
        "Explanation": "The myelin sheath insulates the neuron, speeding up nerve impulse transmission."
    },
    {
        "Q.No": "3",
        "Question": "Which hormone is released by the pancreas to lower blood sugar levels?",
        "Option A": "Insulin",
        "Option B": "Glucagon",
        "Option C": "Thyroxine",
        "Option D": "Cortisol",
        "Correct Option": "A",
        "Explanation": "Insulin lowers blood sugar levels by promoting glucose uptake into cells."
    },
    {
        "Q.No": "4",
        "Question": "The main function of the hypothalamus is to",
        "Option A": "Control heartbeat",
        "Option B": "Regulate body temperature",
        "Option C": "Produce digestive enzymes",
        "Option D": "Maintain balance",
        "Correct Option": "B",
        "Explanation": "The hypothalamus regulates critical functions such as body temperature, hunger, and sleep."
    },
    {
        "Q.No": "5",
        "Question": "Which of the following is a neurotransmitter involved in muscle contraction?",
        "Option A": "Acetylcholine",
        "Option B": "Insulin",
        "Option C": "Glutamate",
        "Option D": "Dopamine",
        "Correct Option": "A",
        "Explanation": "Acetylcholine is a neurotransmitter that plays a key role in muscle contraction."
    },
    {
        "Q.No": "6",
        "Question": "What is the primary function of the autonomic nervous system?",
        "Option A": "Regulate conscious movement",
        "Option B": "Control automatic functions",
        "Option C": "Process sensory information",
        "Option D": "Process motor commands",
        "Correct Option": "B",
        "Explanation": "The autonomic nervous system controls involuntary functions such as heart rate and digestion."
    },
    {
        "Q.No": "7",
        "Question": "Which part of the neuron receives electrical signals?",
        "Option A": "Axon",
        "Option B": "Dendrite",
        "Option C": "Cell body",
        "Option D": "Synaptic terminal",
        "Correct Option": "B",
        "Explanation": "Dendrites receive signals from other neurons and transmit them to the cell body."
    },
    {
        "Q.No": "8",
        "Question": "Which of the following hormones is responsible for the fight-or-flight response?",
        "Option A": "Adrenaline",
        "Option B": "Insulin",
        "Option C": "Estrogen",
        "Option D": "Testosterone",
        "Correct Option": "A",
        "Explanation": "Adrenaline triggers the fight-or-flight response during stress."
    },
    {
        "Q.No": "9",
        "Question": "What is the function of the synapse?",
        "Option A": "Transmit electrical signals along the neuron",
        "Option B": "Facilitate communication between neurons",
        "Option C": "Protect the neuron from external damage",
        "Option D": "Produce hormones",
        "Correct Option": "B",
        "Explanation": "The synapse is the junction between neurons where neurotransmitters facilitate communication."
    },
    {
        "Q.No": "10",
        "Question": "Which part of the brain is involved in balance and coordination?",
        "Option A": "Cerebellum",
        "Option B": "Medulla oblongata",
        "Option C": "Thalamus",
        "Option D": "Hippocampus",
        "Correct Option": "A",
        "Explanation": "The cerebellum controls coordination and balance, essential for smooth movements."
    },
    {
        "Q.No": "11",
        "Question": "Which part of the nervous system controls voluntary movements?",
        "Option A": "Somatic nervous system",
        "Option B": "Autonomic nervous system",
        "Option C": "Central nervous system",
        "Option D": "Peripheral nervous system",
        "Correct Option": "A",
        "Explanation": "The somatic nervous system controls voluntary movements by transmitting signals to skeletal muscles."
    },
    {
        "Q.No": "12",
        "Question": "What is the function of the pituitary gland?",
        "Option A": "Control emotions",
        "Option B": "Produce digestive enzymes",
        "Option C": "Regulate growth and development",
        "Option D": "Control heartbeat",
        "Correct Option": "C",
        "Explanation": "The pituitary gland secretes hormones that regulate growth, metabolism, and reproduction."
    },
    {
        "Q.No": "13",
        "Question": "Which type of neuron transmits information from the sensory receptors to the central nervous system?",
        "Option A": "Sensory neurons",
        "Option B": "Motor neurons",
        "Option C": "Interneurons",
        "Option D": "Glial cells",
        "Correct Option": "A",
        "Explanation": "Sensory neurons carry signals from sensory receptors to the brain and spinal cord."
    },
    {
        "Q.No": "14",
        "Question": "Which neurotransmitter is primarily associated with mood regulation?",
        "Option A": "Serotonin",
        "Option B": "Dopamine",
        "Option C": "Glutamate",
        "Option D": "Acetylcholine",
        "Correct Option": "A",
        "Explanation": "Serotonin is involved in regulating mood, appetite, and sleep."
    },
    {
        "Q.No": "15",
        "Question": "The blood-brain barrier primarily protects the brain from",
        "Option A": "Infections",
        "Option B": "Hormones",
        "Option C": "Nutrients",
        "Option D": "Waste products",
        "Correct Option": "A",
        "Explanation": "The blood-brain barrier protects the brain from harmful pathogens and toxins."
    },
    {
        "Q.No": "16",
        "Question": "Which of the following is a hormone produced by the thyroid gland?",
        "Option A": "Insulin",
        "Option B": "Thyroxine",
        "Option C": "Adrenaline",
        "Option D": "Cortisol",
        "Correct Option": "B",
        "Explanation": "Thyroxine, produced by the thyroid gland, regulates metabolism and growth."
    },
    {
        "Q.No": "17",
        "Question": "What is the main function of the corpus callosum?",
        "Option A": "Regulate emotions",
        "Option B": "Facilitate communication between brain hemispheres",
        "Option C": "Control heart rate",
        "Option D": "Process visual information",
        "Correct Option": "B",
        "Explanation": "The corpus callosum connects the left and right brain hemispheres, enabling communication between them."
    },
    {
        "Q.No": "18",
        "Question": "Which part of the nervous system is responsible for the “rest and digest” response?",
        "Option A": "Sympathetic nervous system",
        "Option B": "Parasympathetic nervous system",
        "Option C": "Central nervous system",
        "Option D": "Peripheral nervous system",
        "Correct Option": "B",
        "Explanation": "The parasympathetic nervous system is responsible for resting and digesting functions."
    },
    {
        "Q.No": "19",
        "Question": "What is the role of the adrenal glands?",
        "Option A": "Regulate insulin production",
        "Option B": "Control emotions",
        "Option C": "Produce hormones like adrenaline",
        "Option D": "Process sensory input",
        "Correct Option": "C",
        "Explanation": "The adrenal glands produce adrenaline, which is involved in stress responses."
    },
    {
        "Q.No": "20",
        "Question": "Which part of the nervous system connects the brain and the spinal cord?",
        "Option A": "Peripheral nervous system",
        "Option B": "Autonomic nervous system",
        "Option C": "Central nervous system",
        "Option D": "Somatic nervous system",
        "Correct Option": "C",
        "Explanation": "The central nervous system includes the brain and spinal cord, linking them for communication."
    },
    {
        "Q.No": "21",
        "Question": "Which of the following hormones regulates calcium levels in the blood?",
        "Option A": "Parathyroid hormone",
        "Option B": "Thyroxine",
        "Option C": "Insulin",
        "Option D": "Adrenaline",
        "Correct Option": "A",
        "Explanation": "Parathyroid hormone regulates calcium levels by promoting bone resorption and calcium absorption."
    },
    {
        "Q.No": "22",
        "Question": "Which cell type supports and nourishes neurons?",
        "Option A": "Glial cells",
        "Option B": "Red blood cells",
        "Option C": "Muscle cells",
        "Option D": "Epithelial cells",
        "Correct Option": "A",
        "Explanation": "Glial cells provide support, nourishment, and protection for neurons."
    },
    {
        "Q.No": "23",
        "Question": "What is the main purpose of the action potential in a neuron?",
        "Option A": "To conduct nerve signals",
        "Option B": "To store neurotransmitters",
        "Option C": "To maintain homeostasis",
        "Option D": "To digest nutrients",
        "Correct Option": "A",
        "Explanation": "The action potential is an electrical signal that carries information along the neuron."
    },
    {
        "Q.No": "24",
        "Question": "Which neurotransmitter is most closely associated with reward and pleasure?",
        "Option A": "Dopamine",
        "Option B": "Serotonin",
        "Option C": "Acetylcholine",
        "Option D": "Epinephrine",
        "Correct Option": "A",
        "Explanation": "Dopamine is involved in the brain's reward system and pleasure responses."
    },
    {
        "Q.No": "25",
        "Question": "What is the main function of the sensory receptors in the body?",
        "Option A": "Detect changes in the environment",
        "Option B": "Generate electrical signals in muscles",
        "Option C": "Control the movement of limbs",
        "Option D": "Regulate hormone secretion",
        "Correct Option": "A",
        "Explanation": "Sensory receptors detect stimuli such as light, sound, and temperature."
    },
    {
        "Q.No": "26",
        "Question": "What part of the neuron transmits the nerve impulse away from the cell body?",
        "Option A": "Dendrite",
        "Option B": "Axon",
        "Option C": "Synapse",
        "Option D": "Cell body",
        "Correct Option": "B",
        "Explanation": "The axon transmits nerve impulses from the cell body to other neurons or muscles."
    },
    {
        "Q.No": "27",
        "Question": "Which structure in the brain is involved in regulating emotions?",
        "Option A": "Limbic system",
        "Option B": "Medulla oblongata",
        "Option C": "Cerebellum",
        "Option D": "Thalamus",
        "Correct Option": "A",
        "Explanation": "The limbic system regulates emotions, memory, and arousal."
    },
    {
        "Q.No": "28",
        "Question": "Which of the following is a function of the somatic nervous system?",
        "Option A": "Involuntary movement regulation",
        "Option B": "Stress response regulation",
        "Option C": "Sensory information processing",
        "Option D": "Voluntary movement control",
        "Correct Option": "D",
        "Explanation": "The somatic nervous system controls voluntary movements by transmitting signals to skeletal muscles."
    },
    {
        "Q.No": "29",
        "Question": "Which type of muscle is under involuntary control?",
        "Option A": "Skeletal muscle",
        "Option B": "Smooth muscle",
        "Option C": "Cardiac muscle",
        "Option D": "Both B and C",
        "Correct Option": "D",
        "Explanation": "Smooth and cardiac muscles are controlled involuntarily by the autonomic nervous system."
    },
    {
        "Q.No": "30",
        "Question": "What is the role of the neurotransmitter acetylcholine at the neuromuscular junction?",
        "Option A": "Initiate muscle contraction",
        "Option B": "Transport oxygen to muscle cells",
        "Option C": "Regulate calcium levels",
        "Option D": "Convert glucose into energy",
        "Correct Option": "A",
        "Explanation": "Acetylcholine stimulates muscle contraction by binding to receptors at the neuromuscular junction."
    },
    {
        "Q.No": "31",
        "Question": "What part of the neuron releases neurotransmitters into the synapse?",
        "Option A": "Axon terminals",
        "Option B": "Dendrites",
        "Option C": "Cell body",
        "Option D": "Node of Ranvier",
        "Correct Option": "A",
        "Explanation": "Neurotransmitters are released from the axon terminals into the synapse."
    },
    {
        "Q.No": "32",
        "Question": "Which part of the brain is responsible for the regulation of sleep and wakefulness?",
        "Option A": "Hypothalamus",
        "Option B": "Cerebellum",
        "Option C": "Medulla oblongata",
        "Option D": "Corpus callosum",
        "Correct Option": "A",
        "Explanation": "The hypothalamus controls the sleep-wake cycle and circadian rhythms."
    },
    {
        "Q.No": "33",
        "Question": "What is the role of the neurotransmitter glutamate?",
        "Option A": "Inhibit nerve transmission",
        "Option B": "Promote muscle contraction",
        "Option C": "Activate the sympathetic nervous system",
        "Option D": "Excite neurons and enhance synaptic plasticity",
        "Correct Option": "D",
        "Explanation": "Glutamate is an excitatory neurotransmitter that enhances synaptic activity and learning."
    },
    {
        "Q.No": "34",
        "Question": "Which hormone is responsible for regulating metabolism and energy levels?",
        "Option A": "Thyroxine",
        "Option B": "Adrenaline",
        "Option C": "Estrogen",
        "Option D": "Insulin",
        "Correct Option": "A",
        "Explanation": "Thyroxine regulates metabolism by controlling the rate at which cells use energy."
    },
    {
        "Q.No": "35",
        "Question": "What is the function of the blood-brain barrier?",
        "Option A": "Allow all substances to pass into the brain",
        "Option B": "Protect the brain from harmful substances",
        "Option C": "Regulate neurotransmitter production",
        "Option D": "Control blood flow to the brain",
        "Correct Option": "B",
        "Explanation": "The blood-brain barrier protects the brain from harmful substances in the bloodstream."
    },
    {
        "Q.No": "36",
        "Question": "What type of receptor is responsible for detecting light?",
        "Option A": "Photoreceptor",
        "Option B": "Chemoreceptor",
        "Option C": "Mechanoreceptor",
        "Option D": "Thermoreceptor",
        "Correct Option": "A",
        "Explanation": "Photoreceptors in the retina detect light and enable vision."
    },
    {
        "Q.No": "37",
        "Question": "Which of the following is a function of the cerebrum?",
        "Option A": "Memory and learning",
        "Option B": "Regulation of heart rate",
        "Option C": "Balance and coordination",
        "Option D": "Digestion",
        "Correct Option": "A",
        "Explanation": "The cerebrum is involved in high-level functions such as memory, learning, and sensory perception."
    },
    {
        "Q.No": "38",
        "Question": "Which part of the brain is primarily involved in controlling heartbeat and breathing?",
        "Option A": "Cerebellum",
        "Option B": "Medulla oblongata",
        "Option C": "Hypothalamus",
        "Option D": "Pons",
        "Correct Option": "B",
        "Explanation": "The medulla oblongata controls autonomic functions such as heartbeat and breathing."
    },
    {
        "Q.No": "39",
        "Question": "Which hormone is produced by the pineal gland?",
        "Option A": "Melatonin",
        "Option B": "Insulin",
        "Option C": "Progesterone",
        "Option D": "Cortisol",
        "Correct Option": "A",
        "Explanation": "Melatonin, produced by the pineal gland, regulates sleep and circadian rhythms."
    },
    {
        "Q.No": "40",
        "Question": "What is the main function of the sympathetic nervous system?",
        "Option A": "Stimulate digestion",
        "Option B": "Regulate sleep patterns",
        "Option C": "Control voluntary muscle movements",
        "Option D": "Initiate the fight-or-flight response",
        "Correct Option": "D",
        "Explanation": "The sympathetic nervous system prepares the body for stress responses, including the fight-or-flight reaction."
    },
    {
        "Q.No": "41",
        "Question": "Which hormone is responsible for increasing blood sugar levels?",
        "Option A": "Glucagon",
        "Option B": "Insulin",
        "Option C": "Cortisol",
        "Option D": "Estrogen",
        "Correct Option": "A",
        "Explanation": "Glucagon raises blood sugar levels by promoting the release of glucose from the liver."
    },
    {
        "Q.No": "42",
        "Question": "What is the role of the axon hillock in a neuron?",
        "Option A": "Generate the action potential",
        "Option B": "Release neurotransmitters",
        "Option C": "Store energy",
        "Option D": "Protect the neuron from damage",
        "Correct Option": "A",
        "Explanation": "The axon hillock generates the action potential, which is then transmitted down the axon."
    },
    {
        "Q.No": "43",
        "Question": "Which type of glial cell produces the myelin sheath in the central nervous system?",
        "Option A": "Oligodendrocytes",
        "Option B": "Schwann cells",
        "Option C": "Microglia",
        "Option D": "Astrocytes",
        "Correct Option": "A",
        "Explanation": "Oligodendrocytes produce myelin in the central nervous system, while Schwann cells do so in the peripheral nervous system."
    },
    {
        "Q.No": "44",
        "Question": "What is the function of the somatic motor neurons?",
        "Option A": "Control heart rate",
        "Option B": "Control voluntary muscle movement",
        "Option C": "Control digestion",
        "Option D": "Stimulate hormone release",
        "Correct Option": "B",
        "Explanation": "Somatic motor neurons transmit signals that control voluntary muscle movements."
    },
    {
        "Q.No": "45",
        "Question": "What is the role of the hypothalamus in the endocrine system?",
        "Option A": "Secrete digestive enzymes",
        "Option B": "Control hunger and thirst",
        "Option C": "Produce insulin",
        "Option D": "Regulate hormone secretion",
        "Correct Option": "D",
        "Explanation": "The hypothalamus regulates the release of hormones from the pituitary gland."
    },
    {
        "Q.No": "46",
        "Question": "What part of the neuron carries electrical impulses toward the cell body?",
        "Option A": "Axon",
        "Option B": "Dendrites",
        "Option C": "Myelin sheath",
        "Option D": "Synaptic terminals",
        "Correct Option": "B",
        "Explanation": "Dendrites carry electrical signals toward the cell body for processing."
    },
    {
        "Q.No": "47",
        "Question": "What is the primary role of the thalamus?",
        "Option A": "Relay sensory signals to the cerebral cortex",
        "Option B": "Control motor movement",
        "Option C": "Regulate emotions",
        "Option D": "Coordinate balance",
        "Correct Option": "A",
        "Explanation": "The thalamus relays sensory information to the cerebral cortex for processing."
    },
    {
        "Q.No": "48",
        "Question": "Which hormone regulates water balance in the body?",
        "Option A": "Aldosterone",
        "Option B": "Insulin",
        "Option C": "ADH",
        "Option D": "Thyroxine",
        "Correct Option": "C",
        "Explanation": "ADH (Antidiuretic hormone) regulates water balance by influencing kidney function."
    },
    {
        "Q.No": "49",
        "Question": "Which part of the nervous system coordinates voluntary movements and balance?",
        "Option A": "Cerebellum",
        "Option B": "Medulla oblongata",
        "Option C": "Spinal cord",
        "Option D": "Thalamus",
        "Correct Option": "A",
        "Explanation": "The cerebellum coordinates voluntary movements, balance, and motor control."
    },
    {
        "Q.No": "50",
        "Question": "Which of the following is a function of the parasympathetic nervous system?",
        "Option A": "Speed up heart rate",
        "Option B": "Increase blood sugar levels",
        "Option C": "Stimulate digestion",
        "Option D": "Increase blood pressure",
        "Correct Option": "C",
        "Explanation": "The parasympathetic nervous system promotes \"\"rest and digest\"\" functions, including digestion."
    },
    {
        "Q.No": "51",
        "Question": "Which of the following structures in the brain controls the circadian rhythm?",
        "Option A": "Pineal gland",
        "Option B": "Cerebellum",
        "Option C": "Hypothalamus",
        "Option D": "Medulla oblongata",
        "Correct Option": "A",
        "Explanation": "The pineal gland produces melatonin, which regulates the sleep-wake cycle (circadian rhythm)."
    },
    {
        "Q.No": "52",
        "Question": "The junction between two neurons is called the",
        "Option A": "Axon",
        "Option B": "Synapse",
        "Option C": "Dendrite",
        "Option D": "Node of Ranvier",
        "Correct Option": "B",
        "Explanation": "The synapse is the gap between two neurons where neurotransmitters transmit signals."
    },
    {
        "Q.No": "53",
        "Question": "Which part of the neuron is responsible for producing neurotransmitters?",
        "Option A": "Axon",
        "Option B": "Dendrites",
        "Option C": "Cell body",
        "Option D": "Myelin sheath",
        "Correct Option": "C",
        "Explanation": "The cell body contains the nucleus and produces neurotransmitters."
    },
    {
        "Q.No": "54",
        "Question": "Which of the following hormones is released by the adrenal medulla?",
        "Option A": "Adrenaline",
        "Option B": "Insulin",
        "Option C": "Estrogen",
        "Option D": "Progesterone",
        "Correct Option": "A",
        "Explanation": "Adrenaline is produced by the adrenal medulla and prepares the body for stress responses."
    },
    {
        "Q.No": "55",
        "Question": "What is the function of neurotransmitters in the nervous system?",
        "Option A": "Provide nutrients to neurons",
        "Option B": "Transmit electrical signals across synapses",
        "Option C": "Regulate heartbeat",
        "Option D": "Produce energy for the brain",
        "Correct Option": "B",
        "Explanation": "Neurotransmitters carry chemical signals across synapses to communicate between neurons."
    },
    {
        "Q.No": "56",
        "Question": "Which hormone is released by the pancreas to regulate blood sugar levels?",
        "Option A": "Insulin",
        "Option B": "Glucagon",
        "Option C": "Cortisol",
        "Option D": "Thyroxine",
        "Correct Option": "A",
        "Explanation": "Insulin is secreted by the pancreas to help lower blood sugar levels."
    },
    {
        "Q.No": "57",
        "Question": "Which of the following is a feature of the sympathetic nervous system?",
        "Option A": "Stimulates digestion",
        "Option B": "Reduces heart rate",
        "Option C": "Increases alertness",
        "Option D": "Promotes rest",
        "Correct Option": "C",
        "Explanation": "The sympathetic nervous system prepares the body for stressful situations, increasing heart rate and alertness."
    },
    {
        "Q.No": "58",
        "Question": "Which part of the nervous system processes sensory input and coordinates voluntary movement?",
        "Option A": "Central nervous system",
        "Option B": "Peripheral nervous system",
        "Option C": "Somatic nervous system",
        "Option D": "Autonomic nervous system",
        "Correct Option": "A",
        "Explanation": "The central nervous system processes sensory data and coordinates voluntary motor activities."
    },
    {
        "Q.No": "59",
        "Question": "Which neurotransmitter is primarily associated with pleasure and reward pathways in the brain?",
        "Option A": "Dopamine",
        "Option B": "Acetylcholine",
        "Option C": "Serotonin",
        "Option D": "Glutamate",
        "Correct Option": "A",
        "Explanation": "Dopamine plays a key role in reward, motivation, and pleasure pathways in the brain."
    },
    {
        "Q.No": "60",
        "Question": "The autonomic nervous system primarily controls",
        "Option A": "Voluntary movement",
        "Option B": "Involuntary functions",
        "Option C": "Sensory input processing",
        "Option D": "Motor output",
        "Correct Option": "B",
        "Explanation": "The autonomic nervous system controls involuntary functions like heart rate and digestion."
    },
    {
        "Q.No": "61",
        "Question": "What is the function of the cerebellum?",
        "Option A": "Control emotional responses",
        "Option B": "Balance and motor coordination",
        "Option C": "Regulation of body temperature",
        "Option D": "Sensory processing",
        "Correct Option": "B",
        "Explanation": "The cerebellum is responsible for coordination, balance, and fine motor control."
    },
    {
        "Q.No": "62",
        "Question": "Which part of the nervous system controls basic life functions like heartbeat and respiration?",
        "Option A": "Medulla oblongata",
        "Option B": "Cerebellum",
        "Option C": "Thalamus",
        "Option D": "Hypothalamus",
        "Correct Option": "A",
        "Explanation": "The medulla oblongata controls autonomic functions such as heartbeat, breathing, and digestion."
    },
    {
        "Q.No": "63",
        "Question": "Which of the following receptors is responsible for detecting temperature changes?",
        "Option A": "Thermoreceptors",
        "Option B": "Photoreceptors",
        "Option C": "Chemoreceptors",
        "Option D": "Mechanoreceptors",
        "Correct Option": "A",
        "Explanation": "Thermoreceptors detect changes in temperature, helping regulate body temperature."
    },
    {
        "Q.No": "64",
        "Question": "What is the function of the node of Ranvier in nerve conduction?",
        "Option A": "Speed up the nerve impulse",
        "Option B": "Protect the neuron from damage",
        "Option C": "Store neurotransmitters",
        "Option D": "Transmit the impulse across the synapse",
        "Correct Option": "A",
        "Explanation": "The node of Ranvier speeds up the conduction of nerve impulses by enabling saltatory conduction."
    },
    {
        "Q.No": "65",
        "Question": "Which structure in the eye contains the photoreceptors for vision?",
        "Option A": "Retina",
        "Option B": "Cornea",
        "Option C": "Lens",
        "Option D": "Iris",
        "Correct Option": "A",
        "Explanation": "The retina contains photoreceptor cells, such as rods and cones, responsible for detecting light and forming images."
    },
    {
        "Q.No": "66",
        "Question": "The fight-or-flight response is primarily mediated by which nervous system?",
        "Option A": "Parasympathetic nervous system",
        "Option B": "Sympathetic nervous system",
        "Option C": "Somatic nervous system",
        "Option D": "Central nervous system",
        "Correct Option": "B",
        "Explanation": "The sympathetic nervous system activates the fight-or-flight response during stressful situations."
    },
    {
        "Q.No": "67",
        "Question": "Which hormone is responsible for stimulating ovulation?",
        "Option A": "Estrogen",
        "Option B": "Progesterone",
        "Option C": "Luteinizing hormone",
        "Option D": "Follicle-stimulating hormone",
        "Correct Option": "C",
        "Explanation": "Luteinizing hormone (LH) triggers ovulation in females."
    },
    {
        "Q.No": "68",
        "Question": "What is the main function of the frontal lobe of the brain?",
        "Option A": "Vision",
        "Option B": "Memory and reasoning",
        "Option C": "Motor control",
        "Option D": "Balance and coordination",
        "Correct Option": "C",
        "Explanation": "The frontal lobe is primarily involved in motor control, decision-making, and problem-solving."
    },
    {
        "Q.No": "69",
        "Question": "Which of the following hormones is responsible for increasing blood pressure?",
        "Option A": "Adrenaline",
        "Option B": "Insulin",
        "Option C": "Progesterone",
        "Option D": "Thyroxine",
        "Correct Option": "A",
        "Explanation": "Adrenaline increases heart rate and blood pressure during the fight-or-flight response."
    },
    {
        "Q.No": "70",
        "Question": "Which of the following is a role of the vagus nerve in the parasympathetic nervous system?",
        "Option A": "Stimulate digestion",
        "Option B": "Increase heart rate",
        "Option C": "Decrease respiration rate",
        "Option D": "Activate the fight-or-flight response",
        "Correct Option": "A",
        "Explanation": "The vagus nerve promotes \"\"rest and digest\"\" activities, including digestion."
    },
    {
        "Q.No": "71",
        "Question": "What part of the neuron is involved in the transmission of electrical impulses over long distances?",
        "Option A": "Axon",
        "Option B": "Dendrites",
        "Option C": "Synapse",
        "Option D": "Cell body",
        "Correct Option": "A",
        "Explanation": "The axon transmits electrical impulses over long distances to other neurons or muscles."
    },
    {
        "Q.No": "72",
        "Question": "What is the primary role of the thalamus in sensory processing?",
        "Option A": "Transmit motor signals",
        "Option B": "Relay sensory information to the cerebral cortex",
        "Option C": "Produce hormones",
        "Option D": "Regulate emotions",
        "Correct Option": "B",
        "Explanation": "The thalamus relays sensory information from the spinal cord to the cerebral cortex for processing."
    },
    {
        "Q.No": "73",
        "Question": "Which part of the brain is responsible for voluntary muscle control?",
        "Option A": "Cerebellum",
        "Option B": "Medulla oblongata",
        "Option C": "Spinal cord",
        "Option D": "Cerebrum",
        "Correct Option": "D",
        "Explanation": "The cerebrum controls voluntary muscle movements and higher cognitive functions."
    },
    {
        "Q.No": "74",
        "Question": "Which hormone is responsible for the production of milk in mammals?",
        "Option A": "Prolactin",
        "Option B": "Estrogen",
        "Option C": "Testosterone",
        "Option D": "Oxytocin",
        "Correct Option": "A",
        "Explanation": "Prolactin stimulates milk production in the mammary glands."
    },
    {
        "Q.No": "75",
        "Question": "What is the function of the Schwann cells?",
        "Option A": "Support neurons",
        "Option B": "Transmit electrical signals",
        "Option C": "Produce myelin in the peripheral nervous system",
        "Option D": "Produce neurotransmitters",
        "Correct Option": "C",
        "Explanation": "Schwann cells form the myelin sheath around neurons in the peripheral nervous system."
    },
    {
        "Q.No": "76",
        "Question": "Which of the following neurotransmitters is associated with learning and memory?",
        "Option A": "Acetylcholine",
        "Option B": "Serotonin",
        "Option C": "Dopamine",
        "Option D": "GABA",
        "Correct Option": "A",
        "Explanation": "Acetylcholine plays a key role in memory formation and cognitive function."
    },
    {
        "Q.No": "77",
        "Question": "What is the function of the corpus callosum?",
        "Option A": "Transfer sensory signals between hemispheres",
        "Option B": "Connect the two brain hemispheres for communication",
        "Option C": "Regulate motor functions",
        "Option D": "Control vision",
        "Correct Option": "B",
        "Explanation": "The corpus callosum connects the left and right hemispheres of the brain to coordinate activity."
    },
    {
        "Q.No": "78",
        "Question": "Which hormone is released in response to low blood calcium levels?",
        "Option A": "Parathyroid hormone",
        "Option B": "Insulin",
        "Option C": "Glucagon",
        "Option D": "Adrenaline",
        "Correct Option": "A",
        "Explanation": "Parathyroid hormone increases blood calcium levels by promoting bone resorption."
    },
    {
        "Q.No": "79",
        "Question": "Which of the following is a function of the occipital lobe?",
        "Option A": "Vision",
        "Option B": "Emotion regulation",
        "Option C": "Speech production",
        "Option D": "Motor control",
        "Correct Option": "A",
        "Explanation": "The occipital lobe processes visual information."
    },
    {
        "Q.No": "80",
        "Question": "The neurotransmitter serotonin is primarily involved in which of the following?",
        "Option A": "Muscle contraction",
        "Option B": "Mood regulation",
        "Option C": "Digestion",
        "Option D": "Heart rate regulation",
        "Correct Option": "B",
        "Explanation": "Serotonin regulates mood, appetite, and sleep."
    },
    {
        "Q.No": "81",
        "Question": "What is the primary function of the temporal lobe of the brain?",
        "Option A": "Vision",
        "Option B": "Memory and auditory processing",
        "Option C": "Movement and balance",
        "Option D": "Heart rate regulation",
        "Correct Option": "B",
        "Explanation": "The temporal lobe processes auditory information and plays a role in memory formation."
    },
    {
        "Q.No": "82",
        "Question": "Which of the following hormones helps regulate the body's circadian rhythm?",
        "Option A": "Melatonin",
        "Option B": "Thyroxine",
        "Option C": "Insulin",
        "Option D": "Cortisol",
        "Correct Option": "A",
        "Explanation": "Melatonin regulates the sleep-wake cycle and circadian rhythms."
    },
    {
        "Q.No": "83",
        "Question": "What is the role of the neurotransmitter GABA?",
        "Option A": "Excite neurons",
        "Option B": "Inhibit neural transmission",
        "Option C": "Regulate blood sugar levels",
        "Option D": "Increase heart rate",
        "Correct Option": "B",
        "Explanation": "GABA is an inhibitory neurotransmitter that reduces neuron excitability."
    },
    {
        "Q.No": "84",
        "Question": "Which of the following structures helps maintain the blood-brain barrier?",
        "Option A": "Astrocytes",
        "Option B": "Schwann cells",
        "Option C": "Microglia",
        "Option D": "Oligodendrocytes",
        "Correct Option": "A",
        "Explanation": "Astrocytes help form the blood-brain barrier by regulating the permeability of blood vessels in the brain."
    },
    {
        "Q.No": "85",
        "Question": "What is the function of the somatic nervous system?",
        "Option A": "Control involuntary movements",
        "Option B": "Control voluntary muscle movements",
        "Option C": "Regulate heart rate",
        "Option D": "Process sensory information",
        "Correct Option": "B",
        "Explanation": "The somatic nervous system controls voluntary muscle movements."
    },
    {
        "Q.No": "86",
        "Question": "Which part of the nervous system is responsible for \"\"fight or flight\"\" reactions?",
        "Option A": "Sympathetic nervous system",
        "Option B": "Parasympathetic nervous system",
        "Option C": "Central nervous system",
        "Option D": "Autonomic nervous system",
        "Correct Option": "A",
        "Explanation": "The sympathetic nervous system is responsible for activating the body's fight-or-flight response."
    },
    {
        "Q.No": "87",
        "Question": "Which structure in the ear helps maintain balance?",
        "Option A": "Cochlea",
        "Option B": "Oval window",
        "Option C": "Semicircular canals",
        "Option D": "Tympanic membrane",
        "Correct Option": "C",
        "Explanation": "The semicircular canals in the inner ear help maintain balance and spatial orientation."
    },
    {
        "Q.No": "88",
        "Question": "Which part of the brain is involved in processing emotions and memory?",
        "Option A": "Hippocampus",
        "Option B": "Cerebellum",
        "Option C": "Thalamus",
        "Option D": "Medulla oblongata",
        "Correct Option": "A",
        "Explanation": "The hippocampus is involved in memory formation and emotional regulation."
    },
    {
        "Q.No": "89",
        "Question": "Which of the following neurotransmitters is associated with mood disorders like depression?",
        "Option A": "Serotonin",
        "Option B": "Acetylcholine",
        "Option C": "Dopamine",
        "Option D": "Glutamate",
        "Correct Option": "A",
        "Explanation": "Low levels of serotonin are associated with mood disorders such as depression."
    },
    {
        "Q.No": "90",
        "Question": "What is the primary function of the parietal lobe?",
        "Option A": "Hearing",
        "Option B": "Vision",
        "Option C": "Sensory processing and spatial awareness",
        "Option D": "Movement control",
        "Correct Option": "C",
        "Explanation": "The parietal lobe processes sensory information and is involved in spatial awareness."
    },
    {
        "Q.No": "91",
        "Question": "Which of the following is a primary function of the brainstem?",
        "Option A": "Control motor skills",
        "Option B": "Relay sensory information",
        "Option C": "Control basic life functions",
        "Option D": "Produce hormones",
        "Correct Option": "C",
        "Explanation": "The brainstem controls basic life functions such as breathing and heartbeat."
    },
    {
        "Q.No": "92",
        "Question": "Which part of the neuron is responsible for carrying impulses away from the cell body?",
        "Option A": "Axon",
        "Option B": "Dendrites",
        "Option C": "Cell body",
        "Option D": "Synapse",
        "Correct Option": "A",
        "Explanation": "The axon carries electrical impulses away from the cell body toward other neurons or muscles."
    },
    {
        "Q.No": "93",
        "Question": "What is the role of the endocrine system?",
        "Option A": "Transmit electrical signals",
        "Option B": "Regulate long-term body processes through hormones",
        "Option C": "Control voluntary movement",
        "Option D": "Maintain balance",
        "Correct Option": "B",
        "Explanation": "The endocrine system regulates processes such as metabolism, growth, and mood through hormone release."
    },
    {
        "Q.No": "94",
        "Question": "Which part of the brain controls reflex actions?",
        "Option A": "Medulla oblongata",
        "Option B": "Cerebellum",
        "Option C": "Hypothalamus",
        "Option D": "Thalamus",
        "Correct Option": "A",
        "Explanation": "The medulla oblongata is responsible for reflex actions and autonomic functions like breathing."
    },
    {
        "Q.No": "95",
        "Question": "What type of neurotransmitter is involved in motor control?",
        "Option A": "Dopamine",
        "Option B": "Serotonin",
        "Option C": "GABA",
        "Option D": "Glutamate",
        "Correct Option": "A",
        "Explanation": "Dopamine plays a key role in motor control and coordination, particularly in diseases like Parkinson's."
    },
    {
        "Q.No": "96",
        "Question": "What hormone regulates the menstrual cycle?",
        "Option A": "Estrogen",
        "Option B": "Progesterone",
        "Option C": "Follicle-stimulating hormone",
        "Option D": "Luteinizing hormone",
        "Correct Option": "A",
        "Explanation": "Estrogen regulates the menstrual cycle and the development of female reproductive tissues."
    },
    {
        "Q.No": "97",
        "Question": "What is the role of the blood-brain barrier?",
        "Option A": "Protect the brain from toxins and pathogens",
        "Option B": "Allow all substances to pass through",
        "Option C": "Help the brain produce neurotransmitters",
        "Option D": "Regulate heart rate",
        "Correct Option": "A",
        "Explanation": "The blood-brain barrier protects the brain from harmful substances circulating in the blood."
    },
    {
        "Q.No": "98",
        "Question": "Which part of the nervous system controls involuntary functions like digestion and heart rate?",
        "Option A": "Central nervous system",
        "Option B": "Peripheral nervous system",
        "Option C": "Autonomic nervous system",
        "Option D": "Somatic nervous system",
        "Correct Option": "C",
        "Explanation": "The autonomic nervous system regulates involuntary functions such as digestion and heart rate."
    },
    {
        "Q.No": "99",
        "Question": "Which of the following structures is primarily involved in learning and memory?",
        "Option A": "Hippocampus",
        "Option B": "Cerebellum",
        "Option C": "Medulla oblongata",
        "Option D": "Thalamus",
        "Correct Option": "A",
        "Explanation": "The hippocampus is involved in learning, memory formation, and emotional responses."
    },
    {
        "Q.No": "100",
        "Question": "Which of the following hormones is released during stress?",
        "Option A": "Cortisol",
        "Option B": "Thyroxine",
        "Option C": "Insulin",
        "Option D": "Progesterone",
        "Correct Option": "A",
        "Explanation": "Cortisol is released by the adrenal glands during stress to help the body cope with the situation."
    }
      ]
    },
    "Animal Classification": {
      color: "#2c3e50",
      icon: "🐾",
      questions: [
        {
        "Q.No": "1",
        "Question": "What is the largest group of animals on Earth?",
        "Option A": "Mammals",
        "Option B": "Insects",
        "Option C": "Reptiles",
        "Option D": "Birds",
        "Correct Option": "B",
        "Explanation": "Insects are the largest group of animals, making up the majority of animal species."
    },
    {
        "Q.No": "2",
        "Question": "Which of the following is an example of an invertebrate animal?",
        "Option A": "Fish",
        "Option B": "Insect",
        "Option C": "Bird",
        "Option D": "Mammal",
        "Correct Option": "B",
        "Explanation": "Insects are invertebrates, meaning they lack a backbone."
    },
    {
        "Q.No": "3",
        "Question": "Which of the following animals has an exoskeleton?",
        "Option A": "Frog",
        "Option B": "Fish",
        "Option C": "Ant",
        "Option D": "Dog",
        "Correct Option": "C",
        "Explanation": "Ants have an exoskeleton, unlike vertebrates that have an internal skeleton."
    },
    {
        "Q.No": "4",
        "Question": "What type of symmetry is seen in animals like starfish?",
        "Option A": "Bilateral symmetry",
        "Option B": "Radial symmetry",
        "Option C": "Asymmetry",
        "Option D": "Spherical symmetry",
        "Correct Option": "B",
        "Explanation": "Starfish have radial symmetry, where their body parts are arranged around a central axis."
    },
    {
        "Q.No": "5",
        "Question": "Which of the following is the main characteristic of mammals?",
        "Option A": "External skeleton",
        "Option B": "Warm-blooded",
        "Option C": "Cold-blooded",
        "Option D": "Lays eggs",
        "Correct Option": "B",
        "Explanation": "Mammals are warm-blooded, meaning they can regulate their body temperature internally."
    },
    {
        "Q.No": "6",
        "Question": "Which animal is known for its ability to regenerate limbs?",
        "Option A": "Octopus",
        "Option B": "Frog",
        "Option C": "Salamander",
        "Option D": "Elephant",
        "Correct Option": "C",
        "Explanation": "Salamanders can regenerate lost limbs, making them unique among vertebrates."
    },
    {
        "Q.No": "7",
        "Question": "What is the primary feature of animals in the phylum Chordata?",
        "Option A": "Presence of a backbone",
        "Option B": "Presence of jointed limbs",
        "Option C": "Bilateral symmetry",
        "Option D": "Exoskeleton",
        "Correct Option": "A",
        "Explanation": "Animals in Chordata have a notochord, which is replaced by a backbone in most species."
    },
    {
        "Q.No": "8",
        "Question": "Which of the following animals is a filter feeder?",
        "Option A": "Shark",
        "Option B": "Whale",
        "Option C": "Dolphin",
        "Option D": "Sponge",
        "Correct Option": "D",
        "Explanation": "Sponges are filter feeders that absorb nutrients from water passing through them."
    },
    {
        "Q.No": "9",
        "Question": "What is the main function of the exoskeleton in arthropods?",
        "Option A": "Support and protection",
        "Option B": "Movement",
        "Option C": "Digestion",
        "Option D": "Circulation",
        "Correct Option": "A",
        "Explanation": "The exoskeleton in arthropods provides support and protection for the body."
    },
    {
        "Q.No": "10",
        "Question": "Which of the following animals is a mammal?",
        "Option A": "Penguin",
        "Option B": "Whale",
        "Option C": "Crocodile",
        "Option D": "Shark",
        "Correct Option": "B",
        "Explanation": "Whales are mammals that live in the ocean but breathe air through lungs."
    },
    {
        "Q.No": "11",
        "Question": "What distinguishes amphibians from reptiles?",
        "Option A": "Amphibians lay eggs on land",
        "Option B": "Amphibians have scales",
        "Option C": "Amphibians can live both on land and in water",
        "Option D": "Amphibians are cold-blooded",
        "Correct Option": "C",
        "Explanation": "Amphibians can live both on land and in water during different stages of their life cycle."
    },
    {
        "Q.No": "12",
        "Question": "Which of the following is a characteristic of reptiles?",
        "Option A": "Warm-blooded",
        "Option B": "Skin covered with feathers",
        "Option C": "Body covered with scales",
        "Option D": "Lays eggs in water",
        "Correct Option": "C",
        "Explanation": "Reptiles have scales on their bodies and are typically cold-blooded."
    },
    {
        "Q.No": "13",
        "Question": "What is the defining characteristic of birds?",
        "Option A": "Laying eggs",
        "Option B": "Presence of feathers",
        "Option C": "Warm-blooded",
        "Option D": "All of the above",
        "Correct Option": "D",
        "Explanation": "Birds lay eggs, have feathers, and are warm-blooded."
    },
    {
        "Q.No": "14",
        "Question": "What is a characteristic of all mammals?",
        "Option A": "Cold-blooded",
        "Option B": "Lays eggs",
        "Option C": "Fur or hair",
        "Option D": "Have gills",
        "Correct Option": "C",
        "Explanation": "Mammals are characterized by having fur or hair and producing milk for their young."
    },
    {
        "Q.No": "15",
        "Question": "Which of the following animals is a marsupial?",
        "Option A": "Dolphin",
        "Option B": "Kangaroo",
        "Option C": "Elephant",
        "Option D": "Penguin",
        "Correct Option": "B",
        "Explanation": "Kangaroos are marsupials, meaning they carry their young in a pouch."
    },
    {
        "Q.No": "16",
        "Question": "Which animal group has the highest number of species?",
        "Option A": "Birds",
        "Option B": "Mammals",
        "Option C": "Fish",
        "Option D": "Insects",
        "Correct Option": "D",
        "Explanation": "Insects make up the majority of animal species, with over a million species identified."
    },
    {
        "Q.No": "17",
        "Question": "Which of the following animals has a cartilaginous skeleton?",
        "Option A": "Frog",
        "Option B": "Shark",
        "Option C": "Lizard",
        "Option D": "Elephant",
        "Correct Option": "B",
        "Explanation": "Sharks have a skeleton made of cartilage instead of bone."
    },
    {
        "Q.No": "18",
        "Question": "What is the main characteristic of animals in the phylum Mollusca?",
        "Option A": "External skeleton",
        "Option B": "Bilateral symmetry",
        "Option C": "Soft body with a hard shell",
        "Option D": "Exoskeleton",
        "Correct Option": "C",
        "Explanation": "Mollusks generally have a soft body, often with a hard shell for protection."
    },
    {
        "Q.No": "19",
        "Question": "Which of the following is an example of an echinoderm?",
        "Option A": "Jellyfish",
        "Option B": "Sea cucumber",
        "Option C": "Octopus",
        "Option D": "Crab",
        "Correct Option": "B",
        "Explanation": "Sea cucumbers are echinoderms, which have radial symmetry and a water vascular system."
    },
    {
        "Q.No": "20",
        "Question": "Which animal is an example of an endotherm?",
        "Option A": "Frog",
        "Option B": "Lizard",
        "Option C": "Dolphin",
        "Option D": "Crocodile",
        "Correct Option": "C",
        "Explanation": "Dolphins are endotherms (warm-blooded) and can regulate their internal body temperature."
    },
    {
        "Q.No": "21",
        "Question": "What is the primary function of the swim bladder in fish?",
        "Option A": "To aid in digestion",
        "Option B": "To help with buoyancy",
        "Option C": "To process oxygen",
        "Option D": "To store food",
        "Correct Option": "B",
        "Explanation": "The swim bladder helps fish maintain buoyancy in water."
    },
    {
        "Q.No": "22",
        "Question": "What is the main characteristic of cnidarians?",
        "Option A": "Bilateral symmetry",
        "Option B": "Presence of a shell",
        "Option C": "Stinging cells",
        "Option D": "Soft body",
        "Correct Option": "C",
        "Explanation": "Cnidarians, such as jellyfish, have specialized cells called cnidocytes that contain stingers."
    },
    {
        "Q.No": "23",
        "Question": "Which of the following animals is known for its ability to fly?",
        "Option A": "Bat",
        "Option B": "Whale",
        "Option C": "Snake",
        "Option D": "Frog",
        "Correct Option": "A",
        "Explanation": "Bats are mammals known for their ability to fly using their wings."
    },
    {
        "Q.No": "24",
        "Question": "What is the primary characteristic of sponges?",
        "Option A": "Have jointed limbs",
        "Option B": "Lack tissues and organs",
        "Option C": "Have a hard shell",
        "Option D": "Presence of tentacles",
        "Correct Option": "B",
        "Explanation": "Sponges are simple animals that lack tissues and organs."
    },
    {
        "Q.No": "25",
        "Question": "Which of the following is a characteristic of animals in the phylum Arthropoda?",
        "Option A": "Soft body",
        "Option B": "Bilateral symmetry",
        "Option C": "Exoskeleton and jointed limbs",
        "Option D": "Radial symmetry",
        "Correct Option": "C",
        "Explanation": "Arthropods have an exoskeleton and jointed limbs, and they undergo molting."
    },
    {
        "Q.No": "26",
        "Question": "What is the main function of gills in fish?",
        "Option A": "Respiration",
        "Option B": "Digestion",
        "Option C": "Circulation",
        "Option D": "Buoyancy",
        "Correct Option": "A",
        "Explanation": "Gills are used by fish to extract oxygen from water for respiration."
    },
    {
        "Q.No": "27",
        "Question": "Which of the following is a characteristic of all vertebrates?",
        "Option A": "Lack of a backbone",
        "Option B": "Presence of a backbone",
        "Option C": "Exoskeleton",
        "Option D": "Bilateral symmetry",
        "Correct Option": "B",
        "Explanation": "Vertebrates are animals with a backbone or spinal column."
    },
    {
        "Q.No": "28",
        "Question": "What is the primary role of the notochord in early chordates?",
        "Option A": "Support the body",
        "Option B": "Digest food",
        "Option C": "Regulate temperature",
        "Option D": "Store energy",
        "Correct Option": "A",
        "Explanation": "The notochord provides structural support in early chordates, later replaced by the backbone."
    },
    {
        "Q.No": "29",
        "Question": "Which of the following animals is a cold-blooded vertebrate?",
        "Option A": "Whale",
        "Option B": "Frog",
        "Option C": "Bird",
        "Option D": "Dolphin",
        "Correct Option": "B",
        "Explanation": "Frogs are cold-blooded vertebrates that depend on external environmental temperatures to regulate body heat."
    },
    {
        "Q.No": "30",
        "Question": "Which of the following animals has a radial symmetry?",
        "Option A": "Earthworm",
        "Option B": "Jellyfish",
        "Option C": "Bird",
        "Option D": "Dog",
        "Correct Option": "B",
        "Explanation": "Jellyfish have radial symmetry, meaning their body parts are arranged around a central axis."
    },
    {
        "Q.No": "31",
        "Question": "Which of the following organisms is an amphibian?",
        "Option A": "Lizard",
        "Option B": "Frog",
        "Option C": "Turtle",
        "Option D": "Snake",
        "Correct Option": "B",
        "Explanation": "Frogs are amphibians, able to live both on land and in water."
    },
    {
        "Q.No": "32",
        "Question": "What is a characteristic of the phylum Annelida?",
        "Option A": "Jointed limbs",
        "Option B": "Segmented body",
        "Option C": "Hard exoskeleton",
        "Option D": "Radial symmetry",
        "Correct Option": "B",
        "Explanation": "Annelids, such as earthworms, have a segmented body structure."
    },
    {
        "Q.No": "33",
        "Question": "What is the primary purpose of the large intestine in mammals?",
        "Option A": "Digestion",
        "Option B": "Absorption of water",
        "Option C": "Circulation",
        "Option D": "Excretion",
        "Correct Option": "B",
        "Explanation": "The large intestine absorbs water and minerals from undigested food."
    },
    {
        "Q.No": "34",
        "Question": "What type of skeleton do vertebrates have?",
        "Option A": "Exoskeleton",
        "Option B": "Endoskeleton",
        "Option C": "Cartilaginous skeleton",
        "Option D": "None of the above",
        "Correct Option": "B",
        "Explanation": "Vertebrates have an internal skeleton (endoskeleton) made of bone or cartilage."
    },
    {
        "Q.No": "35",
        "Question": "Which of the following is an example of a mammal that lays eggs?",
        "Option A": "Kangaroo",
        "Option B": "Platypus",
        "Option C": "Whale",
        "Option D": "Bat",
        "Correct Option": "B",
        "Explanation": "The platypus is one of the few egg-laying mammals known as monotremes."
    },
    {
        "Q.No": "36",
        "Question": "Which of the following is a characteristic of all arthropods?",
        "Option A": "Soft body",
        "Option B": "Segmented body",
        "Option C": "Lack of jointed legs",
        "Option D": "Presence of a shell",
        "Correct Option": "B",
        "Explanation": "Arthropods, such as insects, have a segmented body and jointed legs."
    },
    {
        "Q.No": "37",
        "Question": "What is the primary function of the tentacles in cephalopods like octopuses?",
        "Option A": "Movement",
        "Option B": "Circulation",
        "Option C": "Feeding and grasping",
        "Option D": "Respiration",
        "Correct Option": "C",
        "Explanation": "Tentacles are used by cephalopods for feeding, grasping objects, and movement."
    },
    {
        "Q.No": "38",
        "Question": "What is the primary purpose of the circulatory system in vertebrates?",
        "Option A": "Transport nutrients and gases",
        "Option B": "Digest food",
        "Option C": "Eliminate waste",
        "Option D": "Regulate body temperature",
        "Correct Option": "A",
        "Explanation": "The circulatory system transports oxygen, nutrients, and waste products throughout the body."
    },
    {
        "Q.No": "39",
        "Question": "Which of the following animals is known for its unique ability to produce silk?",
        "Option A": "Spider",
        "Option B": "Snail",
        "Option C": "Shark",
        "Option D": "Whale",
        "Correct Option": "A",
        "Explanation": "Spiders produce silk used to build webs and capture prey."
    },
    {
        "Q.No": "40",
        "Question": "Which of the following is a key characteristic of amphibians during their lifecycle?",
        "Option A": "External fertilization",
        "Option B": "Internal fertilization",
        "Option C": "Exoskeleton",
        "Option D": "Presence of gills in adults",
        "Correct Option": "A",
        "Explanation": "Amphibians typically undergo external fertilization, especially in aquatic environments."
    },
    {
        "Q.No": "41",
        "Question": "Which animal has the ability to regenerate lost body parts?",
        "Option A": "Salamander",
        "Option B": "Dog",
        "Option C": "Human",
        "Option D": "Fish",
        "Correct Option": "A",
        "Explanation": "Salamanders are known for their regenerative abilities, including limb regrowth."
    },
    {
        "Q.No": "42",
        "Question": "What is the primary characteristic of the phylum Cnidaria?",
        "Option A": "Soft body",
        "Option B": "Presence of tentacles with stinging cells",
        "Option C": "Hard skeleton",
        "Option D": "Jointed limbs",
        "Correct Option": "B",
        "Explanation": "Cnidarians like jellyfish have stinging cells (cnidocytes) on their tentacles."
    },
    {
        "Q.No": "43",
        "Question": "What is the main function of the brain in vertebrates?",
        "Option A": "Circulation",
        "Option B": "Respiration",
        "Option C": "Coordination of body functions",
        "Option D": "Movement",
        "Correct Option": "C",
        "Explanation": "The brain controls and coordinates sensory input, motor functions, and various body processes."
    },
    {
        "Q.No": "44",
        "Question": "Which of the following is a characteristic of fish?",
        "Option A": "Lungs for respiration",
        "Option B": "Cold-blooded",
        "Option C": "Hair or fur",
        "Option D": "Internal fertilization",
        "Correct Option": "B",
        "Explanation": "Fish are cold-blooded and rely on gills for respiration."
    },
    {
        "Q.No": "45",
        "Question": "Which of the following animals is known for its ability to fly and is a mammal?",
        "Option A": "Bat",
        "Option B": "Squirrel",
        "Option C": "Kangaroo",
        "Option D": "Elephant",
        "Correct Option": "A",
        "Explanation": "Bats are the only mammals capable of true flight."
    },
    {
        "Q.No": "46",
        "Question": "Which of the following animals is a herbivore?",
        "Option A": "Lion",
        "Option B": "Elephant",
        "Option C": "Shark",
        "Option D": "Wolf",
        "Correct Option": "B",
        "Explanation": "Elephants are herbivores that mainly consume plants."
    },
    {
        "Q.No": "47",
        "Question": "Which group of animals is known for having a complex digestive system and segmented bodies?",
        "Option A": "Mollusks",
        "Option B": "Echinoderms",
        "Option C": "Arthropods",
        "Option D": "Annelids",
        "Correct Option": "D",
        "Explanation": "Annelids, such as earthworms, have segmented bodies and a complete digestive system."
    },
    {
        "Q.No": "48",
        "Question": "Which of the following is a major characteristic of amphibians?",
        "Option A": "Cold-blooded",
        "Option B": "Lungs and gills",
        "Option C": "Lay eggs in water",
        "Option D": "All of the above",
        "Correct Option": "D",
        "Explanation": "Amphibians are cold-blooded, can have both lungs and gills, and lay eggs in water."
    },
    {
        "Q.No": "49",
        "Question": "Which type of symmetry do most adult echinoderms display?",
        "Option A": "Bilateral symmetry",
        "Option B": "Radial symmetry",
        "Option C": "Asymmetry",
        "Option D": "Spherical symmetry",
        "Correct Option": "B",
        "Explanation": "Most adult echinoderms, such as starfish, display radial symmetry."
    },
    {
        "Q.No": "50",
        "Question": "Which of the following is an adaptation for flight in birds?",
        "Option A": "Wings and feathers",
        "Option B": "Gills",
        "Option C": "Exoskeleton",
        "Option D": "Hair and milk production",
        "Correct Option": "A",
        "Explanation": "Birds have wings and feathers, which are key adaptations for flight."
    },
    {
        "Q.No": "51",
        "Question": "What is the function of the large intestine in mammals?",
        "Option A": "Absorption of nutrients",
        "Option B": "Absorption of water",
        "Option C": "Digestion of food",
        "Option D": "Circulation",
        "Correct Option": "B",
        "Explanation": "The large intestine absorbs water and electrolytes from undigested food."
    },
    {
        "Q.No": "52",
        "Question": "Which of the following animals is a filter feeder?",
        "Option A": "Whale",
        "Option B": "Jellyfish",
        "Option C": "Sponge",
        "Option D": "Bat",
        "Correct Option": "C",
        "Explanation": "Sponges are filter feeders that absorb nutrients from water passing through their bodies."
    },
    {
        "Q.No": "53",
        "Question": "Which of the following is the function of the placenta in mammals?",
        "Option A": "Exchange nutrients between the mother and fetus",
        "Option B": "Store oxygen",
        "Option C": "Produce milk",
        "Option D": "Produce red blood cells",
        "Correct Option": "A",
        "Explanation": "The placenta provides nutrients, oxygen, and waste exchange between the mother and fetus during pregnancy."
    },
    {
        "Q.No": "54",
        "Question": "What is the main function of the gills in fish?",
        "Option A": "Respiration",
        "Option B": "Digestion",
        "Option C": "Reproduction",
        "Option D": "Buoyancy",
        "Correct Option": "A",
        "Explanation": "Gills are used by fish to extract oxygen from water and release carbon dioxide."
    },
    {
        "Q.No": "55",
        "Question": "Which animal is an example of a monotreme?",
        "Option A": "Platypus",
        "Option B": "Kangaroo",
        "Option C": "Whale",
        "Option D": "Penguin",
        "Correct Option": "A",
        "Explanation": "The platypus is a monotreme, which is a type of egg-laying mammal."
    },
    {
        "Q.No": "56",
        "Question": "What is the main characteristic of animals in the phylum Arthropoda?",
        "Option A": "Soft bodies",
        "Option B": "Hard shells",
        "Option C": "Exoskeleton and jointed limbs",
        "Option D": "Radial symmetry",
        "Correct Option": "C",
        "Explanation": "Arthropods have an exoskeleton and jointed limbs, such as in insects and crustaceans."
    },
    {
        "Q.No": "57",
        "Question": "What is the role of the diaphragm in mammals?",
        "Option A": "Circulation",
        "Option B": "Respiration",
        "Option C": "Digestion",
        "Option D": "Movement",
        "Correct Option": "B",
        "Explanation": "The diaphragm helps with the process of respiration by enabling lung expansion."
    },
    {
        "Q.No": "58",
        "Question": "Which of the following animals has a cartilaginous skeleton?",
        "Option A": "Frog",
        "Option B": "Fish",
        "Option C": "Shark",
        "Option D": "Dog",
        "Correct Option": "C",
        "Explanation": "Sharks have a skeleton made of cartilage instead of bone."
    },
    {
        "Q.No": "59",
        "Question": "What type of body covering do mammals have?",
        "Option A": "Feathers",
        "Option B": "Scales",
        "Option C": "Hair or fur",
        "Option D": "Exoskeleton",
        "Correct Option": "C",
        "Explanation": "Mammals are characterized by having hair or fur."
    },
    {
        "Q.No": "60",
        "Question": "What feature distinguishes amphibians from reptiles?",
        "Option A": "Amphibians have external fertilization",
        "Option B": "Amphibians have dry, scaly skin",
        "Option C": "Amphibians lay eggs on land",
        "Option D": "Amphibians are cold-blooded",
        "Correct Option": "A",
        "Explanation": "Most amphibians have external fertilization, especially in aquatic environments."
    },
    {
        "Q.No": "61",
        "Question": "What is a characteristic of fish?",
        "Option A": "Cold-blooded",
        "Option B": "Hair or fur",
        "Option C": "Lungs for respiration",
        "Option D": "All of the above",
        "Correct Option": "A",
        "Explanation": "Fish are cold-blooded and rely on gills for respiration."
    },
    {
        "Q.No": "62",
        "Question": "What type of circulatory system do most mammals have?",
        "Option A": "Open circulatory system",
        "Option B": "Closed circulatory system",
        "Option C": "No circulatory system",
        "Option D": "Simple circulatory system",
        "Correct Option": "B",
        "Explanation": "Mammals have a closed circulatory system, where blood circulates through vessels."
    },
    {
        "Q.No": "63",
        "Question": "What is the primary purpose of feathers in birds?",
        "Option A": "Insulation and flight",
        "Option B": "Digestion",
        "Option C": "Protection from predators",
        "Option D": "Reproduction",
        "Correct Option": "A",
        "Explanation": "Feathers help birds with insulation and enable flight."
    },
    {
        "Q.No": "64",
        "Question": "What distinguishes amphibians from other vertebrates?",
        "Option A": "They lay eggs in water",
        "Option B": "They have scales",
        "Option C": "They have a backbone",
        "Option D": "They are warm-blooded",
        "Correct Option": "A",
        "Explanation": "Amphibians lay eggs in water, which distinguishes them from other vertebrates."
    },
    {
        "Q.No": "65",
        "Question": "Which of the following is an example of an amphibian?",
        "Option A": "Frog",
        "Option B": "Snake",
        "Option C": "Shark",
        "Option D": "Turtle",
        "Correct Option": "A",
        "Explanation": "Frogs are amphibians, capable of living both in water and on land."
    },
    {
        "Q.No": "66",
        "Question": "Which of the following is a characteristic of mammals?",
        "Option A": "Lay eggs",
        "Option B": "Have hair or fur",
        "Option C": "Cold-blooded",
        "Option D": "Have gills",
        "Correct Option": "B",
        "Explanation": "Mammals have hair or fur and are warm-blooded."
    },
    {
        "Q.No": "67",
        "Question": "Which of the following animals is known for its ability to produce silk?",
        "Option A": "Spider",
        "Option B": "Snail",
        "Option C": "Whale",
        "Option D": "Shark",
        "Correct Option": "A",
        "Explanation": "Spiders produce silk to build webs and capture prey."
    },
    {
        "Q.No": "68",
        "Question": "What is the main function of the swim bladder in fish?",
        "Option A": "Digestion",
        "Option B": "Buoyancy",
        "Option C": "Circulation",
        "Option D": "Excretion",
        "Correct Option": "B",
        "Explanation": "The swim bladder helps fish maintain buoyancy and stay afloat in water."
    },
    {
        "Q.No": "69",
        "Question": "What type of symmetry is most commonly found in animals in the phylum Echinodermata?",
        "Option A": "Bilateral symmetry",
        "Option B": "Radial symmetry",
        "Option C": "Asymmetry",
        "Option D": "None of the above",
        "Correct Option": "B",
        "Explanation": "Echinoderms, such as starfish, exhibit radial symmetry."
    },
    {
        "Q.No": "70",
        "Question": "What is the primary function of the tentacles in cephalopods?",
        "Option A": "Feeding and movement",
        "Option B": "Reproduction",
        "Option C": "Communication",
        "Option D": "Sensory",
        "Correct Option": "A",
        "Explanation": "Tentacles in cephalopods like octopuses are used for feeding, grasping, and movement."
    },
    {
        "Q.No": "71",
        "Question": "What is the primary purpose of the brain in vertebrates?",
        "Option A": "Coordination of body functions",
        "Option B": "Respiration",
        "Option C": "Digestion",
        "Option D": "Circulation",
        "Correct Option": "A",
        "Explanation": "The brain coordinates sensory input, motor functions, and other vital processes."
    },
    {
        "Q.No": "72",
        "Question": "Which animal group includes species that can fly?",
        "Option A": "Mammals",
        "Option B": "Birds",
        "Option C": "Fish",
        "Option D": "Reptiles",
        "Correct Option": "B",
        "Explanation": "Birds are known for their ability to fly, using wings and feathers."
    },
    {
        "Q.No": "73",
        "Question": "What is the function of the placenta in mammals?",
        "Option A": "Exchange nutrients between the mother and fetus",
        "Option B": "Produce milk",
        "Option C": "Digest food",
        "Option D": "Circulate blood",
        "Correct Option": "A",
        "Explanation": "The placenta allows for the exchange of nutrients and gases between the mother and fetus."
    },
    {
        "Q.No": "74",
        "Question": "Which of the following animals is known for its regenerative abilities?",
        "Option A": "Elephant",
        "Option B": "Dog",
        "Option C": "Salamander",
        "Option D": "Dolphin",
        "Correct Option": "C",
        "Explanation": "Salamanders are known for their ability to regenerate lost limbs."
    },
    {
        "Q.No": "75",
        "Question": "What is the primary function of gills in fish?",
        "Option A": "Absorb oxygen",
        "Option B": "Digestion",
        "Option C": "Circulation",
        "Option D": "Buoyancy",
        "Correct Option": "A",
        "Explanation": "Gills are responsible for extracting oxygen from water."
    },
    {
        "Q.No": "76",
        "Question": "Which of the following is a key characteristic of arthropods?",
        "Option A": "Presence of jointed limbs",
        "Option B": "Presence of tentacles",
        "Option C": "Exoskeleton",
        "Option D": "Both A and C",
        "Correct Option": "D",
        "Explanation": "Arthropods are characterized by jointed limbs and an exoskeleton."
    },
    {
        "Q.No": "77",
        "Question": "What is the main characteristic of sponges?",
        "Option A": "Soft body",
        "Option B": "Lack of tissues and organs",
        "Option C": "Exoskeleton",
        "Option D": "Hair or fur",
        "Correct Option": "B",
        "Explanation": "Sponges lack tissues and organs and are simple, filter-feeding organisms."
    },
    {
        "Q.No": "78",
        "Question": "What is the main purpose of the circulatory system in vertebrates?",
        "Option A": "Transport of oxygen and nutrients",
        "Option B": "Reproduction",
        "Option C": "Sensory input",
        "Option D": "Immune defense",
        "Correct Option": "A",
        "Explanation": "The circulatory system helps in transporting oxygen, nutrients, and waste products."
    },
    {
        "Q.No": "79",
        "Question": "Which animal is an example of an insect?",
        "Option A": "Spider",
        "Option B": "Shark",
        "Option C": "Ant",
        "Option D": "Dolphin",
        "Correct Option": "C",
        "Explanation": "Ants are insects, which are part of the phylum Arthropoda."
    },
    {
        "Q.No": "80",
        "Question": "Which of the following animals is cold-blooded?",
        "Option A": "Frog",
        "Option B": "Dog",
        "Option C": "Cat",
        "Option D": "Human",
        "Correct Option": "A",
        "Explanation": "Frogs are cold-blooded, meaning their body temperature is regulated by the environment."
    },
    {
        "Q.No": "81",
        "Question": "Which of the following is a characteristic of birds?",
        "Option A": "Have scales",
        "Option B": "Have feathers",
        "Option C": "Lay eggs on land",
        "Option D": "Both B and C",
        "Correct Option": "D",
        "Explanation": "Birds have feathers, lay eggs, and are warm-blooded."
    },
    {
        "Q.No": "82",
        "Question": "Which animal is known for its ability to regenerate body parts?",
        "Option A": "Frog",
        "Option B": "Snake",
        "Option C": "Starfish",
        "Option D": "Whale",
        "Correct Option": "C",
        "Explanation": "Starfish can regenerate lost limbs due to their regenerative abilities."
    },
    {
        "Q.No": "83",
        "Question": "What feature distinguishes amphibians from reptiles?",
        "Option A": "Amphibians lay eggs on land",
        "Option B": "Amphibians can breathe through their skin",
        "Option C": "Amphibians have scales",
        "Option D": "Amphibians are cold-blooded",
        "Correct Option": "B",
        "Explanation": "Amphibians can breathe through their skin, which is not the case for reptiles."
    },
    {
        "Q.No": "84",
        "Question": "What is the primary role of the exoskeleton in arthropods?",
        "Option A": "Provide movement",
        "Option B": "Protect the body",
        "Option C": "Aid in digestion",
        "Option D": "Help with respiration",
        "Correct Option": "B",
        "Explanation": "The exoskeleton provides protection and support to arthropods."
    },
    {
        "Q.No": "85",
        "Question": "Which of the following animals has a soft body?",
        "Option A": "Octopus",
        "Option B": "Fish",
        "Option C": "Shark",
        "Option D": "Crocodile",
        "Correct Option": "A",
        "Explanation": "Octopuses have soft bodies without a hard skeleton."
    },
    {
        "Q.No": "86",
        "Question": "What is the main characteristic of fish?",
        "Option A": "Have feathers",
        "Option B": "Live in water and breathe with gills",
        "Option C": "Have jointed limbs",
        "Option D": "Warm-blooded",
        "Correct Option": "B",
        "Explanation": "Fish live in water and rely on gills for respiration."
    },
    {
        "Q.No": "87",
        "Question": "What type of circulatory system do arthropods have?",
        "Option A": "Closed circulatory system",
        "Option B": "Open circulatory system",
        "Option C": "No circulatory system",
        "Option D": "Simple circulatory system",
        "Correct Option": "B",
        "Explanation": "Arthropods have an open circulatory system where blood is pumped into open spaces."
    },
    {
        "Q.No": "88",
        "Question": "What is the main feature of mammals that differentiates them from other animals?",
        "Option A": "Warm-blooded",
        "Option B": "Presence of lungs",
        "Option C": "Presence of hair or fur",
        "Option D": "Lay eggs",
        "Correct Option": "C",
        "Explanation": "Mammals have hair or fur and produce milk to feed their young."
    },
    {
        "Q.No": "89",
        "Question": "Which of the following animals is cold-blooded and lays eggs in water?",
        "Option A": "Fish",
        "Option B": "Frog",
        "Option C": "Lizard",
        "Option D": "Mammal",
        "Correct Option": "B",
        "Explanation": "Frogs lay eggs in water and are cold-blooded, making them amphibians."
    },
    {
        "Q.No": "90",
        "Question": "What feature distinguishes amphibians from reptiles?",
        "Option A": "Amphibians can breathe through their skin",
        "Option B": "Amphibians lay eggs on land",
        "Option C": "Amphibians are cold-blooded",
        "Option D": "Amphibians have scales",
        "Correct Option": "A",
        "Explanation": "Amphibians can absorb oxygen through their skin, a feature reptiles do not have."
    },
    {
        "Q.No": "91",
        "Question": "What is the function of the swim bladder in fish?",
        "Option A": "Buoyancy",
        "Option B": "Circulation",
        "Option C": "Respiration",
        "Option D": "Digestion",
        "Correct Option": "A",
        "Explanation": "The swim bladder helps fish maintain buoyancy and stay afloat in water."
    },
    {
        "Q.No": "92",
        "Question": "What is the primary purpose of tentacles in cephalopods?",
        "Option A": "Movement",
        "Option B": "Grasping and feeding",
        "Option C": "Digestion",
        "Option D": "Communication",
        "Correct Option": "B",
        "Explanation": "Tentacles are used for feeding and grasping objects in cephalopods."
    },
    {
        "Q.No": "93",
        "Question": "Which of the following animals is known for its ability to produce silk?",
        "Option A": "Spider",
        "Option B": "Snail",
        "Option C": "Whale",
        "Option D": "Shark",
        "Correct Option": "A",
        "Explanation": "Spiders produce silk to make webs and capture prey."
    },
    {
        "Q.No": "94",
        "Question": "Which animal is an example of a cartilaginous fish?",
        "Option A": "Shark",
        "Option B": "Dolphin",
        "Option C": "Whale",
        "Option D": "Fish",
        "Correct Option": "A",
        "Explanation": "Sharks are cartilaginous fish, meaning their skeleton is made of cartilage."
    },
    {
        "Q.No": "95",
        "Question": "What is the main characteristic of the phylum Arthropoda?",
        "Option A": "Lack of limbs",
        "Option B": "Exoskeleton and jointed limbs",
        "Option C": "Soft body",
        "Option D": "Radial symmetry",
        "Correct Option": "B",
        "Explanation": "Arthropods have jointed limbs and an exoskeleton for protection and support."
    },
    {
        "Q.No": "96",
        "Question": "What is the primary function of the exoskeleton in arthropods?",
        "Option A": "To protect the body",
        "Option B": "To regulate body temperature",
        "Option C": "To aid in digestion",
        "Option D": "To help with respiration",
        "Correct Option": "A",
        "Explanation": "The exoskeleton serves as protection and provides support to the arthropod's body."
    },
    {
        "Q.No": "97",
        "Question": "What is the primary role of the diaphragm in mammals?",
        "Option A": "Movement",
        "Option B": "Respiration",
        "Option C": "Digestion",
        "Option D": "Circulation",
        "Correct Option": "B",
        "Explanation": "The diaphragm assists with breathing by allowing the lungs to expand."
    },
    {
        "Q.No": "98",
        "Question": "What is a characteristic feature of all mammals?",
        "Option A": "Cold-blooded",
        "Option B": "Presence of scales",
        "Option C": "Hair or fur",
        "Option D": "Lay eggs",
        "Correct Option": "C",
        "Explanation": "Mammals are characterized by the presence of hair or fur and are warm-blooded."
    },
    {
        "Q.No": "99",
        "Question": "Which of the following is true about amphibians?",
        "Option A": "They lay eggs in water",
        "Option B": "They have scales",
        "Option C": "They are warm-blooded",
        "Option D": "They have hair",
        "Correct Option": "A",
        "Explanation": "Amphibians lay eggs in water and can breathe through their skin."
    },
    {
        "Q.No": "100",
        "Question": "Which of the following is a characteristic of mammals?",
        "Option A": "Lays eggs",
        "Option B": "Has scales",
        "Option C": "Has hair or fur",
        "Option D": "Has gills",
        "Correct Option": "C",
        "Explanation": "Mammals are characterized by having hair or fur and are warm-blooded."
    }
      ]
    },
    "Enzyme Study": {
      color: "#a0522d",
      icon: "🧪",
      questions: [
        {
        "Q.No": "1",
        "Question": "What is the primary function of enzymes?",
        "Option A": "To act as catalysts",
        "Option B": "To produce energy",
        "Option C": "To store genetic information",
        "Option D": "To transport molecules",
        "Correct Option": "A",
        "Explanation": "Enzymes act as biological catalysts, speeding up chemical reactions."
    },
    {
        "Q.No": "2",
        "Question": "What is the active site of an enzyme?",
        "Option A": "The location where enzymes are produced",
        "Option B": "The region that binds to the substrate",
        "Option C": "The site of energy release",
        "Option D": "The part that gives enzymes their structure",
        "Correct Option": "B",
        "Explanation": "The active site binds to the substrate and facilitates the chemical reaction."
    },
    {
        "Q.No": "3",
        "Question": "Which model explains enzyme-substrate interaction?",
        "Option A": "Lock and Key model",
        "Option B": "Fluid Mosaic model",
        "Option C": "Endosymbiotic model",
        "Option D": "Kinetic model",
        "Correct Option": "A",
        "Explanation": "The Lock and Key model suggests that the enzyme’s active site is specifically shaped for a particular substrate."
    },
    {
        "Q.No": "4",
        "Question": "What is the main characteristic of an enzyme?",
        "Option A": "It is consumed during the reaction",
        "Option B": "It changes the direction of the reaction",
        "Option C": "It increases the reaction rate without being consumed",
        "Option D": "It increases the activation energy",
        "Correct Option": "C",
        "Explanation": "Enzymes speed up reactions without being consumed in the process."
    },
    {
        "Q.No": "5",
        "Question": "What is the enzyme that breaks down hydrogen peroxide?",
        "Option A": "Amylase",
        "Option B": "Catalase",
        "Option C": "Lipase",
        "Option D": "Lactase",
        "Correct Option": "B",
        "Explanation": "Catalase breaks down hydrogen peroxide into water and oxygen."
    },
    {
        "Q.No": "6",
        "Question": "Which factor does NOT affect enzyme activity?",
        "Option A": "Temperature",
        "Option B": "pH level",
        "Option C": "Substrate concentration",
        "Option D": "Color",
        "Correct Option": "D",
        "Explanation": "Enzyme activity is influenced by temperature, pH, and substrate concentration."
    },
    {
        "Q.No": "7",
        "Question": "What is the term for the process in which an enzyme loses its shape and function?",
        "Option A": "Denaturation",
        "Option B": "Activation",
        "Option C": "Inhibition",
        "Option D": "Hydrolysis",
        "Correct Option": "A",
        "Explanation": "Denaturation refers to the loss of an enzyme’s functional shape, rendering it inactive."
    },
    {
        "Q.No": "8",
        "Question": "What type of macromolecule are enzymes?",
        "Option A": "Nucleic acids",
        "Option B": "Carbohydrates",
        "Option C": "Proteins",
        "Option D": "Lipids",
        "Correct Option": "C",
        "Explanation": "Enzymes are proteins composed of amino acids."
    },
    {
        "Q.No": "9",
        "Question": "What does an enzyme do to the activation energy of a reaction?",
        "Option A": "Increases it",
        "Option B": "Decreases it",
        "Option C": "Neutralizes it",
        "Option D": "Eliminates it",
        "Correct Option": "B",
        "Explanation": "Enzymes lower the activation energy of a reaction, making it easier for the reaction to occur."
    },
    {
        "Q.No": "10",
        "Question": "Which of the following is an example of an enzyme?",
        "Option A": "Glucose",
        "Option B": "Amylase",
        "Option C": "Hemoglobin",
        "Option D": "DNA",
        "Correct Option": "B",
        "Explanation": "Amylase is an enzyme that breaks down starch into sugar molecules."
    },
    {
        "Q.No": "11",
        "Question": "What is the role of coenzymes in enzyme activity?",
        "Option A": "They are inhibitors",
        "Option B": "They bind to the active site",
        "Option C": "They assist the enzyme in catalysis",
        "Option D": "They provide energy",
        "Correct Option": "C",
        "Explanation": "Coenzymes assist enzymes in catalyzing reactions by binding to the enzyme or substrate."
    },
    {
        "Q.No": "12",
        "Question": "What happens to the rate of an enzyme-catalyzed reaction as substrate concentration increases?",
        "Option A": "It increases indefinitely",
        "Option B": "It decreases",
        "Option C": "It reaches a maximum",
        "Option D": "It stops",
        "Correct Option": "C",
        "Explanation": "The reaction rate increases with substrate concentration until it reaches a maximum rate (saturation point)."
    },
    {
        "Q.No": "13",
        "Question": "What is the enzyme involved in breaking down lactose?",
        "Option A": "Lactase",
        "Option B": "Sucrase",
        "Option C": "Maltase",
        "Option D": "Amylase",
        "Correct Option": "A",
        "Explanation": "Lactase breaks down lactose into glucose and galactose."
    },
    {
        "Q.No": "14",
        "Question": "What is the term for a molecule that binds to an enzyme and prevents its activity?",
        "Option A": "Substrate",
        "Option B": "Inhibitor",
        "Option C": "Coenzyme",
        "Option D": "Activator",
        "Correct Option": "B",
        "Explanation": "Inhibitors bind to enzymes and reduce or stop their activity."
    },
    {
        "Q.No": "15",
        "Question": "Which of the following conditions can denature an enzyme?",
        "Option A": "High temperature",
        "Option B": "Optimal pH",
        "Option C": "Low substrate concentration",
        "Option D": "Low temperature",
        "Correct Option": "A",
        "Explanation": "High temperature can cause enzymes to lose their shape and denature."
    },
    {
        "Q.No": "16",
        "Question": "What is the role of an enzyme in metabolism?",
        "Option A": "It stores energy",
        "Option B": "It breaks down waste products",
        "Option C": "It catalyzes biochemical reactions",
        "Option D": "It transports molecules",
        "Correct Option": "C",
        "Explanation": "Enzymes catalyze the biochemical reactions that make up metabolism."
    },
    {
        "Q.No": "17",
        "Question": "Which type of enzyme breaks down proteins?",
        "Option A": "Amylase",
        "Option B": "Protease",
        "Option C": "Lipase",
        "Option D": "Nuclease",
        "Correct Option": "B",
        "Explanation": "Proteases break down proteins into amino acids."
    },
    {
        "Q.No": "18",
        "Question": "Which of the following is NOT a type of enzyme inhibition?",
        "Option A": "Competitive inhibition",
        "Option B": "Non-competitive inhibition",
        "Option C": "Uncompetitive inhibition",
        "Option D": "Substrate inhibition",
        "Correct Option": "D",
        "Explanation": "Substrate inhibition is not a recognized type of enzyme inhibition."
    },
    {
        "Q.No": "19",
        "Question": "What is the function of the enzyme amylase?",
        "Option A": "Breaks down starch",
        "Option B": "Breaks down proteins",
        "Option C": "Breaks down fats",
        "Option D": "Breaks down nucleic acids",
        "Correct Option": "A",
        "Explanation": "Amylase is an enzyme that breaks down starch into sugars."
    },
    {
        "Q.No": "20",
        "Question": "Which factor can affect enzyme structure and function?",
        "Option A": "pH",
        "Option B": "Temperature",
        "Option C": "Ionic strength",
        "Option D": "All of the above",
        "Correct Option": "D",
        "Explanation": "All these factors can impact enzyme structure and its ability to catalyze reactions."
    },
    {
        "Q.No": "21",
        "Question": "What is the effect of temperature on enzyme activity?",
        "Option A": "Low temperatures decrease activity",
        "Option B": "High temperatures increase activity",
        "Option C": "Temperatures have no effect",
        "Option D": "Low temperatures increase activity",
        "Correct Option": "A",
        "Explanation": "Low temperatures slow down enzyme activity, while high temperatures can denature enzymes."
    },
    {
        "Q.No": "22",
        "Question": "What is the optimal pH for most human enzymes?",
        "Option A": "2-Jan",
        "Option B": "8-Jul",
        "Option C": "10-Sep",
        "Option D": "5-Apr",
        "Correct Option": "B",
        "Explanation": "Most human enzymes have optimal activity at a pH range of 7-8."
    },
    {
        "Q.No": "23",
        "Question": "What happens when an enzyme is exposed to a non-optimal pH?",
        "Option A": "Its activity increases",
        "Option B": "Its activity decreases",
        "Option C": "It speeds up reactions",
        "Option D": "It changes shape and loses activity",
        "Correct Option": "D",
        "Explanation": "Non-optimal pH levels can cause enzymes to lose their shape and activity."
    },
    {
        "Q.No": "24",
        "Question": "What is an enzyme-substrate complex?",
        "Option A": "The enzyme in its inactive form",
        "Option B": "The substrate before the reaction",
        "Option C": "The enzyme bound to the substrate",
        "Option D": "The product of the reaction",
        "Correct Option": "C",
        "Explanation": "An enzyme-substrate complex forms when an enzyme binds to its substrate."
    },
    {
        "Q.No": "25",
        "Question": "What is the effect of enzyme concentration on reaction rate?",
        "Option A": "No effect",
        "Option B": "Increases the rate up to a limit",
        "Option C": "Decreases the rate",
        "Option D": "Stops the reaction",
        "Correct Option": "B",
        "Explanation": "Increasing enzyme concentration increases the reaction rate, but only up to a certain point."
    },
    {
        "Q.No": "26",
        "Question": "Which enzyme is responsible for the breakdown of fats?",
        "Option A": "Amylase",
        "Option B": "Protease",
        "Option C": "Lipase",
        "Option D": "Nuclease",
        "Correct Option": "C",
        "Explanation": "Lipase breaks down fats into fatty acids and glycerol."
    },
    {
        "Q.No": "27",
        "Question": "What is an enzyme inhibitor?",
        "Option A": "A substance that speeds up a reaction",
        "Option B": "A substance that decreases the activation energy",
        "Option C": "A substance that blocks the enzyme's active site",
        "Option D": "A substance that promotes enzyme activity",
        "Correct Option": "C",
        "Explanation": "An enzyme inhibitor blocks the active site or alters the enzyme's shape to prevent activity."
    },
    {
        "Q.No": "28",
        "Question": "What is a cofactor?",
        "Option A": "A molecule that enhances enzyme activity",
        "Option B": "A type of enzyme inhibitor",
        "Option C": "A protein that carries energy",
        "Option D": "A product of an enzyme reaction",
        "Correct Option": "A",
        "Explanation": "A cofactor is a molecule that assists an enzyme in catalyzing a reaction."
    },
    {
        "Q.No": "29",
        "Question": "What happens in competitive inhibition?",
        "Option A": "The inhibitor binds to the active site",
        "Option B": "The inhibitor binds to the enzyme’s allosteric site",
        "Option C": "The inhibitor increases enzyme activity",
        "Option D": "The enzyme’s active site changes shape",
        "Correct Option": "A",
        "Explanation": "In competitive inhibition, the inhibitor competes with the substrate for the enzyme’s active site."
    },
    {
        "Q.No": "30",
        "Question": "What is the function of the enzyme catalase?",
        "Option A": "Breaks down hydrogen peroxide",
        "Option B": "Breaks down starch",
        "Option C": "Breaks down lipids",
        "Option D": "Breaks down proteins",
        "Correct Option": "A",
        "Explanation": "Catalase breaks down hydrogen peroxide into water and oxygen."
    },
    {
        "Q.No": "31",
        "Question": "What type of enzyme is involved in DNA replication?",
        "Option A": "Ligase",
        "Option B": "Polymerase",
        "Option C": "Amylase",
        "Option D": "Protease",
        "Correct Option": "B",
        "Explanation": "DNA polymerase is an enzyme that synthesizes new DNA strands during replication."
    },
    {
        "Q.No": "32",
        "Question": "Which type of enzyme is used in blood clotting?",
        "Option A": "Ligase",
        "Option B": "Protease",
        "Option C": "Polymerase",
        "Option D": "Thrombin",
        "Correct Option": "D",
        "Explanation": "Thrombin is an enzyme involved in blood clotting."
    },
    {
        "Q.No": "33",
        "Question": "Which of the following is an example of allosteric regulation of enzymes?",
        "Option A": "A substrate binding to the enzyme’s active site",
        "Option B": "A cofactor binding to the enzyme’s active site",
        "Option C": "An inhibitor binding to the enzyme’s allosteric site",
        "Option D": "An enzyme binding to its product",
        "Correct Option": "C",
        "Explanation": "In allosteric regulation, molecules bind to sites other than the active site to regulate enzyme activity."
    },
    {
        "Q.No": "34",
        "Question": "Which enzyme is involved in breaking down cellulose in some herbivores?",
        "Option A": "Amylase",
        "Option B": "Cellulase",
        "Option C": "Lactase",
        "Option D": "Lipase",
        "Correct Option": "B",
        "Explanation": "Cellulase is an enzyme that breaks down cellulose in certain herbivores and microorganisms."
    },
    {
        "Q.No": "35",
        "Question": "Which enzyme is used in the digestion of proteins?",
        "Option A": "Amylase",
        "Option B": "Protease",
        "Option C": "Lipase",
        "Option D": "Lactase",
        "Correct Option": "B",
        "Explanation": "Protease breaks down proteins into amino acids."
    },
    {
        "Q.No": "36",
        "Question": "What is the term for the substance upon which an enzyme acts?",
        "Option A": "Product",
        "Option B": "Coenzyme",
        "Option C": "Substrate",
        "Option D": "Inhibitor",
        "Correct Option": "C",
        "Explanation": "The substrate is the molecule that binds to the enzyme and is transformed during the reaction."
    },
    {
        "Q.No": "37",
        "Question": "What does enzyme specificity refer to?",
        "Option A": "An enzyme can act on any molecule",
        "Option B": "An enzyme can only act on specific substrates",
        "Option C": "An enzyme is unaffected by inhibitors",
        "Option D": "An enzyme can catalyze any type of reaction",
        "Correct Option": "B",
        "Explanation": "Enzyme specificity means that each enzyme can only catalyze specific reactions with certain substrates."
    },
    {
        "Q.No": "38",
        "Question": "What is the function of pepsin?",
        "Option A": "Breaks down proteins in the stomach",
        "Option B": "Breaks down starch in the mouth",
        "Option C": "Breaks down fats in the intestines",
        "Option D": "Breaks down nucleic acids in the liver",
        "Correct Option": "A",
        "Explanation": "Pepsin is an enzyme in the stomach that breaks down proteins into smaller peptides."
    },
    {
        "Q.No": "39",
        "Question": "What effect does a non-competitive inhibitor have on enzyme activity?",
        "Option A": "It increases activity",
        "Option B": "It prevents the enzyme from forming an enzyme-substrate complex",
        "Option C": "It decreases enzyme activity",
        "Option D": "It has no effect",
        "Correct Option": "C",
        "Explanation": "Non-competitive inhibitors bind to an enzyme at a site other than the active site and reduce its activity."
    },
    {
        "Q.No": "40",
        "Question": "How do enzymes achieve specificity for their substrates?",
        "Option A": "By having a complementary shape to the substrate",
        "Option B": "By having a similar charge to the substrate",
        "Option C": "By interacting with any molecule",
        "Option D": "By altering the substrate's chemical structure",
        "Correct Option": "A",
        "Explanation": "Enzymes are specific to their substrates because their active sites have a complementary shape to the substrate."
    },
    {
        "Q.No": "41",
        "Question": "What is the role of enzyme inhibitors in medicine?",
        "Option A": "To increase enzyme activity",
        "Option B": "To prevent enzyme activity in diseases",
        "Option C": "To digest drugs",
        "Option D": "To store energy",
        "Correct Option": "B",
        "Explanation": "Enzyme inhibitors are used in medicine to inhibit enzymes involved in disease processes."
    },
    {
        "Q.No": "42",
        "Question": "What happens when an enzyme is exposed to extreme pH levels?",
        "Option A": "It becomes more active",
        "Option B": "It becomes denatured",
        "Option C": "It becomes more efficient",
        "Option D": "It works better",
        "Correct Option": "B",
        "Explanation": "Extreme pH levels can cause enzymes to denature, losing their activity."
    },
    {
        "Q.No": "43",
        "Question": "What is the effect of enzyme concentration on reaction rate?",
        "Option A": "No effect",
        "Option B": "Increases reaction rate",
        "Option C": "Decreases reaction rate",
        "Option D": "Stops the reaction",
        "Correct Option": "B",
        "Explanation": "Enzyme concentration increases the reaction rate, up to a saturation point."
    },
    {
        "Q.No": "44",
        "Question": "Which of the following is a coenzyme?",
        "Option A": "Vitamin C",
        "Option B": "Enzyme",
        "Option C": "Substrate",
        "Option D": "Product",
        "Correct Option": "A",
        "Explanation": "Coenzymes are small organic molecules, such as vitamins, that assist enzymes in catalysis."
    },
    {
        "Q.No": "45",
        "Question": "What is an allosteric site on an enzyme?",
        "Option A": "The active site where the substrate binds",
        "Option B": "A site that binds to the coenzyme",
        "Option C": "A regulatory site where molecules can increase or decrease enzyme activity",
        "Option D": "The product site",
        "Correct Option": "C",
        "Explanation": "Allosteric sites are regulatory sites where molecules can bind and alter enzyme activity."
    },
    {
        "Q.No": "46",
        "Question": "Which of the following factors increases the rate of enzyme-catalyzed reactions?",
        "Option A": "Decreasing temperature",
        "Option B": "Decreasing substrate concentration",
        "Option C": "Increasing enzyme concentration",
        "Option D": "Decreasing enzyme concentration",
        "Correct Option": "C",
        "Explanation": "Increasing enzyme concentration can increase the rate of enzyme-catalyzed reactions."
    },
    {
        "Q.No": "47",
        "Question": "What is the function of enzymes in digestion?",
        "Option A": "To break down food into smaller molecules",
        "Option B": "To absorb nutrients",
        "Option C": "To transport molecules across cell membranes",
        "Option D": "To store energy",
        "Correct Option": "A",
        "Explanation": "Enzymes in digestion break down food into smaller molecules that can be absorbed by the body."
    },
    {
        "Q.No": "48",
        "Question": "Which enzyme is responsible for digesting carbohydrates?",
        "Option A": "Amylase",
        "Option B": "Pepsin",
        "Option C": "Trypsin",
        "Option D": "Lipase",
        "Correct Option": "A",
        "Explanation": "Amylase breaks down carbohydrates, such as starch, into simpler sugars."
    },
    {
        "Q.No": "49",
        "Question": "What is the effect of increasing the substrate concentration on an enzyme-catalyzed reaction?",
        "Option A": "It decreases the reaction rate",
        "Option B": "It increases the reaction rate until the enzyme is saturated",
        "Option C": "It has no effect",
        "Option D": "It slows down the reaction",
        "Correct Option": "B",
        "Explanation": "Increasing substrate concentration increases the reaction rate until the enzyme reaches its maximum capacity."
    },
    {
        "Q.No": "50",
        "Question": "What type of inhibitor binds to the enzyme’s active site?",
        "Option A": "Non-competitive inhibitor",
        "Option B": "Competitive inhibitor",
        "Option C": "Uncompetitive inhibitor",
        "Option D": "Allosteric inhibitor",
        "Correct Option": "B",
        "Explanation": "Competitive inhibitors bind to the enzyme's active site, competing with the substrate."
    },
    {
        "Q.No": "51",
        "Question": "Which enzyme is involved in the breakdown of DNA?",
        "Option A": "Amylase",
        "Option B": "Protease",
        "Option C": "Nuclease",
        "Option D": "Lipase",
        "Correct Option": "C",
        "Explanation": "Nuclease breaks down nucleic acids like DNA and RNA."
    },
    {
        "Q.No": "52",
        "Question": "What is the purpose of adding a coenzyme to an enzyme-catalyzed reaction?",
        "Option A": "To increase the reaction temperature",
        "Option B": "To provide additional energy",
        "Option C": "To assist the enzyme in catalysis",
        "Option D": "To increase the substrate concentration",
        "Correct Option": "C",
        "Explanation": "Coenzymes help enzymes catalyze reactions by assisting in substrate binding or altering enzyme activity."
    },
    {
        "Q.No": "53",
        "Question": "Which of the following is NOT a factor that affects enzyme activity?",
        "Option A": "Temperature",
        "Option B": "pH",
        "Option C": "Substrate concentration",
        "Option D": "Color",
        "Correct Option": "D",
        "Explanation": "Color does not affect enzyme activity, whereas temperature, pH, and substrate concentration do."
    },
    {
        "Q.No": "54",
        "Question": "Which enzyme is responsible for the breakdown of fats?",
        "Option A": "Amylase",
        "Option B": "Protease",
        "Option C": "Lipase",
        "Option D": "Lactase",
        "Correct Option": "C",
        "Explanation": "Lipase is responsible for breaking down fats (lipids) into fatty acids and glycerol."
    },
    {
        "Q.No": "55",
        "Question": "What is an enzyme activator?",
        "Option A": "A molecule that binds to an enzyme and decreases its activity",
        "Option B": "A molecule that binds to an enzyme and increases its activity",
        "Option C": "A molecule that destroys the enzyme",
        "Option D": "A molecule that inhibits the enzyme",
        "Correct Option": "B",
        "Explanation": "Enzyme activators increase the activity of enzymes by binding to them."
    },
    {
        "Q.No": "56",
        "Question": "Which type of enzyme breaks down nucleic acids?",
        "Option A": "Protease",
        "Option B": "Amylase",
        "Option C": "Nuclease",
        "Option D": "Lipase",
        "Correct Option": "C",
        "Explanation": "Nuclease enzymes break down nucleic acids like DNA and RNA."
    },
    {
        "Q.No": "57",
        "Question": "What happens when an enzyme binds to its substrate?",
        "Option A": "The substrate is destroyed",
        "Option B": "The enzyme undergoes a conformational change",
        "Option C": "The substrate is released unchanged",
        "Option D": "The enzyme loses energy",
        "Correct Option": "B",
        "Explanation": "The enzyme undergoes a conformational change when it binds to its substrate, facilitating the reaction."
    },
    {
        "Q.No": "58",
        "Question": "What is the effect of high enzyme concentration on enzyme-catalyzed reactions?",
        "Option A": "It decreases the reaction rate",
        "Option B": "It increases the reaction rate until saturation is reached",
        "Option C": "It has no effect",
        "Option D": "It stops the reaction",
        "Correct Option": "B",
        "Explanation": "High enzyme concentration increases the reaction rate until the enzyme becomes saturated with substrate."
    },
    {
        "Q.No": "59",
        "Question": "Which of the following statements about enzymes is correct?",
        "Option A": "They increase the activation energy",
        "Option B": "They are consumed in the reaction",
        "Option C": "They act as catalysts",
        "Option D": "They change the nature of the reaction",
        "Correct Option": "C",
        "Explanation": "Enzymes act as catalysts, speeding up reactions without being consumed."
    },
    {
        "Q.No": "60",
        "Question": "What does the Lock and Key model describe in enzyme activity?",
        "Option A": "The interaction between enzyme and product",
        "Option B": "The interaction between enzyme and substrate",
        "Option C": "The interaction between enzyme and coenzyme",
        "Option D": "The enzyme's activation energy",
        "Correct Option": "B",
        "Explanation": "The Lock and Key model explains how the enzyme’s active site is specifically shaped for its substrate."
    },
    {
        "Q.No": "61",
        "Question": "What is the primary function of digestive enzymes?",
        "Option A": "To break down food molecules into simpler molecules",
        "Option B": "To transport nutrients",
        "Option C": "To digest vitamins",
        "Option D": "To store energy",
        "Correct Option": "A",
        "Explanation": "Digestive enzymes break down food into simpler molecules for absorption by the body."
    },
    {
        "Q.No": "62",
        "Question": "Which enzyme is used in the breakdown of starch?",
        "Option A": "Protease",
        "Option B": "Amylase",
        "Option C": "Lipase",
        "Option D": "Lactase",
        "Correct Option": "B",
        "Explanation": "Amylase is the enzyme responsible for breaking down starch into simpler sugars."
    },
    {
        "Q.No": "63",
        "Question": "What is the function of the enzyme helicase?",
        "Option A": "To break down proteins",
        "Option B": "To unwind the DNA helix",
        "Option C": "To synthesize RNA",
        "Option D": "To break down fats",
        "Correct Option": "B",
        "Explanation": "Helicase unwinds the DNA double helix during replication."
    },
    {
        "Q.No": "64",
        "Question": "Which factor can lead to enzyme denaturation?",
        "Option A": "Low temperature",
        "Option B": "High substrate concentration",
        "Option C": "Extreme pH",
        "Option D": "High enzyme concentration",
        "Correct Option": "C",
        "Explanation": "Extreme pH levels can lead to the denaturation of enzymes."
    },
    {
        "Q.No": "65",
        "Question": "What is the role of trypsin in the digestive system?",
        "Option A": "To break down fats",
        "Option B": "To break down carbohydrates",
        "Option C": "To break down proteins",
        "Option D": "To neutralize stomach acid",
        "Correct Option": "C",
        "Explanation": "Trypsin is a protease enzyme that breaks down proteins in the small intestine."
    },
    {
        "Q.No": "66",
        "Question": "How do enzymes achieve specificity for substrates?",
        "Option A": "By changing their shape",
        "Option B": "By binding with any molecule",
        "Option C": "By binding to specific substrates only",
        "Option D": "By catalyzing all reactions",
        "Correct Option": "C",
        "Explanation": "Enzymes have an active site that is specifically shaped to bind only with certain substrates."
    },
    {
        "Q.No": "67",
        "Question": "What type of enzyme is involved in the digestion of proteins?",
        "Option A": "Amylase",
        "Option B": "Lipase",
        "Option C": "Protease",
        "Option D": "Lactase",
        "Correct Option": "C",
        "Explanation": "Protease breaks down proteins into smaller peptides and amino acids."
    },
    {
        "Q.No": "68",
        "Question": "What is the function of the enzyme RNA polymerase?",
        "Option A": "To replicate DNA",
        "Option B": "To synthesize RNA",
        "Option C": "To digest proteins",
        "Option D": "To synthesize proteins",
        "Correct Option": "B",
        "Explanation": "RNA polymerase synthesizes RNA from a DNA template during transcription."
    },
    {
        "Q.No": "69",
        "Question": "What is the effect of competitive inhibitors on enzyme activity?",
        "Option A": "They increase activity",
        "Option B": "They prevent the enzyme from forming an enzyme-substrate complex",
        "Option C": "They have no effect",
        "Option D": "They decrease activity",
        "Correct Option": "B",
        "Explanation": "Competitive inhibitors compete with the substrate for the enzyme’s active site."
    },
    {
        "Q.No": "70",
        "Question": "What happens when an enzyme is exposed to high heat?",
        "Option A": "It becomes more efficient",
        "Option B": "It changes shape and loses activity",
        "Option C": "It becomes activated",
        "Option D": "It increases reaction rates",
        "Correct Option": "B",
        "Explanation": "High heat can denature an enzyme, changing its shape and rendering it inactive."
    },
    {
        "Q.No": "71",
        "Question": "What is the role of enzyme cofactors?",
        "Option A": "To break down molecules",
        "Option B": "To increase enzyme specificity",
        "Option C": "To assist enzymes in catalyzing reactions",
        "Option D": "To produce energy",
        "Correct Option": "C",
        "Explanation": "Cofactors are non-protein molecules that assist enzymes in catalyzing reactions."
    },
    {
        "Q.No": "72",
        "Question": "Which of the following is an example of an enzyme-coenzyme interaction?",
        "Option A": "Coenzyme A with acetyl-CoA",
        "Option B": "Hemoglobin with oxygen",
        "Option C": "Amylase with starch",
        "Option D": "Catalase with hydrogen peroxide",
        "Correct Option": "A",
        "Explanation": "Coenzyme A helps enzymes in metabolic processes like the breakdown of fatty acids."
    },
    {
        "Q.No": "73",
        "Question": "What is the role of the enzyme polymerase in DNA replication?",
        "Option A": "To unwind the DNA strands",
        "Option B": "To catalyze the synthesis of new DNA strands",
        "Option C": "To break down RNA",
        "Option D": "To create RNA from DNA",
        "Correct Option": "B",
        "Explanation": "DNA polymerase catalyzes the synthesis of new DNA strands during replication."
    },
    {
        "Q.No": "74",
        "Question": "What is the effect of an enzyme inhibitor on an enzyme-catalyzed reaction?",
        "Option A": "It increases the reaction rate",
        "Option B": "It decreases the reaction rate",
        "Option C": "It has no effect",
        "Option D": "It speeds up the reaction",
        "Correct Option": "B",
        "Explanation": "Enzyme inhibitors decrease the rate of enzyme-catalyzed reactions by interfering with enzyme activity."
    },
    {
        "Q.No": "75",
        "Question": "What is the primary function of coenzymes in enzymatic reactions?",
        "Option A": "To speed up reactions",
        "Option B": "To bind with the enzyme and assist in catalysis",
        "Option C": "To break down substrates",
        "Option D": "To increase substrate concentration",
        "Correct Option": "B",
        "Explanation": "Coenzymes help enzymes in catalyzing reactions by binding with them or the substrate."
    },
    {
        "Q.No": "76",
        "Question": "What is the effect of increasing substrate concentration on enzyme activity?",
        "Option A": "It decreases enzyme activity",
        "Option B": "It increases enzyme activity",
        "Option C": "It has no effect",
        "Option D": "It causes enzyme denaturation",
        "Correct Option": "B",
        "Explanation": "Increasing substrate concentration increases enzyme activity until the enzyme reaches saturation."
    },
    {
        "Q.No": "77",
        "Question": "What is the role of the enzyme DNA ligase?",
        "Option A": "To break down nucleic acids",
        "Option B": "To connect DNA fragments during replication",
        "Option C": "To synthesize RNA",
        "Option D": "To replicate RNA",
        "Correct Option": "B",
        "Explanation": "DNA ligase connects fragments of DNA during replication and repair."
    },
    {
        "Q.No": "78",
        "Question": "What is the effect of temperature on enzyme function?",
        "Option A": "Low temperatures increase activity",
        "Option B": "High temperatures denature the enzyme",
        "Option C": "High temperatures increase activity",
        "Option D": "Low temperatures denature the enzyme",
        "Correct Option": "B",
        "Explanation": "High temperatures can denature enzymes, rendering them inactive."
    },
    {
        "Q.No": "79",
        "Question": "What is the function of the enzyme lipase?",
        "Option A": "To break down carbohydrates",
        "Option B": "To break down lipids",
        "Option C": "To break down proteins",
        "Option D": "To break down nucleic acids",
        "Correct Option": "B",
        "Explanation": "Lipase is responsible for breaking down fats into fatty acids and glycerol."
    },
    {
        "Q.No": "80",
        "Question": "What is an example of a non-protein enzyme?",
        "Option A": "DNA polymerase",
        "Option B": "Catalase",
        "Option C": "Ribosome",
        "Option D": "Ribozymes",
        "Correct Option": "D",
        "Explanation": "Ribozymes are RNA molecules with enzyme-like properties."
    },
    {
        "Q.No": "81",
        "Question": "What does the term \"\"enzyme specificity\"\" mean?",
        "Option A": "Enzymes can catalyze any reaction",
        "Option B": "Enzymes work on a specific type of substrate",
        "Option C": "Enzymes have multiple active sites",
        "Option D": "Enzymes are not affected by inhibitors",
        "Correct Option": "B",
        "Explanation": "Enzyme specificity refers to the ability of enzymes to catalyze reactions with specific substrates."
    },
    {
        "Q.No": "82",
        "Question": "What is the primary role of the enzyme amylase?",
        "Option A": "To break down starch",
        "Option B": "To break down proteins",
        "Option C": "To break down fats",
        "Option D": "To break down nucleic acids",
        "Correct Option": "A",
        "Explanation": "Amylase breaks down starch into simpler sugars like maltose."
    },
    {
        "Q.No": "83",
        "Question": "Which of the following is the function of the enzyme hexokinase?",
        "Option A": "To synthesize glucose",
        "Option B": "To break down glucose",
        "Option C": "To phosphorylate glucose",
        "Option D": "To break down starch",
        "Correct Option": "C",
        "Explanation": "Hexokinase catalyzes the phosphorylation of glucose, which is the first step in glycolysis."
    },
    {
        "Q.No": "84",
        "Question": "What is the term for an enzyme that is composed of both a protein and a cofactor?",
        "Option A": "Apoenzyme",
        "Option B": "Holoenzyme",
        "Option C": "Substrate",
        "Option D": "Product",
        "Correct Option": "B",
        "Explanation": "A holoenzyme is an enzyme with both a protein portion and a cofactor."
    },
    {
        "Q.No": "85",
        "Question": "Which type of enzyme catalyzes the conversion of hydrogen peroxide into water and oxygen?",
        "Option A": "Protease",
        "Option B": "Lipase",
        "Option C": "Catalase",
        "Option D": "Amylase",
        "Correct Option": "C",
        "Explanation": "Catalase breaks down hydrogen peroxide into water and oxygen."
    },
    {
        "Q.No": "86",
        "Question": "What is the role of the enzyme sucrase?",
        "Option A": "To break down proteins",
        "Option B": "To break down lipids",
        "Option C": "To break down sucrose",
        "Option D": "To break down starch",
        "Correct Option": "C",
        "Explanation": "Sucrase breaks down sucrose into glucose and fructose."
    },
    {
        "Q.No": "87",
        "Question": "What happens when an enzyme binds to an allosteric site?",
        "Option A": "The enzyme becomes denatured",
        "Option B": "The enzyme's activity is enhanced or reduced",
        "Option C": "The substrate binds to the enzyme",
        "Option D": "The enzyme releases its product",
        "Correct Option": "B",
        "Explanation": "Binding to the allosteric site can regulate the enzyme's activity by increasing or decreasing its function."
    },
    {
        "Q.No": "88",
        "Question": "What is the role of the enzyme ATP synthase?",
        "Option A": "To break down glucose",
        "Option B": "To catalyze the formation of ATP from ADP and phosphate",
        "Option C": "To break down fatty acids",
        "Option D": "To break down proteins",
        "Correct Option": "B",
        "Explanation": "ATP synthase catalyzes the formation of ATP from ADP and phosphate during cellular respiration."
    },
    {
        "Q.No": "89",
        "Question": "Which of the following statements is true about enzymes?",
        "Option A": "They increase the activation energy of reactions",
        "Option B": "They are consumed in reactions",
        "Option C": "They can catalyze a specific type of reaction",
        "Option D": "They work on any molecule",
        "Correct Option": "C",
        "Explanation": "Enzymes are specific to particular types of reactions and substrates."
    },
    {
        "Q.No": "90",
        "Question": "What type of enzyme is involved in DNA replication?",
        "Option A": "Ligase",
        "Option B": "Helicase",
        "Option C": "Polymerase",
        "Option D": "Amylase",
        "Correct Option": "C",
        "Explanation": "DNA polymerase synthesizes new DNA strands during replication."
    },
    {
        "Q.No": "91",
        "Question": "What is the role of an enzyme in a biochemical pathway?",
        "Option A": "To regulate the pathway's rate",
        "Option B": "To stop the pathway",
        "Option C": "To convert energy",
        "Option D": "To store substrate",
        "Correct Option": "A",
        "Explanation": "Enzymes regulate biochemical pathways by controlling reaction rates."
    },
    {
        "Q.No": "92",
        "Question": "What is a major characteristic of enzymes?",
        "Option A": "They act as catalysts",
        "Option B": "They increase the energy of reactions",
        "Option C": "They are used in energy production",
        "Option D": "They are consumed in reactions",
        "Correct Option": "A",
        "Explanation": "Enzymes are biological catalysts, speeding up reactions without being consumed."
    },
    {
        "Q.No": "93",
        "Question": "Which of the following is a factor that can decrease enzyme activity?",
        "Option A": "Optimal pH",
        "Option B": "Low temperature",
        "Option C": "High substrate concentration",
        "Option D": "High pH",
        "Correct Option": "D",
        "Explanation": "High pH can denature an enzyme, decreasing its activity."
    },
    {
        "Q.No": "94",
        "Question": "What does enzyme saturation refer to?",
        "Option A": "The point at which an enzyme is denatured",
        "Option B": "The point at which substrate concentration is low",
        "Option C": "The point at which enzyme concentration is high",
        "Option D": "The point at which all active sites are occupied by substrates",
        "Correct Option": "D",
        "Explanation": "Enzyme saturation occurs when all the enzyme's active sites are occupied by substrates."
    },
    {
        "Q.No": "95",
        "Question": "Which enzyme is involved in the digestion of proteins in the stomach?",
        "Option A": "Amylase",
        "Option B": "Trypsin",
        "Option C": "Pepsin",
        "Option D": "Lipase",
        "Correct Option": "C",
        "Explanation": "Pepsin is the enzyme responsible for digesting proteins in the stomach."
    },
    {
        "Q.No": "96",
        "Question": "What is the function of the enzyme acetylcholinesterase?",
        "Option A": "To break down acetylcholine",
        "Option B": "To synthesize acetylcholine",
        "Option C": "To break down fats",
        "Option D": "To break down proteins",
        "Correct Option": "A",
        "Explanation": "Acetylcholinesterase breaks down acetylcholine in the synaptic cleft."
    },
    {
        "Q.No": "97",
        "Question": "What is the role of the enzyme dehydrogenase?",
        "Option A": "To add hydrogen atoms to molecules",
        "Option B": "To remove hydrogen atoms from molecules",
        "Option C": "To transfer electrons",
        "Option D": "To transfer amino acids",
        "Correct Option": "B",
        "Explanation": "Dehydrogenase enzymes remove hydrogen atoms from molecules during oxidation reactions."
    },
    {
        "Q.No": "98",
        "Question": "Which enzyme catalyzes the conversion of pyruvate to lactate?",
        "Option A": "Lactate dehydrogenase",
        "Option B": "Pyruvate kinase",
        "Option C": "Phosphofructokinase",
        "Option D": "ATP synthase",
        "Correct Option": "A",
        "Explanation": "Lactate dehydrogenase catalyzes the conversion of pyruvate to lactate during anaerobic respiration."
    },
    {
        "Q.No": "99",
        "Question": "What is the effect of enzyme concentration on the reaction rate?",
        "Option A": "It has no effect",
        "Option B": "It increases the rate until saturation is reached",
        "Option C": "It decreases the rate",
        "Option D": "It increases the rate indefinitely",
        "Correct Option": "B",
        "Explanation": "Enzyme concentration increases the rate of the reaction until all substrate molecules are bound to the enzyme."
    },
    {
        "Q.No": "100",
        "Question": "What is the role of the enzyme glycogen synthase?",
        "Option A": "To break down glycogen",
        "Option B": "To synthesize glycogen",
        "Option C": "To convert glucose to glucose-6-phosphate",
        "Option D": "To convert glucose to pyruvate",
        "Correct Option": "B",
        "Explanation": "Glycogen synthase catalyzes the synthesis of glycogen from glucose."
    }
      ]
    },
    "Evolution": {
      color: "#16a085",
      icon: "👍",
      questions: [
        {
        "Q.No": "1",
        "Question": "What is the theory of evolution?",
        "Option A": "A theory explaining the origin of the universe",
        "Option B": "A theory stating that species evolve over time due to natural selection",
        "Option C": "A theory that species are created separately",
        "Option D": "A theory of human genetics",
        "Correct Option": "B",
        "Explanation": "Evolution theory states that species evolve through natural selection over generations."
    },
    {
        "Q.No": "2",
        "Question": "Who proposed the theory of natural selection?",
        "Option A": "Gregor Mendel",
        "Option B": "Charles Darwin",
        "Option C": "Jean-Baptiste Lamarck",
        "Option D": "Alfred Russel Wallace",
        "Correct Option": "B",
        "Explanation": "Charles Darwin proposed the theory of natural selection in his work \"\"On the Origin of Species.\"\""
    },
    {
        "Q.No": "3",
        "Question": "Which of the following is a key component of Darwin's theory of evolution?",
        "Option A": "Inheritance of acquired traits",
        "Option B": "Use and disuse of body parts",
        "Option C": "Survival of the fittest",
        "Option D": "Spontaneous generation",
        "Correct Option": "C",
        "Explanation": "\"\"Survival of the fittest\"\" refers to the idea that organisms best adapted to their environment are more likely to survive and reproduce."
    },
    {
        "Q.No": "4",
        "Question": "What is the mechanism behind natural selection?",
        "Option A": "Random mutation",
        "Option B": "Inheritance of acquired traits",
        "Option C": "Adaptation to the environment",
        "Option D": "Genetic drift",
        "Correct Option": "C",
        "Explanation": "Natural selection operates by favoring individuals who are better adapted to their environment."
    },
    {
        "Q.No": "5",
        "Question": "Which of the following can lead to the formation of a new species?",
        "Option A": "Genetic drift",
        "Option B": "Mutations",
        "Option C": "Natural selection",
        "Option D": "All of the above",
        "Correct Option": "D",
        "Explanation": "All of the listed factors can contribute to speciation, the formation of new species."
    },
    {
        "Q.No": "6",
        "Question": "What is the term for the variety of different types of organisms on Earth?",
        "Option A": "Speciation",
        "Option B": "Biodiversity",
        "Option C": "Mutation",
        "Option D": "Cladistics",
        "Correct Option": "B",
        "Explanation": "Biodiversity refers to the variety of life forms in an environment or on Earth."
    },
    {
        "Q.No": "7",
        "Question": "What is adaptive radiation?",
        "Option A": "The process by which organisms evolve to have similar traits",
        "Option B": "The branching out of species from a common ancestor into new habitats",
        "Option C": "A type of genetic mutation",
        "Option D": "The extinction of species",
        "Correct Option": "B",
        "Explanation": "Adaptive radiation occurs when organisms diversify rapidly from a common ancestor into a variety of forms."
    },
    {
        "Q.No": "8",
        "Question": "What type of evidence supports the theory of evolution?",
        "Option A": "Fossil records",
        "Option B": "Comparative anatomy",
        "Option C": "Genetic similarities",
        "Option D": "All of the above",
        "Correct Option": "D",
        "Explanation": "Fossils, anatomy, and genetics all provide evidence supporting the theory of evolution."
    },
    {
        "Q.No": "9",
        "Question": "What is a homologous structure?",
        "Option A": "A structure that has a similar function but different origin",
        "Option B": "A structure that has a different function but similar origin",
        "Option C": "A structure that is identical in all species",
        "Option D": "A structure that is irrelevant to the species",
        "Correct Option": "B",
        "Explanation": "Homologous structures are similar in origin but may serve different functions across species."
    },
    {
        "Q.No": "10",
        "Question": "What is the main difference between homologous and analogous structures?",
        "Option A": "Homologous structures have a common origin, while analogous structures have a similar function",
        "Option B": "Homologous structures are found in humans, while analogous structures are found in animals",
        "Option C": "Analogous structures are evolutionary remnants, while homologous structures are essential",
        "Option D": "There is no difference",
        "Correct Option": "A",
        "Explanation": "Homologous structures share a common origin, while analogous structures have a similar function but evolved independently."
    },
    {
        "Q.No": "11",
        "Question": "What does the term \"\"fitness\"\" mean in the context of evolution?",
        "Option A": "The physical strength of an organism",
        "Option B": "The ability of an organism to survive and reproduce in its environment",
        "Option C": "The health of an organism",
        "Option D": "The speed of an organism",
        "Correct Option": "B",
        "Explanation": "Fitness in evolutionary terms refers to an organism's ability to survive, reproduce, and pass on its genes."
    },
    {
        "Q.No": "12",
        "Question": "What is genetic drift?",
        "Option A": "The movement of genes from one population to another",
        "Option B": "A change in the allele frequency due to random events",
        "Option C": "The process of natural selection",
        "Option D": "The introduction of new species",
        "Correct Option": "B",
        "Explanation": "Genetic drift refers to random changes in allele frequencies that can occur in small populations."
    },
    {
        "Q.No": "13",
        "Question": "What is the result of mutations in the genetic material?",
        "Option A": "Changes in the environment",
        "Option B": "New traits in the population",
        "Option C": "Reduction in biodiversity",
        "Option D": "Speciation",
        "Correct Option": "B",
        "Explanation": "Mutations introduce new genetic variations, which can lead to new traits in the population."
    },
    {
        "Q.No": "14",
        "Question": "What is the importance of genetic variation in the process of evolution?",
        "Option A": "It leads to the extinction of species",
        "Option B": "It decreases survival rates",
        "Option C": "It provides the raw material for natural selection",
        "Option D": "It prevents speciation",
        "Correct Option": "C",
        "Explanation": "Genetic variation is important because it provides the raw material for natural selection to act upon."
    },
    {
        "Q.No": "15",
        "Question": "Which of the following can be considered evidence of evolution?",
        "Option A": "Vestigial structures",
        "Option B": "Fossils",
        "Option C": "Molecular biology data",
        "Option D": "All of the above",
        "Correct Option": "D",
        "Explanation": "Vestigial structures, fossils, and molecular biology provide evidence supporting evolution."
    },
    {
        "Q.No": "16",
        "Question": "What is the main concept of Lamarck's theory of evolution?",
        "Option A": "Species evolve due to the inheritance of acquired traits",
        "Option B": "Evolution occurs through natural selection",
        "Option C": "Species evolve through genetic mutations",
        "Option D": "Species do not change over time",
        "Correct Option": "A",
        "Explanation": "Lamarck believed that organisms could pass on traits acquired during their lifetime to their offspring."
    },
    {
        "Q.No": "17",
        "Question": "What is a gene pool?",
        "Option A": "The total number of organisms in a population",
        "Option B": "The total collection of genes in a population",
        "Option C": "The total number of species in an ecosystem",
        "Option D": "The total number of ecosystems in a region",
        "Correct Option": "B",
        "Explanation": "A gene pool consists of all the alleles found in all individuals within a population."
    },
    {
        "Q.No": "18",
        "Question": "What does \"\"survival of the fittest\"\" mean?",
        "Option A": "The strongest organism survives",
        "Option B": "The organism best suited to its environment survives and reproduces",
        "Option C": "The oldest organism survives",
        "Option D": "The fastest organism survives",
        "Correct Option": "B",
        "Explanation": "\"\"Survival of the fittest\"\" refers to the survival and reproduction of organisms that are best adapted to their environment."
    },
    {
        "Q.No": "19",
        "Question": "What is the difference between artificial selection and natural selection?",
        "Option A": "Artificial selection is controlled by humans, while natural selection is driven by environmental pressures",
        "Option B": "Natural selection is driven by human choices, while artificial selection is driven by environmental pressures",
        "Option C": "Both are driven by human intervention",
        "Option D": "There is no difference between artificial and natural selection",
        "Correct Option": "A",
        "Explanation": "Artificial selection is when humans choose traits for breeding, while natural selection is driven by environmental pressures."
    },
    {
        "Q.No": "20",
        "Question": "What is the Hardy-Weinberg equilibrium used for in evolutionary biology?",
        "Option A": "To predict the future evolution of a population",
        "Option B": "To calculate the allele frequencies in a population that is not evolving",
        "Option C": "To study genetic mutations",
        "Option D": "To analyze the fitness of an organism",
        "Correct Option": "B",
        "Explanation": "The Hardy-Weinberg equilibrium provides a mathematical model for studying genetic variation in populations that are not evolving."
    },
    {
        "Q.No": "21",
        "Question": "What is the term for the gradual change in a species over time?",
        "Option A": "Speciation",
        "Option B": "Evolution",
        "Option C": "Mutation",
        "Option D": "Genetic drift",
        "Correct Option": "B",
        "Explanation": "Evolution refers to the gradual change in a species over time through genetic variation and natural selection."
    },
    {
        "Q.No": "22",
        "Question": "What are vestigial structures?",
        "Option A": "Structures that have no function but were once functional in ancestral organisms",
        "Option B": "Structures that are essential for survival",
        "Option C": "Structures that serve similar functions across different species",
        "Option D": "Structures that are newly evolved",
        "Correct Option": "A",
        "Explanation": "Vestigial structures are remnants of organs or structures that had a function in ancestors but are no longer necessary."
    },
    {
        "Q.No": "23",
        "Question": "Which of the following is an example of divergent evolution?",
        "Option A": "A bat’s wings and a bird’s wings",
        "Option B": "A whale's flipper and a human's arm",
        "Option C": "A dolphin's fins and a shark's fins",
        "Option D": "A butterfly's wings and a bird’s wings",
        "Correct Option": "B",
        "Explanation": "Divergent evolution occurs when two species with a common ancestor develop different traits."
    },
    {
        "Q.No": "24",
        "Question": "What does the theory of punctuated equilibrium propose?",
        "Option A": "Evolution occurs at a constant, steady pace",
        "Option B": "Evolution happens in bursts of rapid change followed by long periods of stability",
        "Option C": "Evolution happens through gradual changes over time",
        "Option D": "Evolution occurs due to mutations",
        "Correct Option": "B",
        "Explanation": "Punctuated equilibrium suggests that evolution happens in rapid bursts, followed by periods of little change."
    },
    {
        "Q.No": "25",
        "Question": "What is a cladogram?",
        "Option A": "A type of fossil",
        "Option B": "A diagram showing evolutionary relationships between species",
        "Option C": "A type of genetic mutation",
        "Option D": "A type of natural selection",
        "Correct Option": "B",
        "Explanation": "A cladogram is a diagram that shows the evolutionary relationships between different species based on shared characteristics."
    },
    {
        "Q.No": "26",
        "Question": "What is the main cause of the variation in populations?",
        "Option A": "Environmental changes",
        "Option B": "Genetic mutations",
        "Option C": "Immigration of individuals",
        "Option D": "Both B and C",
        "Correct Option": "D",
        "Explanation": "Genetic mutations and immigration of individuals contribute to genetic variation within populations."
    },
    {
        "Q.No": "27",
        "Question": "What is the role of the environment in natural selection?",
        "Option A": "It forces organisms to evolve rapidly",
        "Option B": "It provides the challenges and opportunities that influence which organisms survive and reproduce",
        "Option C": "It determines the gene pool of a population",
        "Option D": "It prevents mutations",
        "Correct Option": "B",
        "Explanation": "The environment creates challenges and opportunities that influence survival and reproduction, guiding natural selection."
    },
    {
        "Q.No": "28",
        "Question": "What is the process of speciation?",
        "Option A": "The formation of a new species through evolutionary changes",
        "Option B": "The extinction of a species",
        "Option C": "The hybridization of two species",
        "Option D": "The adaptation of organisms to their environment",
        "Correct Option": "A",
        "Explanation": "Speciation occurs when a population evolves into two or more distinct species due to genetic differences."
    },
    {
        "Q.No": "29",
        "Question": "What is the term for the physical or behavioral traits that increase an organism's chances of surviving and reproducing?",
        "Option A": "Adaptations",
        "Option B": "Mutations",
        "Option C": "Alleles",
        "Option D": "Clades",
        "Correct Option": "A",
        "Explanation": "Adaptations are traits that enhance an organism's ability to survive and reproduce in its environment."
    },
    {
        "Q.No": "30",
        "Question": "What is a transitional fossil?",
        "Option A": "A fossil that represents a complete evolutionary change between two species",
        "Option B": "A fossil of a fully developed species",
        "Option C": "A fossil that shows no evidence of evolutionary change",
        "Option D": "A fossil of a recently extinct species",
        "Correct Option": "A",
        "Explanation": "Transitional fossils show intermediary forms between two distinct species, demonstrating evolutionary changes."
    },
    {
        "Q.No": "31",
        "Question": "Which of the following is an example of convergent evolution?",
        "Option A": "The wings of birds and bats",
        "Option B": "The legs of lizards and snakes",
        "Option C": "The flippers of dolphins and seals",
        "Option D": "The wings of birds and insects",
        "Correct Option": "D",
        "Explanation": "Convergent evolution occurs when organisms from different ancestors develop similar traits due to similar environmental pressures."
    },
    {
        "Q.No": "32",
        "Question": "What does the concept of \"\"common descent\"\" suggest?",
        "Option A": "All species are unrelated",
        "Option B": "All living organisms are descended from a common ancestor",
        "Option C": "Evolution does not occur in species",
        "Option D": "Species evolve randomly",
        "Correct Option": "B",
        "Explanation": "Common descent suggests that all living organisms share a common ancestor."
    },
    {
        "Q.No": "33",
        "Question": "Which of the following can lead to the evolution of new species?",
        "Option A": "Geographic isolation",
        "Option B": "Behavioral isolation",
        "Option C": "Temporal isolation",
        "Option D": "All of the above",
        "Correct Option": "D",
        "Explanation": "Geographic, behavioral, and temporal isolation can all contribute to the formation of new species."
    },
    {
        "Q.No": "34",
        "Question": "What is the primary factor driving evolution in natural selection?",
        "Option A": "Mutation",
        "Option B": "Genetic variation",
        "Option C": "Survival and reproduction of the fittest",
        "Option D": "Environmental changes",
        "Correct Option": "C",
        "Explanation": "Natural selection is driven by the survival and reproduction of individuals best adapted to their environment."
    },
    {
        "Q.No": "35",
        "Question": "What is the principle of \"\"use and disuse\"\" proposed by Lamarck?",
        "Option A": "Traits acquired during an organism's lifetime can be passed on to offspring",
        "Option B": "Organisms evolve through genetic mutations",
        "Option C": "Natural selection drives evolution",
        "Option D": "Species evolve by random chance",
        "Correct Option": "A",
        "Explanation": "Lamarck's theory proposed that traits acquired during an organism's lifetime could be inherited by its offspring."
    },
    {
        "Q.No": "36",
        "Question": "What is stabilizing selection?",
        "Option A": "Selection that favors the extremes of a population's traits",
        "Option B": "Selection that favors the average traits of a population",
        "Option C": "Selection that favors both extremes of a population",
        "Option D": "Selection that eliminates intermediate traits",
        "Correct Option": "B",
        "Explanation": "Stabilizing selection favors the average traits and eliminates the extremes in a population."
    },
    {
        "Q.No": "37",
        "Question": "What is directional selection?",
        "Option A": "Selection that favors the average traits of a population",
        "Option B": "Selection that favors one extreme phenotype over others",
        "Option C": "Selection that eliminates intermediate traits",
        "Option D": "Selection that maintains genetic diversity",
        "Correct Option": "B",
        "Explanation": "Directional selection favors one extreme phenotype, leading to a shift in the population's traits over time."
    },
    {
        "Q.No": "38",
        "Question": "What is disruptive selection?",
        "Option A": "Selection that favors the average traits of a population",
        "Option B": "Selection that favors one extreme phenotype over others",
        "Option C": "Selection that favors both extreme phenotypes and eliminates the average phenotype",
        "Option D": "Selection that stabilizes population traits",
        "Correct Option": "C",
        "Explanation": "Disruptive selection favors both extreme phenotypes and eliminates intermediate phenotypes in a population."
    },
    {
        "Q.No": "39",
        "Question": "What is a major factor that can lead to extinction?",
        "Option A": "Competition for resources",
        "Option B": "Environmental change",
        "Option C": "Habitat destruction",
        "Option D": "All of the above",
        "Correct Option": "D",
        "Explanation": "Competition, environmental changes, and habitat destruction can all contribute to the extinction of species."
    },
    {
        "Q.No": "40",
        "Question": "What is the \"\"modern synthesis\"\" in evolutionary theory?",
        "Option A": "The integration of genetic principles with Darwin's theory of natural selection",
        "Option B": "The integration of fossils with Darwin's theory",
        "Option C": "The acceptance of Lamarck's theory of evolution",
        "Option D": "The denial of natural selection",
        "Correct Option": "A",
        "Explanation": "The modern synthesis integrates genetics with Darwin's natural selection theory, forming a comprehensive understanding of evolution."
    },
    {
        "Q.No": "41",
        "Question": "What is genetic recombination?",
        "Option A": "The process of creating new genetic material",
        "Option B": "The process of reshuffling genes during sexual reproduction",
        "Option C": "The mutation of genes",
        "Option D": "The elimination of harmful genes",
        "Correct Option": "B",
        "Explanation": "Genetic recombination occurs during sexual reproduction when genetic material from two parents is mixed, producing genetic diversity."
    },
    {
        "Q.No": "42",
        "Question": "What is the role of reproductive isolation in speciation?",
        "Option A": "It prevents gene flow between populations, leading to genetic differences",
        "Option B": "It allows gene flow between populations",
        "Option C": "It causes genetic drift",
        "Option D": "It prevents mutations from occurring",
        "Correct Option": "A",
        "Explanation": "Reproductive isolation prevents gene flow between populations, contributing to speciation."
    },
    {
        "Q.No": "43",
        "Question": "What is the term for when a population undergoes a rapid evolutionary change in response to a sudden environmental change?",
        "Option A": "Punctuated equilibrium",
        "Option B": "Gradualism",
        "Option C": "Adaptive radiation",
        "Option D": "Stabilizing selection",
        "Correct Option": "A",
        "Explanation": "Punctuated equilibrium suggests that species undergo rapid evolutionary changes followed by long periods of stability."
    },
    {
        "Q.No": "44",
        "Question": "What is the founder effect?",
        "Option A": "When a small group of individuals establishes a new population, leading to reduced genetic variation",
        "Option B": "The result of genetic mutation in a population",
        "Option C": "The process of natural selection in a population",
        "Option D": "The movement of genes from one population to another",
        "Correct Option": "A",
        "Explanation": "The founder effect occurs when a small group of individuals establishes a new population with reduced genetic variation."
    },
    {
        "Q.No": "45",
        "Question": "What does \"\"gene flow\"\" refer to?",
        "Option A": "The exchange of genes between different populations",
        "Option B": "The increase in genetic mutations within a population",
        "Option C": "The increase in reproductive isolation",
        "Option D": "The process of natural selection",
        "Correct Option": "A",
        "Explanation": "Gene flow refers to the transfer of genes between different populations, increasing genetic diversity."
    },
    {
        "Q.No": "46",
        "Question": "What is the role of sexual selection in evolution?",
        "Option A": "It leads to the extinction of species",
        "Option B": "It helps organisms adapt to their environment",
        "Option C": "It promotes traits that increase mating success",
        "Option D": "It eliminates harmful mutations",
        "Correct Option": "C",
        "Explanation": "Sexual selection promotes traits that increase an organism's chances of attracting mates and reproducing."
    },
    {
        "Q.No": "47",
        "Question": "What is the key idea behind the concept of \"\"descent with modification\"\"?",
        "Option A": "All organisms are identical",
        "Option B": "Organisms are fixed and do not change over time",
        "Option C": "Species evolve and accumulate changes over generations",
        "Option D": "Evolution occurs randomly without any pattern",
        "Correct Option": "C",
        "Explanation": "\"\"Descent with modification\"\" means that species evolve and accumulate genetic changes over time, leading to new species."
    },
    {
        "Q.No": "48",
        "Question": "What is the importance of fossils in studying evolution?",
        "Option A": "They provide evidence of past species and evolutionary transitions",
        "Option B": "They show the age of the Earth",
        "Option C": "They help predict future species",
        "Option D": "They have no role in understanding evolution",
        "Correct Option": "A",
        "Explanation": "Fossils provide evidence of past life forms and evolutionary transitions between species."
    },
    {
        "Q.No": "49",
        "Question": "What does the term \"\"speciation\"\" refer to?",
        "Option A": "The extinction of species",
        "Option B": "The formation of new species through evolutionary processes",
        "Option C": "The adaptation of species to their environment",
        "Option D": "The migration of species",
        "Correct Option": "B",
        "Explanation": "Speciation is the process by which new species arise due to evolutionary changes in a population."
    },
    {
        "Q.No": "50",
        "Question": "What is the significance of the Galápagos finches in Darwin's theory of evolution?",
        "Option A": "They showed that organisms cannot adapt to different environments",
        "Option B": "They provided evidence for adaptive radiation and natural selection",
        "Option C": "They demonstrated the importance of genetic drift",
        "Option D": "They were not relevant to the theory of evolution",
        "Correct Option": "B",
        "Explanation": "The Galápagos finches provided key evidence for adaptive radiation and natural selection, showing how species evolve in response to environmental pressures."
    },
    {
        "Q.No": "51",
        "Question": "What is a key characteristic of the process of evolution?",
        "Option A": "It occurs over a short period",
        "Option B": "It involves gradual changes over long periods",
        "Option C": "It leads to an immediate change in species",
        "Option D": "It eliminates all genetic mutations",
        "Correct Option": "B",
        "Explanation": "Evolution occurs gradually over long periods, with small changes accumulating over time."
    },
    {
        "Q.No": "52",
        "Question": "Which of the following is an example of a fossil record supporting evolution?",
        "Option A": "The diversity of living species today",
        "Option B": "The change in gene frequencies in populations",
        "Option C": "The progression from simple to more complex forms in fossil layers",
        "Option D": "The behavior of living organisms",
        "Correct Option": "C",
        "Explanation": "The fossil record shows a progression from simple to more complex life forms, supporting evolutionary changes."
    },
    {
        "Q.No": "53",
        "Question": "What does \"\"fitness\"\" in evolutionary biology refer to?",
        "Option A": "Physical strength",
        "Option B": "Ability to adapt to the environment",
        "Option C": "Ability to survive and reproduce",
        "Option D": "Speed and agility",
        "Correct Option": "C",
        "Explanation": "Fitness refers to an organism's ability to survive and reproduce, passing on its genes to the next generation."
    },
    {
        "Q.No": "54",
        "Question": "Which of the following is a result of genetic drift?",
        "Option A": "Increased genetic diversity",
        "Option B": "Decreased genetic diversity due to random changes",
        "Option C": "Stabilization of allele frequencies in a population",
        "Option D": "Directional selection",
        "Correct Option": "B",
        "Explanation": "Genetic drift causes random changes in allele frequencies, often decreasing genetic diversity."
    },
    {
        "Q.No": "55",
        "Question": "What is the difference between convergent evolution and divergent evolution?",
        "Option A": "Convergent evolution occurs in isolated populations; divergent evolution occurs in the same population",
        "Option B": "Convergent evolution leads to similar traits in unrelated species; divergent evolution leads to different traits in related species",
        "Option C": "Convergent evolution leads to genetic isolation; divergent evolution leads to gene flow",
        "Option D": "There is no difference",
        "Correct Option": "B",
        "Explanation": "Convergent evolution results in similar traits in unrelated species, while divergent evolution results in different traits in related species."
    },
    {
        "Q.No": "56",
        "Question": "Which type of selection favors intermediate phenotypes?",
        "Option A": "Disruptive selection",
        "Option B": "Directional selection",
        "Option C": "Stabilizing selection",
        "Option D": "Artificial selection",
        "Correct Option": "C",
        "Explanation": "Stabilizing selection favors the intermediate phenotypes and reduces variation in a population."
    },
    {
        "Q.No": "57",
        "Question": "What is an example of an adaptive trait?",
        "Option A": "Camouflage that helps an organism blend into its environment",
        "Option B": "A nonfunctional organ",
        "Option C": "A trait that reduces an organism’s chances of survival",
        "Option D": "A trait that decreases reproduction",
        "Correct Option": "A",
        "Explanation": "Adaptive traits help an organism survive and reproduce by offering a better fit to its environment."
    },
    {
        "Q.No": "58",
        "Question": "What role do mutations play in evolution?",
        "Option A": "They always lead to harmful effects",
        "Option B": "They provide new genetic material that can lead to evolutionary change",
        "Option C": "They have no impact on evolution",
        "Option D": "They only occur in response to environmental stress",
        "Correct Option": "B",
        "Explanation": "Mutations introduce genetic variation, which is essential for evolution to occur."
    },
    {
        "Q.No": "59",
        "Question": "What is directional selection?",
        "Option A": "Selection that favors intermediate traits",
        "Option B": "Selection that favors both extreme phenotypes",
        "Option C": "Selection that favors one extreme phenotype",
        "Option D": "Selection that reduces genetic variation",
        "Correct Option": "C",
        "Explanation": "Directional selection favors one extreme phenotype, leading to a shift in the population's traits."
    },
    {
        "Q.No": "60",
        "Question": "What is the key idea behind \"\"survival of the fittest\"\"?",
        "Option A": "Strong organisms survive",
        "Option B": "The organisms best adapted to their environment are most likely to survive and reproduce",
        "Option C": "Only the largest organisms survive",
        "Option D": "The fastest organisms will outlive others",
        "Correct Option": "B",
        "Explanation": "\"\"Survival of the fittest\"\" refers to the survival and reproduction of the most adapted individuals in a population."
    },
    {
        "Q.No": "61",
        "Question": "What is the \"\"gene flow\"\" in evolution?",
        "Option A": "The movement of alleles between different populations",
        "Option B": "The mutation of genes within a population",
        "Option C": "The extinction of species",
        "Option D": "The random selection of traits for reproduction",
        "Correct Option": "A",
        "Explanation": "Gene flow refers to the transfer of alleles from one population to another, which can increase genetic diversity."
    },
    {
        "Q.No": "62",
        "Question": "What is speciation?",
        "Option A": "The process by which two populations evolve into distinct species",
        "Option B": "The extinction of a species",
        "Option C": "The survival of an organism in its environment",
        "Option D": "The adaptation of an organism to its environment",
        "Correct Option": "A",
        "Explanation": "Speciation is the formation of new and distinct species through evolutionary processes."
    },
    {
        "Q.No": "63",
        "Question": "What does the term \"\"adaptive radiation\"\" refer to?",
        "Option A": "Rapid diversification of a species into a variety of forms",
        "Option B": "Evolution of a single species without much variation",
        "Option C": "The extinction of all members of a species",
        "Option D": "The appearance of mutations in a population",
        "Correct Option": "A",
        "Explanation": "Adaptive radiation occurs when a single species diversifies rapidly into multiple forms to adapt to different environments."
    },
    {
        "Q.No": "64",
        "Question": "What type of isolation occurs when two populations of a species breed at different times?",
        "Option A": "Temporal isolation",
        "Option B": "Geographic isolation",
        "Option C": "Behavioral isolation",
        "Option D": "Mechanical isolation",
        "Correct Option": "A",
        "Explanation": "Temporal isolation occurs when populations breed at different times, preventing interbreeding."
    },
    {
        "Q.No": "65",
        "Question": "What is a common feature of all living organisms that supports the theory of evolution?",
        "Option A": "They all share similar metabolic processes",
        "Option B": "They have similar DNA sequences",
        "Option C": "They all live in similar environments",
        "Option D": "They all evolve at the same rate",
        "Correct Option": "B",
        "Explanation": "Similar DNA sequences across species suggest a common ancestry and support the theory of evolution."
    },
    {
        "Q.No": "66",
        "Question": "What is the importance of genetic variation in a population?",
        "Option A": "It makes the population more vulnerable to extinction",
        "Option B": "It reduces the survival chances of the species",
        "Option C": "It provides the raw material for evolution to act upon",
        "Option D": "It prevents mutations",
        "Correct Option": "C",
        "Explanation": "Genetic variation provides the raw material for evolution and allows populations to adapt to changing environments."
    },
    {
        "Q.No": "67",
        "Question": "Which process describes how new species arise from an existing population?",
        "Option A": "Natural selection",
        "Option B": "Genetic drift",
        "Option C": "Speciation",
        "Option D": "Genetic recombination",
        "Correct Option": "C",
        "Explanation": "Speciation occurs when an existing population evolves into a new species through evolutionary processes."
    },
    {
        "Q.No": "68",
        "Question": "What is a \"\"homologous structure\"\"?",
        "Option A": "A structure that performs the same function in different species",
        "Option B": "A structure that has a similar origin but may serve different functions in different species",
        "Option C": "A structure with no function in a species",
        "Option D": "A structure that evolves independently in different species",
        "Correct Option": "B",
        "Explanation": "Homologous structures share a common origin but may serve different functions across species."
    },
    {
        "Q.No": "69",
        "Question": "What evidence does comparative anatomy provide for evolution?",
        "Option A": "It shows that different species have different origins",
        "Option B": "It shows that organisms have similar reproductive systems",
        "Option C": "It shows how similar structures evolved from a common ancestor",
        "Option D": "It proves that all species were created independently",
        "Correct Option": "C",
        "Explanation": "Comparative anatomy shows how similar structures in different species evolved from a common ancestor, supporting evolution."
    },
    {
        "Q.No": "70",
        "Question": "What does the theory of punctuated equilibrium suggest about the pace of evolution?",
        "Option A": "Evolution occurs gradually over time without any interruptions",
        "Option B": "Evolution occurs at a constant rate",
        "Option C": "Evolution happens in bursts of rapid change followed by long periods of stability",
        "Option D": "Evolution only occurs in response to environmental changes",
        "Correct Option": "C",
        "Explanation": "Punctuated equilibrium suggests that evolution happens in rapid bursts, followed by long periods of stability."
    },
    {
        "Q.No": "71",
        "Question": "What is a \"\"cladogram\"\"?",
        "Option A": "A tree diagram that shows the evolutionary relationships between species",
        "Option B": "A chart of genetic mutations",
        "Option C": "A diagram of the embryological development of species",
        "Option D": "A chart showing the behavior of different species",
        "Correct Option": "A",
        "Explanation": "A cladogram is a tree diagram that shows the evolutionary relationships based on shared characteristics."
    },
    {
        "Q.No": "72",
        "Question": "What is the term for the physical and genetic changes in populations over time?",
        "Option A": "Evolution",
        "Option B": "Natural selection",
        "Option C": "Speciation",
        "Option D": "Genetic drift",
        "Correct Option": "A",
        "Explanation": "Evolution refers to the changes in populations over time due to genetic variation, mutations, and natural selection."
    },
    {
        "Q.No": "73",
        "Question": "What is the role of sexual selection in evolution?",
        "Option A": "It favors traits that increase an organism’s ability to survive",
        "Option B": "It favors traits that enhance an organism’s chances of reproducing",
        "Option C": "It eliminates unfavorable genetic traits",
        "Option D": "It has no impact on evolution",
        "Correct Option": "B",
        "Explanation": "Sexual selection favors traits that increase an organism's chances of attracting mates and reproducing."
    },
    {
        "Q.No": "74",
        "Question": "What does \"\"survival of the fittest\"\" imply about fitness in evolution?",
        "Option A": "Only the strongest survive",
        "Option B": "The most adaptable organisms survive and reproduce",
        "Option C": "Fitness is determined by an organism's physical size",
        "Option D": "Organisms with the most offspring are always the fittest",
        "Correct Option": "B",
        "Explanation": "\"\"Survival of the fittest\"\" implies that the most adaptable organisms are the ones that survive and reproduce."
    },
    {
        "Q.No": "75",
        "Question": "How can a mutation lead to evolution?",
        "Option A": "It can introduce new genetic material into the population",
        "Option B": "It can eliminate harmful traits from the population",
        "Option C": "It does not affect evolution",
        "Option D": "It causes all organisms to become identical",
        "Correct Option": "A",
        "Explanation": "Mutations introduce new genetic material, contributing to genetic variation, which drives evolution."
    },
    {
        "Q.No": "76",
        "Question": "What is \"\"gene pool\"\"?",
        "Option A": "The genetic material of a single organism",
        "Option B": "The total genetic diversity in a population",
        "Option C": "The genes passed on to offspring",
        "Option D": "The genetic makeup of a species",
        "Correct Option": "B",
        "Explanation": "A gene pool is the total genetic material available within a population."
    },
    {
        "Q.No": "77",
        "Question": "What does it mean if a population is in Hardy-Weinberg equilibrium?",
        "Option A": "The population is evolving",
        "Option B": "The population is not evolving",
        "Option C": "There is a decrease in genetic variation",
        "Option D": "The population is extinct",
        "Correct Option": "B",
        "Explanation": "Hardy-Weinberg equilibrium means that allele frequencies are not changing, indicating no evolution."
    },
    {
        "Q.No": "78",
        "Question": "What is the main idea behind Darwin's concept of natural selection?",
        "Option A": "Organisms with the most offspring survive",
        "Option B": "Individuals with advantageous traits are more likely to survive and reproduce",
        "Option C": "Evolution is a random process",
        "Option D": "Species remain unchanged over time",
        "Correct Option": "B",
        "Explanation": "Darwin's theory suggests that advantageous traits increase an organism's chances of survival and reproduction."
    },
    {
        "Q.No": "79",
        "Question": "How can geographical isolation lead to speciation?",
        "Option A": "It prevents gene flow between populations, leading to genetic differences",
        "Option B": "It creates new habitats for populations to colonize",
        "Option C": "It increases competition between populations",
        "Option D": "It eliminates the need for genetic variation",
        "Correct Option": "A",
        "Explanation": "Geographical isolation prevents gene flow between populations, leading to the accumulation of genetic differences and potential speciation."
    },
    {
        "Q.No": "80",
        "Question": "What does the term \"\"fitness\"\" refer to in evolutionary biology?",
        "Option A": "The physical health of an organism",
        "Option B": "The ability of an organism to survive and reproduce",
        "Option C": "The strength of an organism",
        "Option D": "The reproductive age of an organism",
        "Correct Option": "B",
        "Explanation": "Fitness refers to the ability of an organism to survive, reproduce, and pass on its genes to the next generation."
    },
    {
        "Q.No": "81",
        "Question": "Which of the following is an example of convergent evolution?",
        "Option A": "The wings of birds and bats",
        "Option B": "The different types of beaks in Darwin's finches",
        "Option C": "The limbs of humans and whales",
        "Option D": "The color patterns in butterflies",
        "Correct Option": "A",
        "Explanation": "Convergent evolution occurs when different species evolve similar traits due to similar environmental pressures."
    },
    {
        "Q.No": "82",
        "Question": "What is the importance of the theory of evolution in modern biology?",
        "Option A": "It explains how life on Earth originated",
        "Option B": "It provides a framework for understanding the diversity of life",
        "Option C": "It shows that organisms never change over time",
        "Option D": "It eliminates the need for further research in biology",
        "Correct Option": "B",
        "Explanation": "The theory of evolution provides a framework for understanding the diversity of life and how species change over time."
    },
    {
        "Q.No": "83",
        "Question": "What is a key factor in natural selection?",
        "Option A": "The random movement of individuals",
        "Option B": "The selection of traits based on their usefulness for survival and reproduction",
        "Option C": "The disappearance of harmful mutations",
        "Option D": "The increase in population size",
        "Correct Option": "B",
        "Explanation": "Natural selection favors traits that are beneficial for survival and reproduction in a given environment."
    },
    {
        "Q.No": "84",
        "Question": "Which of the following best explains the concept of \"\"survival of the fittest\"\"?",
        "Option A": "The strongest individuals survive",
        "Option B": "The organisms that are best suited to their environment are more likely to survive and reproduce",
        "Option C": "Only the most intelligent survive",
        "Option D": "The individuals that can adapt to any environment survive",
        "Correct Option": "B",
        "Explanation": "\"\"Survival of the fittest\"\" refers to the survival of organisms best adapted to their environment."
    },
    {
        "Q.No": "85",
        "Question": "What is \"\"artificial selection\"\"?",
        "Option A": "The process of natural selection occurring in nature",
        "Option B": "The intentional breeding of organisms with specific traits by humans",
        "Option C": "The mutation of genes in a laboratory setting",
        "Option D": "The elimination of less fit organisms in the wild",
        "Correct Option": "B",
        "Explanation": "Artificial selection involves humans intentionally breeding organisms with specific desirable traits."
    },
    {
        "Q.No": "86",
        "Question": "What is an example of a vestigial structure?",
        "Option A": "The wings of a bird",
        "Option B": "The tailbone in humans",
        "Option C": "The large jaws of carnivorous mammals",
        "Option D": "The beak of a hummingbird",
        "Correct Option": "B",
        "Explanation": "Vestigial structures are remnants of organs or traits that were once useful but no longer serve a function, such as the human tailbone."
    },
    {
        "Q.No": "87",
        "Question": "What is a \"\"phylogenetic tree\"\"?",
        "Option A": "A diagram showing the evolutionary relationships among species",
        "Option B": "A chart showing the population size over time",
        "Option C": "A map of the migration patterns of species",
        "Option D": "A model predicting the future evolution of a species",
        "Correct Option": "A",
        "Explanation": "A phylogenetic tree shows the evolutionary relationships between species based on shared ancestry."
    },
    {
        "Q.No": "88",
        "Question": "What is \"\"biogeography\"\"?",
        "Option A": "The study of organisms' physical features",
        "Option B": "The study of how species evolve in specific regions of the world",
        "Option C": "The study of genetic mutations in species",
        "Option D": "The study of how species behave",
        "Correct Option": "B",
        "Explanation": "Biogeography is the study of how species evolve and adapt in specific geographical regions."
    },
    {
        "Q.No": "89",
        "Question": "What is the main conclusion of Darwin’s theory of evolution?",
        "Option A": "Species do not change over time",
        "Option B": "All species are created in their current form",
        "Option C": "Species evolve over time through natural selection",
        "Option D": "Evolution only happens in response to environmental changes",
        "Correct Option": "C",
        "Explanation": "Darwin concluded that species evolve over time through natural selection."
    },
    {
        "Q.No": "90",
        "Question": "What is the \"\"bottleneck effect\"\"?",
        "Option A": "A type of genetic drift where a population's size is significantly reduced",
        "Option B": "A process of rapid evolution",
        "Option C": "A mechanism that stabilizes allele frequencies in a population",
        "Option D": "The result of sexual selection in a population",
        "Correct Option": "A",
        "Explanation": "The bottleneck effect occurs when a population's size is drastically reduced, leading to a loss of genetic diversity."
    },
    {
        "Q.No": "91",
        "Question": "Which of the following is an example of coevolution?",
        "Option A": "The mutual adaptation of predators and prey",
        "Option B": "The evolution of an organism in response to environmental changes",
        "Option C": "The adaptation of organisms to their physical environment",
        "Option D": "The accumulation of genetic mutations in a population",
        "Correct Option": "A",
        "Explanation": "Coevolution refers to the process where two species evolve in response to each other, such as predators and their prey."
    },
    {
        "Q.No": "92",
        "Question": "What does the term \"\"biological evolution\"\" mean?",
        "Option A": "The gradual change of species over time",
        "Option B": "The survival of the fittest in nature",
        "Option C": "The extinction of species over time",
        "Option D": "The adaptation of organisms to their environment",
        "Correct Option": "A",
        "Explanation": "Biological evolution refers to the gradual change in species over time, driven by natural selection and genetic variation."
    },
    {
        "Q.No": "93",
        "Question": "How do fossils contribute to our understanding of evolution?",
        "Option A": "By providing evidence of extinct species and evolutionary transitions",
        "Option B": "By showing how species were formed",
        "Option C": "By proving that species have always been the same",
        "Option D": "By demonstrating that evolution never occurs",
        "Correct Option": "A",
        "Explanation": "Fossils provide evidence of extinct species and the transitional forms that connect different groups in the evolutionary tree."
    },
    {
        "Q.No": "94",
        "Question": "What is the significance of the Cambrian Explosion in the history of evolution?",
        "Option A": "It marked the sudden appearance of many diverse animal forms",
        "Option B": "It led to the extinction of most species",
        "Option C": "It was a period when mammals first appeared",
        "Option D": "It was when plants began to evolve on land",
        "Correct Option": "A",
        "Explanation": "The Cambrian Explosion marked a rapid increase in the diversity of life forms, particularly animals, in the fossil record."
    },
    {
        "Q.No": "95",
        "Question": "What does \"\"evolutionary fitness\"\" refer to?",
        "Option A": "The ability of an organism to adapt to its environment",
        "Option B": "The ability of an organism to survive and reproduce",
        "Option C": "The physical strength of an organism",
        "Option D": "The size of an organism’s brain",
        "Correct Option": "B",
        "Explanation": "Evolutionary fitness refers to the ability of an organism to survive, reproduce, and pass on its genes."
    },
    {
        "Q.No": "96",
        "Question": "What is the role of competition in evolution?",
        "Option A": "It prevents evolution from occurring",
        "Option B": "It can drive natural selection by favoring individuals with advantageous traits",
        "Option C": "It has no effect on evolution",
        "Option D": "It increases genetic variation in a population",
        "Correct Option": "B",
        "Explanation": "Competition for resources can drive natural selection, favoring individuals with traits that enhance survival and reproduction."
    },
    {
        "Q.No": "97",
        "Question": "What is an example of natural selection in action?",
        "Option A": "The evolution of antibiotic resistance in bacteria",
        "Option B": "The breeding of dogs for specific traits",
        "Option C": "The creation of genetically modified organisms",
        "Option D": "The extinction of certain species",
        "Correct Option": "A",
        "Explanation": "Natural selection is evident in the evolution of antibiotic resistance in bacteria, where resistant individuals survive and reproduce."
    },
    {
        "Q.No": "98",
        "Question": "What is the result of reproductive isolation between two populations?",
        "Option A": "They will merge into a single population",
        "Option B": "They will evolve into separate species",
        "Option C": "They will form hybrid offspring",
        "Option D": "They will share the same gene pool",
        "Correct Option": "B",
        "Explanation": "Reproductive isolation prevents gene flow between two populations, leading to the evolution of separate species."
    },
    {
        "Q.No": "99",
        "Question": "What role do mutations play in the process of evolution?",
        "Option A": "They provide the genetic variation that natural selection acts upon",
        "Option B": "They prevent evolutionary change",
        "Option C": "They make all organisms identical",
        "Option D": "They have no impact on evolution",
        "Correct Option": "A",
        "Explanation": "Mutations introduce genetic variation, providing the raw material for natural selection to act upon."
    },
    {
        "Q.No": "100",
        "Question": "What does the term \"\"microevolution\"\" refer to?",
        "Option A": "Large-scale changes in a population over long periods",
        "Option B": "Evolution occurring within a population over a short time frame",
        "Option C": "The extinction of species",
        "Option D": "The adaptation of species to different environments",
        "Correct Option": "B",
        "Explanation": "Microevolution refers to small-scale evolutionary changes within a population over a short period."
    }
      ]
    },
    "Life Processes": {
      color: "#d35400",
      icon: "🌿",
      questions: [
        {
        "Q.No": "1",
        "Question": "Which process in animals involves the breakdown of food into simple molecules?",
        "Option A": "Digestion",
        "Option B": "Respiration",
        "Option C": "Excretion",
        "Option D": "Circulation",
        "Correct Option": "A",
        "Explanation": "Digestion breaks down food into simpler molecules, which can then be absorbed."
    },
    {
        "Q.No": "2",
        "Question": "In which part of the human digestive system does most nutrient absorption take place?",
        "Option A": "Stomach",
        "Option B": "Large intestine",
        "Option C": "Small intestine",
        "Option D": "Mouth",
        "Correct Option": "C",
        "Explanation": "Most nutrient absorption occurs in the small intestine."
    },
    {
        "Q.No": "3",
        "Question": "What is the primary function of the circulatory system in animals?",
        "Option A": "Pumping blood",
        "Option B": "Absorbing nutrients",
        "Option C": "Transporting gases",
        "Option D": "Transporting hormones and waste products",
        "Correct Option": "C",
        "Explanation": "The circulatory system transports oxygen and carbon dioxide (gaseous exchange) throughout the body."
    },
    {
        "Q.No": "4",
        "Question": "Which type of nutrition is found in humans?",
        "Option A": "Autotrophic nutrition",
        "Option B": "Heterotrophic nutrition",
        "Option C": "Parasitic nutrition",
        "Option D": "Saprophytic nutrition",
        "Correct Option": "B",
        "Explanation": "Humans are heterotrophs, relying on other organisms for food."
    },
    {
        "Q.No": "5",
        "Question": "What is the role of chlorophyll in plants?",
        "Option A": "To absorb water",
        "Option B": "To trap light energy",
        "Option C": "To produce sugars",
        "Option D": "To store oxygen",
        "Correct Option": "B",
        "Explanation": "Chlorophyll absorbs light energy required for photosynthesis."
    },
    {
        "Q.No": "6",
        "Question": "What is the process by which plants make their food?",
        "Option A": "Photosynthesis",
        "Option B": "Respiration",
        "Option C": "Transpiration",
        "Option D": "Germination",
        "Correct Option": "A",
        "Explanation": "Plants make their own food through the process of photosynthesis."
    },
    {
        "Q.No": "7",
        "Question": "In which part of the plant does photosynthesis mainly occur?",
        "Option A": "Roots",
        "Option B": "Stems",
        "Option C": "Leaves",
        "Option D": "Flowers",
        "Correct Option": "C",
        "Explanation": "Photosynthesis mainly occurs in the leaves, where chlorophyll is present."
    },
    {
        "Q.No": "8",
        "Question": "What is the main product of photosynthesis in plants?",
        "Option A": "Oxygen",
        "Option B": "Glucose",
        "Option C": "Water",
        "Option D": "Carbon dioxide",
        "Correct Option": "B",
        "Explanation": "The main product of photosynthesis is glucose, with oxygen as a byproduct."
    },
    {
        "Q.No": "9",
        "Question": "What is the process by which plants lose water vapor through stomata called?",
        "Option A": "Respiration",
        "Option B": "Photosynthesis",
        "Option C": "Transpiration",
        "Option D": "Absorption",
        "Correct Option": "C",
        "Explanation": "Transpiration is the loss of water vapor through stomata in plants."
    },
    {
        "Q.No": "10",
        "Question": "Which organ in humans is responsible for gas exchange?",
        "Option A": "Lungs",
        "Option B": "Heart",
        "Option C": "Liver",
        "Option D": "Kidneys",
        "Correct Option": "A",
        "Explanation": "The lungs are the primary organs for gaseous exchange in humans."
    },
    {
        "Q.No": "11",
        "Question": "What type of circulatory system do humans have?",
        "Option A": "Open circulatory system",
        "Option B": "Closed circulatory system",
        "Option C": "Both open and closed circulatory systems",
        "Option D": "No circulatory system",
        "Correct Option": "B",
        "Explanation": "Humans have a closed circulatory system, where blood is confined to vessels."
    },
    {
        "Q.No": "12",
        "Question": "What gas do animals primarily inhale during respiration?",
        "Option A": "Nitrogen",
        "Option B": "Oxygen",
        "Option C": "Carbon dioxide",
        "Option D": "Hydrogen",
        "Correct Option": "B",
        "Explanation": "Animals inhale oxygen during respiration to produce energy."
    },
    {
        "Q.No": "13",
        "Question": "What is the function of the human alveoli?",
        "Option A": "Pump blood",
        "Option B": "Absorb oxygen",
        "Option C": "Transport nutrients",
        "Option D": "Remove waste",
        "Correct Option": "B",
        "Explanation": "The alveoli in the lungs are responsible for the exchange of oxygen and carbon dioxide."
    },
    {
        "Q.No": "14",
        "Question": "What is the primary function of red blood cells in humans?",
        "Option A": "Fighting infections",
        "Option B": "Carrying oxygen",
        "Option C": "Clotting blood",
        "Option D": "Regulating body temperature",
        "Correct Option": "B",
        "Explanation": "Red blood cells carry oxygen from the lungs to tissues and carbon dioxide from tissues to the lungs."
    },
    {
        "Q.No": "15",
        "Question": "What is the role of the phloem in plants?",
        "Option A": "Transporting water",
        "Option B": "Transporting nutrients",
        "Option C": "Transporting sugars and organic compounds",
        "Option D": "Transporting oxygen",
        "Correct Option": "C",
        "Explanation": "Phloem transports sugars and organic compounds throughout the plant."
    },
    {
        "Q.No": "16",
        "Question": "What is the role of xylem in plants?",
        "Option A": "Transporting sugars",
        "Option B": "Transporting water and minerals",
        "Option C": "Transporting oxygen",
        "Option D": "Transporting nutrients",
        "Correct Option": "B",
        "Explanation": "Xylem transports water and minerals from the roots to the rest of the plant."
    },
    {
        "Q.No": "17",
        "Question": "How do plants obtain carbon dioxide for photosynthesis?",
        "Option A": "Through the stomata",
        "Option B": "Through the roots",
        "Option C": "Through the stem",
        "Option D": "From the soil",
        "Correct Option": "A",
        "Explanation": "Plants absorb carbon dioxide from the atmosphere through the stomata in the leaves."
    },
    {
        "Q.No": "18",
        "Question": "What is the function of the stomata in plants?",
        "Option A": "To absorb sunlight",
        "Option B": "To exchange gases",
        "Option C": "To produce food",
        "Option D": "To store water",
        "Correct Option": "B",
        "Explanation": "Stomata are pores in the leaves that allow the exchange of gases like oxygen and carbon dioxide."
    },
    {
        "Q.No": "19",
        "Question": "Which organ system is responsible for the transportation of nutrients, gases, and wastes in animals?",
        "Option A": "Circulatory system",
        "Option B": "Digestive system",
        "Option C": "Nervous system",
        "Option D": "Excretory system",
        "Correct Option": "A",
        "Explanation": "The circulatory system is responsible for transporting nutrients, gases, and wastes."
    },
    {
        "Q.No": "20",
        "Question": "What is the process of cellular respiration in animals?",
        "Option A": "Breakdown of food to release energy",
        "Option B": "Production of glucose",
        "Option C": "Transport of oxygen to cells",
        "Option D": "Excretion of waste",
        "Correct Option": "A",
        "Explanation": "Cellular respiration is the process of breaking down food to release energy for the body."
    },
    {
        "Q.No": "21",
        "Question": "Which molecule is the primary energy source for plants during photosynthesis?",
        "Option A": "Oxygen",
        "Option B": "Glucose",
        "Option C": "Carbon dioxide",
        "Option D": "Water",
        "Correct Option": "B",
        "Explanation": "Glucose is the primary energy source produced by plants during photosynthesis."
    },
    {
        "Q.No": "22",
        "Question": "What is the role of the diaphragm in humans?",
        "Option A": "To circulate blood",
        "Option B": "To exchange gases in the lungs",
        "Option C": "To control the amount of air entering the lungs",
        "Option D": "To pump oxygen into the blood",
        "Correct Option": "C",
        "Explanation": "The diaphragm helps regulate the intake of air into the lungs during breathing."
    },
    {
        "Q.No": "23",
        "Question": "How do aquatic plants exchange gases?",
        "Option A": "Through their roots",
        "Option B": "Through their stems",
        "Option C": "Through their leaves",
        "Option D": "Through their flowers",
        "Correct Option": "C",
        "Explanation": "Aquatic plants exchange gases through their leaves, similar to terrestrial plants."
    },
    {
        "Q.No": "24",
        "Question": "What is the role of the mouth in the digestive system of humans?",
        "Option A": "To absorb nutrients",
        "Option B": "To break down food into smaller pieces",
        "Option C": "To transport food to the stomach",
        "Option D": "To release digestive enzymes",
        "Correct Option": "B",
        "Explanation": "The mouth breaks down food into smaller pieces through chewing to aid digestion."
    },
    {
        "Q.No": "25",
        "Question": "What is the function of bile in the digestive system?",
        "Option A": "To digest proteins",
        "Option B": "To emulsify fats",
        "Option C": "To absorb carbohydrates",
        "Option D": "To neutralize stomach acids",
        "Correct Option": "B",
        "Explanation": "Bile helps emulsify fats, making them easier to digest by enzymes."
    },
    {
        "Q.No": "26",
        "Question": "Which part of the human digestive system absorbs water and forms feces?",
        "Option A": "Stomach",
        "Option B": "Large intestine",
        "Option C": "Small intestine",
        "Option D": "Rectum",
        "Correct Option": "B",
        "Explanation": "The large intestine absorbs water and forms feces for excretion."
    },
    {
        "Q.No": "27",
        "Question": "What is the process by which water moves from the roots of plants to the leaves?",
        "Option A": "Transpiration",
        "Option B": "Osmosis",
        "Option C": "Diffusion",
        "Option D": "Capillary action",
        "Correct Option": "D",
        "Explanation": "Capillary action helps move water from the roots to the leaves through xylem vessels."
    },
    {
        "Q.No": "28",
        "Question": "What is the main function of the human respiratory system?",
        "Option A": "To digest food",
        "Option B": "To exchange gases",
        "Option C": "To circulate blood",
        "Option D": "To filter waste products",
        "Correct Option": "B",
        "Explanation": "The primary function of the respiratory system is gas exchange, providing oxygen and removing carbon dioxide."
    },
    {
        "Q.No": "29",
        "Question": "Which enzyme is responsible for breaking down starch in the mouth?",
        "Option A": "Amylase",
        "Option B": "Lipase",
        "Option C": "Protease",
        "Option D": "Lactase",
        "Correct Option": "A",
        "Explanation": "Amylase breaks down starch into simpler sugars in the mouth during digestion."
    },
    {
        "Q.No": "30",
        "Question": "How does the human circulatory system maintain homeostasis?",
        "Option A": "By maintaining body temperature",
        "Option B": "By pumping blood through the body",
        "Option C": "By exchanging gases with tissues",
        "Option D": "By controlling hormone levels",
        "Correct Option": "B",
        "Explanation": "The circulatory system helps maintain homeostasis by pumping blood, ensuring nutrient and gas transport."
    },
    {
        "Q.No": "31",
        "Question": "What is the main function of the roots in plants?",
        "Option A": "To produce food",
        "Option B": "To store water",
        "Option C": "To absorb water and minerals",
        "Option D": "To transport food",
        "Correct Option": "C",
        "Explanation": "The roots absorb water and minerals from the soil to nourish the plant."
    },
    {
        "Q.No": "32",
        "Question": "What type of circulatory system do plants have?",
        "Option A": "Open circulatory system",
        "Option B": "Closed circulatory system",
        "Option C": "Both open and closed systems",
        "Option D": "No circulatory system",
        "Correct Option": "D",
        "Explanation": "Plants do not have a circulatory system like animals but rely on diffusion and transpiration."
    },
    {
        "Q.No": "33",
        "Question": "Which organ in plants is primarily responsible for the uptake of water?",
        "Option A": "Leaves",
        "Option B": "Flowers",
        "Option C": "Roots",
        "Option D": "Stems",
        "Correct Option": "C",
        "Explanation": "The roots are responsible for absorbing water and minerals from the soil."
    },
    {
        "Q.No": "34",
        "Question": "What is the role of the heart in the circulatory system?",
        "Option A": "To pump oxygen",
        "Option B": "To pump blood",
        "Option C": "To filter waste",
        "Option D": "To store nutrients",
        "Correct Option": "B",
        "Explanation": "The heart pumps blood throughout the body, providing oxygen and nutrients to tissues."
    },
    {
        "Q.No": "35",
        "Question": "What is the function of the vascular bundle in plants?",
        "Option A": "To store water",
        "Option B": "To support the plant",
        "Option C": "To transport water, nutrients, and sugars",
        "Option D": "To produce chlorophyll",
        "Correct Option": "C",
        "Explanation": "The vascular bundle in plants transports water, nutrients, and sugars through the xylem and phloem."
    },
    {
        "Q.No": "36",
        "Question": "What is the role of the liver in digestion?",
        "Option A": "To produce bile",
        "Option B": "To absorb nutrients",
        "Option C": "To break down proteins",
        "Option D": "To store glucose",
        "Correct Option": "A",
        "Explanation": "The liver produces bile, which helps break down fats in the digestive process."
    },
    {
        "Q.No": "37",
        "Question": "What is the main site for the absorption of nutrients in humans?",
        "Option A": "Large intestine",
        "Option B": "Stomach",
        "Option C": "Small intestine",
        "Option D": "Mouth",
        "Correct Option": "C",
        "Explanation": "The small intestine is the primary site for nutrient absorption in humans."
    },
    {
        "Q.No": "38",
        "Question": "Which substance is essential for the transport of oxygen in human blood?",
        "Option A": "Hemoglobin",
        "Option B": "Plasma",
        "Option C": "White blood cells",
        "Option D": "Platelets",
        "Correct Option": "A",
        "Explanation": "Hemoglobin is a protein in red blood cells that binds to oxygen for transport."
    },
    {
        "Q.No": "39",
        "Question": "What is the primary function of the kidneys in humans?",
        "Option A": "Filtering waste products from blood",
        "Option B": "Pumping blood to the heart",
        "Option C": "Producing bile",
        "Option D": "Producing insulin",
        "Correct Option": "A",
        "Explanation": "The kidneys filter waste products and excess substances from the blood to form urine."
    },
    {
        "Q.No": "40",
        "Question": "What is the function of the human sweat glands?",
        "Option A": "To produce hormones",
        "Option B": "To release digestive enzymes",
        "Option C": "To regulate body temperature",
        "Option D": "To absorb water",
        "Correct Option": "C",
        "Explanation": "Sweat glands help regulate body temperature by releasing sweat, which cools the body."
    },
    {
        "Q.No": "41",
        "Question": "Which part of the plant helps in the process of transpiration?",
        "Option A": "Roots",
        "Option B": "Flowers",
        "Option C": "Leaves",
        "Option D": "Stems",
        "Correct Option": "C",
        "Explanation": "Transpiration occurs through the stomata in the leaves, where water vapor is released."
    },
    {
        "Q.No": "42",
        "Question": "What is the role of oxygen in cellular respiration?",
        "Option A": "To break down glucose",
        "Option B": "To help produce ATP",
        "Option C": "To remove waste products",
        "Option D": "To transport glucose",
        "Correct Option": "B",
        "Explanation": "Oxygen helps produce ATP by acting as the final electron acceptor in cellular respiration."
    },
    {
        "Q.No": "43",
        "Question": "How do plants transport water and nutrients from the soil to the leaves?",
        "Option A": "Through phloem",
        "Option B": "Through xylem",
        "Option C": "Through stomata",
        "Option D": "Through roots",
        "Correct Option": "B",
        "Explanation": "Xylem transports water and nutrients from the roots to the leaves."
    },
    {
        "Q.No": "44",
        "Question": "What is the main function of white blood cells in humans?",
        "Option A": "Carry oxygen",
        "Option B": "Fight infections",
        "Option C": "Aid digestion",
        "Option D": "Control blood clotting",
        "Correct Option": "B",
        "Explanation": "White blood cells are involved in the immune response, fighting infections and foreign invaders."
    },
    {
        "Q.No": "45",
        "Question": "How do animals obtain energy?",
        "Option A": "Through photosynthesis",
        "Option B": "By absorbing nutrients from the environment",
        "Option C": "By consuming other organisms",
        "Option D": "By recycling waste products",
        "Correct Option": "C",
        "Explanation": "Animals obtain energy by consuming other organisms in a process called heterotrophy."
    },
    {
        "Q.No": "46",
        "Question": "What is the process by which plants convert light energy into chemical energy?",
        "Option A": "Respiration",
        "Option B": "Photosynthesis",
        "Option C": "Transpiration",
        "Option D": "Germination",
        "Correct Option": "B",
        "Explanation": "Photosynthesis converts light energy into chemical energy stored in glucose."
    },
    {
        "Q.No": "47",
        "Question": "Which gas is produced during cellular respiration?",
        "Option A": "Oxygen",
        "Option B": "Carbon dioxide",
        "Option C": "Nitrogen",
        "Option D": "Hydrogen",
        "Correct Option": "B",
        "Explanation": "Carbon dioxide is produced as a waste product during cellular respiration."
    },
    {
        "Q.No": "48",
        "Question": "What is the primary role of the stomach in digestion?",
        "Option A": "To absorb nutrients",
        "Option B": "To break down food using acids and enzymes",
        "Option C": "To store bile",
        "Option D": "To circulate nutrients",
        "Correct Option": "B",
        "Explanation": "The stomach breaks down food using stomach acids and digestive enzymes."
    },
    {
        "Q.No": "49",
        "Question": "Which part of the plant absorbs most of the water and minerals?",
        "Option A": "Stem",
        "Option B": "Leaves",
        "Option C": "Roots",
        "Option D": "Flowers",
        "Correct Option": "C",
        "Explanation": "The roots absorb water and minerals from the soil for the plant’s nourishment."
    },
    {
        "Q.No": "50",
        "Question": "What happens during the process of inhalation in humans?",
        "Option A": "The diaphragm contracts, and the chest cavity expands",
        "Option B": "The diaphragm relaxes, and the chest cavity compresses",
        "Option C": "The lungs contract, and the ribs expand",
        "Option D": "The lungs fill with carbon dioxide",
        "Correct Option": "A",
        "Explanation": "During inhalation, the diaphragm contracts, and the chest cavity expands to allow air into the lungs."
    },
    {
        "Q.No": "51",
        "Question": "What is the function of the circulatory system in plants?",
        "Option A": "To transport water",
        "Option B": "To transport glucose",
        "Option C": "To transport oxygen",
        "Option D": "No circulatory system",
        "Correct Option": "A",
        "Explanation": "Plants have no circulatory system, but water is transported through xylem."
    },
    {
        "Q.No": "52",
        "Question": "What is the main byproduct of respiration in both plants and animals?",
        "Option A": "Oxygen",
        "Option B": "Nitrogen",
        "Option C": "Carbon dioxide",
        "Option D": "Glucose",
        "Correct Option": "C",
        "Explanation": "Carbon dioxide is produced during cellular respiration in both plants and animals."
    },
    {
        "Q.No": "53",
        "Question": "Which of the following structures in plants transports water and minerals?",
        "Option A": "Phloem",
        "Option B": "Xylem",
        "Option C": "Stomata",
        "Option D": "Leaf veins",
        "Correct Option": "B",
        "Explanation": "Xylem is responsible for transporting water and minerals from roots to leaves."
    },
    {
        "Q.No": "54",
        "Question": "What is the name of the pigment in plants that absorbs light energy?",
        "Option A": "Chlorophyll",
        "Option B": "Carotenoids",
        "Option C": "Hemoglobin",
        "Option D": "Melanin",
        "Correct Option": "A",
        "Explanation": "Chlorophyll absorbs light energy needed for photosynthesis in plants."
    },
    {
        "Q.No": "55",
        "Question": "What is the process by which plants use light energy to make food?",
        "Option A": "Respiration",
        "Option B": "Photosynthesis",
        "Option C": "Fermentation",
        "Option D": "Transpiration",
        "Correct Option": "B",
        "Explanation": "Photosynthesis is the process where plants convert light energy into food (glucose)."
    },
    {
        "Q.No": "56",
        "Question": "How do guard cells regulate the opening and closing of stomata in plants?",
        "Option A": "By controlling water flow",
        "Option B": "By regulating light absorption",
        "Option C": "By absorbing oxygen",
        "Option D": "By controlling turgor pressure",
        "Correct Option": "D",
        "Explanation": "Guard cells regulate stomata by controlling turgor pressure, allowing gas exchange."
    },
    {
        "Q.No": "57",
        "Question": "Which part of the digestive system is responsible for producing bile in humans?",
        "Option A": "Stomach",
        "Option B": "Liver",
        "Option C": "Pancreas",
        "Option D": "Gallbladder",
        "Correct Option": "B",
        "Explanation": "The liver produces bile, which aids in fat digestion."
    },
    {
        "Q.No": "58",
        "Question": "Where does the majority of gas exchange take place in humans?",
        "Option A": "Trachea",
        "Option B": "Bronchi",
        "Option C": "Alveoli",
        "Option D": "Pharynx",
        "Correct Option": "C",
        "Explanation": "The alveoli are the primary site of gas exchange in the lungs."
    },
    {
        "Q.No": "59",
        "Question": "What role do villi play in the human digestive system?",
        "Option A": "Absorbing nutrients",
        "Option B": "Breaking down fats",
        "Option C": "Producing bile",
        "Option D": "Transporting food",
        "Correct Option": "A",
        "Explanation": "Villi increase the surface area in the small intestine, aiding in nutrient absorption."
    },
    {
        "Q.No": "60",
        "Question": "What does the term \"\"autotrophic nutrition\"\" refer to?",
        "Option A": "Obtaining food from other organisms",
        "Option B": "Synthesizing food using light energy",
        "Option C": "Consuming dead organic matter",
        "Option D": "Absorbing nutrients from the soil",
        "Correct Option": "B",
        "Explanation": "Autotrophic nutrition refers to organisms, like plants, synthesizing their own food using light."
    },
    {
        "Q.No": "61",
        "Question": "What is the main product of the breakdown of glucose during cellular respiration?",
        "Option A": "Oxygen",
        "Option B": "Glucose",
        "Option C": "Water",
        "Option D": "ATP",
        "Correct Option": "D",
        "Explanation": "ATP (adenosine triphosphate) is the main product, providing energy for the cell."
    },
    {
        "Q.No": "62",
        "Question": "What is the name of the process by which glucose is broken down into energy in plants?",
        "Option A": "Transpiration",
        "Option B": "Photosynthesis",
        "Option C": "Cellular respiration",
        "Option D": "Germination",
        "Correct Option": "C",
        "Explanation": "Cellular respiration is the process where glucose is broken down to release energy in plants."
    },
    {
        "Q.No": "63",
        "Question": "What is the role of the stomata in plant leaves?",
        "Option A": "To absorb sunlight",
        "Option B": "To allow for gas exchange",
        "Option C": "To transport water",
        "Option D": "To produce sugars",
        "Correct Option": "B",
        "Explanation": "Stomata allow gases like oxygen and carbon dioxide to enter and exit the plant."
    },
    {
        "Q.No": "64",
        "Question": "Which of the following processes occurs in the mitochondria of cells?",
        "Option A": "Photosynthesis",
        "Option B": "Cellular respiration",
        "Option C": "Protein synthesis",
        "Option D": "DNA replication",
        "Correct Option": "B",
        "Explanation": "Cellular respiration occurs in the mitochondria to produce energy in the form of ATP."
    },
    {
        "Q.No": "65",
        "Question": "What is the primary function of the circulatory system in animals?",
        "Option A": "Pumping oxygen",
        "Option B": "Transporting blood",
        "Option C": "Digestion",
        "Option D": "Filtering waste",
        "Correct Option": "B",
        "Explanation": "The circulatory system's primary function is to transport blood, carrying oxygen, nutrients, and waste."
    },
    {
        "Q.No": "66",
        "Question": "What happens during exhalation in humans?",
        "Option A": "The diaphragm contracts, and the chest cavity expands",
        "Option B": "The diaphragm relaxes, and the chest cavity compresses",
        "Option C": "The diaphragm expands, and the chest cavity compresses",
        "Option D": "The lungs fill with oxygen",
        "Correct Option": "B",
        "Explanation": "During exhalation, the diaphragm relaxes, and the chest cavity compresses, pushing air out."
    },
    {
        "Q.No": "67",
        "Question": "Which gas do plants take in during photosynthesis?",
        "Option A": "Nitrogen",
        "Option B": "Oxygen",
        "Option C": "Carbon dioxide",
        "Option D": "Hydrogen",
        "Correct Option": "C",
        "Explanation": "Plants take in carbon dioxide from the air during photosynthesis."
    },
    {
        "Q.No": "68",
        "Question": "What is the function of red blood cells in humans?",
        "Option A": "To fight infections",
        "Option B": "To produce hormones",
        "Option C": "To transport oxygen",
        "Option D": "To regulate body temperature",
        "Correct Option": "C",
        "Explanation": "Red blood cells transport oxygen from the lungs to tissues and remove carbon dioxide."
    },
    {
        "Q.No": "69",
        "Question": "Which process in plants involves the conversion of solar energy into chemical energy?",
        "Option A": "Cellular respiration",
        "Option B": "Transpiration",
        "Option C": "Photosynthesis",
        "Option D": "Germination",
        "Correct Option": "C",
        "Explanation": "Photosynthesis involves converting solar energy into chemical energy stored in glucose."
    },
    {
        "Q.No": "70",
        "Question": "Which structure in plants is responsible for the uptake of nutrients and water from the soil?",
        "Option A": "Leaves",
        "Option B": "Flowers",
        "Option C": "Roots",
        "Option D": "Stems",
        "Correct Option": "C",
        "Explanation": "Roots are responsible for absorbing water and nutrients from the soil."
    },
    {
        "Q.No": "71",
        "Question": "What is the role of the pancreas in human digestion?",
        "Option A": "Producing bile",
        "Option B": "Breaking down carbohydrates",
        "Option C": "Secreting digestive enzymes",
        "Option D": "Storing glucose",
        "Correct Option": "C",
        "Explanation": "The pancreas secretes enzymes that help break down food in the small intestine."
    },
    {
        "Q.No": "72",
        "Question": "How do plants exchange gases?",
        "Option A": "Through roots",
        "Option B": "Through flowers",
        "Option C": "Through stomata",
        "Option D": "Through leaves",
        "Correct Option": "C",
        "Explanation": "Plants exchange gases through stomata located on the surface of leaves."
    },
    {
        "Q.No": "73",
        "Question": "What happens in the process of respiration in animals?",
        "Option A": "Oxygen is absorbed by cells and glucose is broken down for energy",
        "Option B": "Glucose is absorbed from the soil",
        "Option C": "Oxygen is released as a waste product",
        "Option D": "Carbon dioxide is absorbed from the atmosphere",
        "Correct Option": "A",
        "Explanation": "In respiration, oxygen is used to break down glucose for energy."
    },
    {
        "Q.No": "74",
        "Question": "In which part of the plant does most photosynthesis occur?",
        "Option A": "Roots",
        "Option B": "Flowers",
        "Option C": "Leaves",
        "Option D": "Stems",
        "Correct Option": "C",
        "Explanation": "Photosynthesis mainly occurs in the leaves, where chloroplasts and chlorophyll are present."
    },
    {
        "Q.No": "75",
        "Question": "What is the purpose of the human respiratory system?",
        "Option A": "To remove carbon dioxide from the body",
        "Option B": "To produce energy",
        "Option C": "To transport glucose",
        "Option D": "To excrete waste",
        "Correct Option": "A",
        "Explanation": "The primary purpose of the respiratory system is to exchange gases, removing carbon dioxide and bringing in oxygen."
    },
    {
        "Q.No": "76",
        "Question": "How is oxygen transported in the human body?",
        "Option A": "By red blood cells",
        "Option B": "By white blood cells",
        "Option C": "By platelets",
        "Option D": "In the lymph",
        "Correct Option": "A",
        "Explanation": "Oxygen is transported by red blood cells through hemoglobin."
    },
    {
        "Q.No": "77",
        "Question": "What is the main energy molecule used by cells in both animals and plants?",
        "Option A": "NADPH",
        "Option B": "ATP",
        "Option C": "Glucose",
        "Option D": "Oxygen",
        "Correct Option": "B",
        "Explanation": "ATP is the main energy molecule used by cells in both plants and animals."
    },
    {
        "Q.No": "78",
        "Question": "Which of the following is true about plant respiration?",
        "Option A": "It occurs only during the night",
        "Option B": "It is the same as photosynthesis",
        "Option C": "It occurs in the presence of sunlight",
        "Option D": "It releases oxygen as a byproduct",
        "Correct Option": "A",
        "Explanation": "Plant respiration occurs both day and night, but photosynthesis only occurs in the presence of sunlight."
    },
    {
        "Q.No": "79",
        "Question": "What is the function of the vascular system in plants?",
        "Option A": "To provide structural support",
        "Option B": "To transport water, nutrients, and sugars",
        "Option C": "To store food",
        "Option D": "To control gas exchange",
        "Correct Option": "B",
        "Explanation": "The vascular system in plants, consisting of xylem and phloem, transports water, nutrients, and sugars."
    },
    {
        "Q.No": "80",
        "Question": "What role does oxygen play in aerobic respiration?",
        "Option A": "It breaks down glucose",
        "Option B": "It acts as the final electron acceptor",
        "Option C": "It helps in the formation of glucose",
        "Option D": "It transports nutrients",
        "Correct Option": "B",
        "Explanation": "Oxygen serves as the final electron acceptor in aerobic respiration."
    },
    {
        "Q.No": "81",
        "Question": "Which of the following organs is responsible for filtering the blood in humans?",
        "Option A": "Lungs",
        "Option B": "Kidneys",
        "Option C": "Heart",
        "Option D": "Liver",
        "Correct Option": "B",
        "Explanation": "The kidneys filter the blood to remove waste products and excess substances."
    },
    {
        "Q.No": "82",
        "Question": "What is the role of phloem in plants?",
        "Option A": "Transporting water",
        "Option B": "Transporting sugars and organic compounds",
        "Option C": "Transporting oxygen",
        "Option D": "Transporting minerals",
        "Correct Option": "B",
        "Explanation": "Phloem transports sugars and organic compounds produced by photosynthesis throughout the plant."
    },
    {
        "Q.No": "83",
        "Question": "Which of the following is a byproduct of cellular respiration in humans?",
        "Option A": "Oxygen",
        "Option B": "Carbon dioxide",
        "Option C": "Nitrogen",
        "Option D": "Glucose",
        "Correct Option": "B",
        "Explanation": "Carbon dioxide is produced as a byproduct of cellular respiration in humans."
    },
    {
        "Q.No": "84",
        "Question": "What is the role of the human liver in digestion?",
        "Option A": "To produce bile",
        "Option B": "To filter blood",
        "Option C": "To break down glucose",
        "Option D": "To produce hormones",
        "Correct Option": "A",
        "Explanation": "The liver produces bile, which is important for the digestion and emulsification of fats."
    },
    {
        "Q.No": "85",
        "Question": "How do unicellular organisms perform the process of respiration?",
        "Option A": "Through specialized organs",
        "Option B": "By diffusion across the cell membrane",
        "Option C": "Through the circulatory system",
        "Option D": "By absorption of oxygen",
        "Correct Option": "B",
        "Explanation": "Unicellular organisms rely on diffusion across the cell membrane for respiration."
    },
    {
        "Q.No": "86",
        "Question": "What is the role of enzymes in digestion?",
        "Option A": "To break down complex molecules into simpler ones",
        "Option B": "To absorb nutrients",
        "Option C": "To produce glucose",
        "Option D": "To store fats",
        "Correct Option": "A",
        "Explanation": "Enzymes in the digestive system break down food into simpler molecules for absorption."
    },
    {
        "Q.No": "87",
        "Question": "Which of the following is a waste product of photosynthesis in plants?",
        "Option A": "Water",
        "Option B": "Oxygen",
        "Option C": "Carbon dioxide",
        "Option D": "Glucose",
        "Correct Option": "B",
        "Explanation": "Oxygen is released as a waste product during photosynthesis in plants."
    },
    {
        "Q.No": "88",
        "Question": "What happens to the water absorbed by plants during transpiration?",
        "Option A": "It is used in photosynthesis",
        "Option B": "It is released through the roots",
        "Option C": "It is stored in the stem",
        "Option D": "It evaporates through the stomata",
        "Correct Option": "D",
        "Explanation": "Water absorbed by plants is lost as vapor through the stomata in the process of transpiration."
    },
    {
        "Q.No": "89",
        "Question": "What is the main function of the digestive system in humans?",
        "Option A": "To absorb nutrients",
        "Option B": "To break down food",
        "Option C": "To transport blood",
        "Option D": "To control temperature",
        "Correct Option": "B",
        "Explanation": "The digestive system is responsible for breaking down food into absorbable nutrients."
    },
    {
        "Q.No": "90",
        "Question": "What is the role of the large intestine in digestion?",
        "Option A": "To absorb nutrients",
        "Option B": "To absorb water and form feces",
        "Option C": "To secrete enzymes",
        "Option D": "To produce bile",
        "Correct Option": "B",
        "Explanation": "The large intestine absorbs water and forms feces for excretion."
    },
    {
        "Q.No": "91",
        "Question": "How do plants obtain nitrogen for growth?",
        "Option A": "Through the roots from the soil",
        "Option B": "Through their leaves",
        "Option C": "From the atmosphere",
        "Option D": "Through symbiosis with nitrogen-fixing bacteria",
        "Correct Option": "D",
        "Explanation": "Plants obtain nitrogen through symbiosis with nitrogen-fixing bacteria in their roots."
    },
    {
        "Q.No": "92",
        "Question": "What is the main form of energy stored in plant cells?",
        "Option A": "Oxygen",
        "Option B": "ATP",
        "Option C": "Glucose",
        "Option D": "Nitrogen",
        "Correct Option": "C",
        "Explanation": "Plants store energy in the form of glucose, produced during photosynthesis."
    },
    {
        "Q.No": "93",
        "Question": "What is the role of the human heart in the circulatory system?",
        "Option A": "To transport oxygen",
        "Option B": "To regulate temperature",
        "Option C": "To pump blood",
        "Option D": "To produce nutrients",
        "Correct Option": "C",
        "Explanation": "The heart pumps blood, circulating oxygen, nutrients, and waste products throughout the body."
    },
    {
        "Q.No": "94",
        "Question": "What is the main function of the respiratory system in animals?",
        "Option A": "To exchange gases between the body and the environment",
        "Option B": "To digest food",
        "Option C": "To circulate blood",
        "Option D": "To filter waste",
        "Correct Option": "A",
        "Explanation": "The primary function of the respiratory system is gas exchange, absorbing oxygen and expelling carbon dioxide."
    },
    {
        "Q.No": "95",
        "Question": "How is carbon dioxide removed from the body during exhalation?",
        "Option A": "It is absorbed by red blood cells",
        "Option B": "It diffuses into the lungs and is exhaled",
        "Option C": "It is transported through the veins",
        "Option D": "It is excreted through sweat",
        "Correct Option": "B",
        "Explanation": "Carbon dioxide diffuses from the blood into the lungs and is exhaled."
    },
    {
        "Q.No": "96",
        "Question": "What is the purpose of the human digestive system?",
        "Option A": "To break down food into simpler molecules",
        "Option B": "To transport nutrients to the body",
        "Option C": "To regulate blood sugar levels",
        "Option D": "To produce energy",
        "Correct Option": "A",
        "Explanation": "The digestive system breaks down food into simpler molecules for absorption."
    },
    {
        "Q.No": "97",
        "Question": "What is the process by which plants take in water from the soil?",
        "Option A": "Transpiration",
        "Option B": "Osmosis",
        "Option C": "Diffusion",
        "Option D": "Active transport",
        "Correct Option": "B",
        "Explanation": "Water is absorbed by plants through osmosis, especially in the roots."
    },
    {
        "Q.No": "98",
        "Question": "What happens in the process of glycolysis in cellular respiration?",
        "Option A": "Glucose is broken down into pyruvate",
        "Option B": "Oxygen is consumed",
        "Option C": "Water is produced",
        "Option D": "ATP is synthesized",
        "Correct Option": "A",
        "Explanation": "Glycolysis is the process where glucose is broken down into pyruvate, releasing energy."
    },
    {
        "Q.No": "99",
        "Question": "What is the role of oxygen in the process of aerobic respiration?",
        "Option A": "To break down glucose",
        "Option B": "To help produce ATP",
        "Option C": "To transport glucose",
        "Option D": "To break down carbon dioxide",
        "Correct Option": "B",
        "Explanation": "Oxygen acts as the final electron acceptor in aerobic respiration, helping produce ATP."
    },
    {
        "Q.No": "100",
        "Question": "Which part of the plant is primarily responsible for the synthesis of food?",
        "Option A": "Roots",
        "Option B": "Stems",
        "Option C": "Leaves",
        "Option D": "Flowers",
        "Correct Option": "C",
        "Explanation": "The leaves are primarily responsible for the synthesis of food through photosynthesis."
    }
      ]
    },
    "Cell Biology": {
      color: "#c0392b",
      icon: "🦠",
      questions: [
        {
        "Q.No": "1",
        "Question": "What is the main characteristic of prokaryotic cells?",
        "Option A": "They have a membrane-bound nucleus",
        "Option B": "They lack a cell membrane",
        "Option C": "They lack a membrane-bound nucleus",
        "Option D": "They have multiple chromosomes",
        "Correct Option": "C",
        "Explanation": "Prokaryotes lack a membrane-bound nucleus, unlike eukaryotes."
    },
    {
        "Q.No": "2",
        "Question": "Which of the following is a prokaryotic organism?",
        "Option A": "Fungus",
        "Option B": "Bacterium",
        "Option C": "Algae",
        "Option D": "Plant",
        "Correct Option": "B",
        "Explanation": "Bacteria are prokaryotic organisms, unlike fungi, algae, and plants."
    },
    {
        "Q.No": "3",
        "Question": "Prokaryotic cells have which of the following structures?",
        "Option A": "Nucleus",
        "Option B": "Nucleoid",
        "Option C": "Golgi apparatus",
        "Option D": "Mitochondria",
        "Correct Option": "B",
        "Explanation": "Prokaryotic cells contain a nucleoid instead of a membrane-bound nucleus."
    },
    {
        "Q.No": "4",
        "Question": "Which of the following is absent in prokaryotic cells?",
        "Option A": "Ribosomes",
        "Option B": "Cytoplasm",
        "Option C": "Nucleus",
        "Option D": "Cell wall",
        "Correct Option": "C",
        "Explanation": "Prokaryotes do not have a nucleus; they have a nucleoid region."
    },
    {
        "Q.No": "5",
        "Question": "What is the primary function of the plasmid in prokaryotic cells?",
        "Option A": "Protein synthesis",
        "Option B": "Genetic recombination",
        "Option C": "Energy production",
        "Option D": "Photosynthesis",
        "Correct Option": "B",
        "Explanation": "Plasmids carry additional genetic material that can help in genetic recombination."
    },
    {
        "Q.No": "6",
        "Question": "Which of the following is a characteristic feature of prokaryotic cell division?",
        "Option A": "Meiosis",
        "Option B": "Mitosis",
        "Option C": "Binary fission",
        "Option D": "Budding",
        "Correct Option": "C",
        "Explanation": "Prokaryotes divide by binary fission, a simple form of cell division."
    },
    {
        "Q.No": "7",
        "Question": "In prokaryotic cells, the cell wall is made of which substance?",
        "Option A": "Chitin",
        "Option B": "Cellulose",
        "Option C": "Peptidoglycan",
        "Option D": "Lignin",
        "Correct Option": "C",
        "Explanation": "Peptidoglycan is a key component of the prokaryotic cell wall, particularly in bacteria."
    },
    {
        "Q.No": "8",
        "Question": "What type of genetic material is found in prokaryotic cells?",
        "Option A": "DNA only",
        "Option B": "RNA only",
        "Option C": "DNA and RNA",
        "Option D": "Circular DNA",
        "Correct Option": "D",
        "Explanation": "Prokaryotes typically have a circular form of DNA known as the nucleoid."
    },
    {
        "Q.No": "9",
        "Question": "Prokaryotes differ from eukaryotes in that they lack which of the following?",
        "Option A": "Ribosomes",
        "Option B": "Mitochondria",
        "Option C": "Plasma membrane",
        "Option D": "Cytoplasm",
        "Correct Option": "B",
        "Explanation": "Prokaryotes lack mitochondria, which are present in eukaryotic cells."
    },
    {
        "Q.No": "10",
        "Question": "What is the role of ribosomes in prokaryotic cells?",
        "Option A": "Protein synthesis",
        "Option B": "Energy production",
        "Option C": "DNA replication",
        "Option D": "Photosynthesis",
        "Correct Option": "A",
        "Explanation": "Ribosomes are responsible for protein synthesis in prokaryotes."
    },
    {
        "Q.No": "11",
        "Question": "Which structure protects prokaryotic cells and helps in adhesion to surfaces?",
        "Option A": "Capsule",
        "Option B": "Ribosomes",
        "Option C": "Cytoplasm",
        "Option D": "Flagella",
        "Correct Option": "A",
        "Explanation": "The capsule protects and helps in adhesion in prokaryotic cells."
    },
    {
        "Q.No": "12",
        "Question": "Which of the following is a function of the flagella in prokaryotic cells?",
        "Option A": "DNA replication",
        "Option B": "Locomotion",
        "Option C": "Photosynthesis",
        "Option D": "Protein synthesis",
        "Correct Option": "B",
        "Explanation": "Flagella help in the movement (locomotion) of prokaryotic cells."
    },
    {
        "Q.No": "13",
        "Question": "What is the function of the nucleoid in prokaryotic cells?",
        "Option A": "Storage of water",
        "Option B": "Protein synthesis",
        "Option C": "Genetic material storage",
        "Option D": "Transport of nutrients",
        "Correct Option": "C",
        "Explanation": "The nucleoid stores the genetic material (DNA) in prokaryotic cells."
    },
    {
        "Q.No": "14",
        "Question": "Which of the following is found in the cytoplasm of prokaryotic cells?",
        "Option A": "Nucleolus",
        "Option B": "Ribosomes",
        "Option C": "Mitochondria",
        "Option D": "Endoplasmic reticulum",
        "Correct Option": "B",
        "Explanation": "Ribosomes are found in the cytoplasm of prokaryotes for protein synthesis."
    },
    {
        "Q.No": "15",
        "Question": "Which of the following best describes prokaryotic chromosomes?",
        "Option A": "Linear and complex",
        "Option B": "Circular and single",
        "Option C": "Linear and multiple",
        "Option D": "Circular and multiple",
        "Correct Option": "B",
        "Explanation": "Prokaryotic chromosomes are circular and typically exist as a single copy."
    },
    {
        "Q.No": "16",
        "Question": "Prokaryotic cells lack which of the following structures?",
        "Option A": "Cytoplasm",
        "Option B": "Golgi apparatus",
        "Option C": "Plasma membrane",
        "Option D": "Ribosomes",
        "Correct Option": "B",
        "Explanation": "Prokaryotes do not have a Golgi apparatus, unlike eukaryotes."
    },
    {
        "Q.No": "17",
        "Question": "The prokaryotic cell membrane is primarily composed of which substance?",
        "Option A": "Lipid bilayer",
        "Option B": "Protein layers",
        "Option C": "Peptidoglycan",
        "Option D": "Chitin",
        "Correct Option": "A",
        "Explanation": "Prokaryotic cell membranes are made up of a lipid bilayer, similar to eukaryotes."
    },
    {
        "Q.No": "18",
        "Question": "Which of the following is a prokaryotic kingdom?",
        "Option A": "Plantae",
        "Option B": "Protista",
        "Option C": "Eubacteria",
        "Option D": "Animalia",
        "Correct Option": "C",
        "Explanation": "Eubacteria is one of the kingdoms of prokaryotes."
    },
    {
        "Q.No": "19",
        "Question": "The structure responsible for DNA transfer between prokaryotic cells is called?",
        "Option A": "Capsule",
        "Option B": "Plasmid",
        "Option C": "Pili",
        "Option D": "Flagella",
        "Correct Option": "C",
        "Explanation": "Pili are used by prokaryotes to transfer DNA during conjugation."
    },
    {
        "Q.No": "20",
        "Question": "What is the shape of most prokaryotic chromosomes?",
        "Option A": "Circular",
        "Option B": "Oval",
        "Option C": "Linear",
        "Option D": "Rectangular",
        "Correct Option": "A",
        "Explanation": "Most prokaryotic chromosomes are circular in shape."
    },
    {
        "Q.No": "21",
        "Question": "Which of the following best describes the genetic material in prokaryotes?",
        "Option A": "A large single chromosome",
        "Option B": "Multiple linear chromosomes",
        "Option C": "A single linear chromosome",
        "Option D": "No genetic material",
        "Correct Option": "A",
        "Explanation": "Prokaryotes typically have a single large, circular chromosome."
    },
    {
        "Q.No": "22",
        "Question": "What structure is responsible for the motility of some prokaryotic cells?",
        "Option A": "Cilia",
        "Option B": "Flagella",
        "Option C": "Pili",
        "Option D": "Nucleoid",
        "Correct Option": "B",
        "Explanation": "Flagella are responsible for motility in some prokaryotic cells."
    },
    {
        "Q.No": "23",
        "Question": "What kind of organisms are found in the kingdom Archaebacteria?",
        "Option A": "Prokaryotic and extreme environment dwellers",
        "Option B": "Prokaryotic and photosynthetic",
        "Option C": "Eukaryotic and fungi",
        "Option D": "Eukaryotic and multicellular",
        "Correct Option": "A",
        "Explanation": "Archaebacteria are prokaryotic organisms that thrive in extreme environments."
    },
    {
        "Q.No": "24",
        "Question": "The process in which prokaryotic cells exchange genetic material through pili is called?",
        "Option A": "Binary fission",
        "Option B": "Conjugation",
        "Option C": "Budding",
        "Option D": "Mitosis",
        "Correct Option": "B",
        "Explanation": "Conjugation is the process by which prokaryotic cells exchange genetic material via pili."
    },
    {
        "Q.No": "25",
        "Question": "In which environment are Archaebacteria commonly found?",
        "Option A": "Salty lakes and hot springs",
        "Option B": "Soil",
        "Option C": "Oceans",
        "Option D": "Freshwater lakes",
        "Correct Option": "A",
        "Explanation": "Archaebacteria are commonly found in extreme environments, such as salty lakes and hot springs."
    },
    {
        "Q.No": "26",
        "Question": "Which of the following is a type of prokaryotic cell wall composition?",
        "Option A": "Chitin",
        "Option B": "Cellulose",
        "Option C": "Peptidoglycan",
        "Option D": "Pectin",
        "Correct Option": "C",
        "Explanation": "Prokaryotic cell walls are made of peptidoglycan, especially in bacteria."
    },
    {
        "Q.No": "27",
        "Question": "The process of binary fission in prokaryotes is similar to which process in eukaryotes?",
        "Option A": "Mitosis",
        "Option B": "Meiosis",
        "Option C": "Cytokinesis",
        "Option D": "Gamete formation",
        "Correct Option": "A",
        "Explanation": "Binary fission is similar to mitosis, but it occurs much simpler in prokaryotes."
    },
    {
        "Q.No": "28",
        "Question": "The ribosomes in prokaryotes are different from eukaryotic ribosomes in that they are?",
        "Option A": "Larger in size",
        "Option B": "Smaller in size",
        "Option C": "More complex",
        "Option D": "Made of different subunits",
        "Correct Option": "B",
        "Explanation": "Prokaryotic ribosomes are smaller (70S) compared to eukaryotic ribosomes (80S)."
    },
    {
        "Q.No": "29",
        "Question": "What is the function of the capsule in prokaryotic cells?",
        "Option A": "Protects the cell and helps in adhesion",
        "Option B": "Assists in photosynthesis",
        "Option C": "Synthesizes proteins",
        "Option D": "Stores genetic material",
        "Correct Option": "A",
        "Explanation": "The capsule protects the cell and helps in adhesion to surfaces."
    },
    {
        "Q.No": "30",
        "Question": "Which of the following is a characteristic feature of prokaryotic flagella?",
        "Option A": "Made of protein filaments",
        "Option B": "Found only in bacteria",
        "Option C": "Used for attachment",
        "Option D": "Found in eukaryotes",
        "Correct Option": "A",
        "Explanation": "Prokaryotic flagella are made of protein filaments and help in movement."
    },
    {
        "Q.No": "31",
        "Question": "What type of cell division occurs in prokaryotic cells?",
        "Option A": "Meiosis",
        "Option B": "Mitosis",
        "Option C": "Binary fission",
        "Option D": "Budding",
        "Correct Option": "C",
        "Explanation": "Prokaryotes divide by binary fission, not by mitosis or meiosis."
    },
    {
        "Q.No": "32",
        "Question": "Which of the following is an example of a prokaryotic organism?",
        "Option A": "Yeast",
        "Option B": "Bacterium",
        "Option C": "Mushroom",
        "Option D": "Protozoa",
        "Correct Option": "B",
        "Explanation": "Bacteria are prokaryotic organisms, unlike yeast or mushrooms."
    },
    {
        "Q.No": "33",
        "Question": "Which part of the prokaryotic cell stores genetic information?",
        "Option A": "Nucleoid region",
        "Option B": "Ribosomes",
        "Option C": "Cytoplasm",
        "Option D": "Plasma membrane",
        "Correct Option": "A",
        "Explanation": "The nucleoid region stores the genetic material in prokaryotic cells."
    },
    {
        "Q.No": "34",
        "Question": "What is the main difference between prokaryotes and eukaryotes?",
        "Option A": "Prokaryotes lack a membrane-bound nucleus",
        "Option B": "Eukaryotes lack ribosomes",
        "Option C": "Prokaryotes have no cell membrane",
        "Option D": "Eukaryotes are unicellular",
        "Correct Option": "A",
        "Explanation": "Prokaryotes lack a membrane-bound nucleus, unlike eukaryotes."
    },
    {
        "Q.No": "35",
        "Question": "Which of the following structures is NOT found in prokaryotic cells?",
        "Option A": "Plasma membrane",
        "Option B": "Ribosomes",
        "Option C": "Mitochondria",
        "Option D": "Cytoplasm",
        "Correct Option": "C",
        "Explanation": "Mitochondria are absent in prokaryotic cells; they are found in eukaryotic cells."
    },
    {
        "Q.No": "36",
        "Question": "What is the name of the protective outermost layer of some prokaryotes?",
        "Option A": "Capsule",
        "Option B": "Flagella",
        "Option C": "Pili",
        "Option D": "Nucleoid",
        "Correct Option": "A",
        "Explanation": "Some prokaryotes have a capsule that protects them from environmental stress."
    },
    {
        "Q.No": "37",
        "Question": "Which of the following is true about the DNA in prokaryotic cells?",
        "Option A": "It is found in the nucleus",
        "Option B": "It is linear",
        "Option C": "It is circular",
        "Option D": "It is contained in a membrane-bound vesicle",
        "Correct Option": "C",
        "Explanation": "Prokaryotic DNA is typically circular and located in the nucleoid region."
    },
    {
        "Q.No": "38",
        "Question": "Which of the following features do prokaryotic cells lack?",
        "Option A": "A plasma membrane",
        "Option B": "A cytoskeleton",
        "Option C": "Ribosomes",
        "Option D": "Mitochondria",
        "Correct Option": "D",
        "Explanation": "Prokaryotes do not have mitochondria, unlike eukaryotic cells."
    },
    {
        "Q.No": "39",
        "Question": "What is the role of pili in prokaryotic cells?",
        "Option A": "To help in locomotion",
        "Option B": "To help in DNA transfer",
        "Option C": "To provide energy",
        "Option D": "To produce proteins",
        "Correct Option": "B",
        "Explanation": "Pili help in DNA transfer between prokaryotic cells during conjugation."
    },
    {
        "Q.No": "40",
        "Question": "Which of the following is an example of a prokaryotic cell?",
        "Option A": "Plant cell",
        "Option B": "Animal cell",
        "Option C": "Bacterium",
        "Option D": "Yeast cell",
        "Correct Option": "C",
        "Explanation": "Bacteria are classic examples of prokaryotic cells."
    },
    {
        "Q.No": "41",
        "Question": "How do prokaryotic cells obtain energy?",
        "Option A": "Through photosynthesis only",
        "Option B": "Through cellular respiration only",
        "Option C": "They do not require energy",
        "Option D": "Through various biochemical processes",
        "Correct Option": "D",
        "Explanation": "Prokaryotes can obtain energy through various processes like respiration and photosynthesis."
    },
    {
        "Q.No": "42",
        "Question": "What is the function of the cell membrane in prokaryotic cells?",
        "Option A": "To protect the cell from viruses",
        "Option B": "To control the movement of substances in and out",
        "Option C": "To store nutrients",
        "Option D": "To produce energy",
        "Correct Option": "B",
        "Explanation": "The cell membrane controls the movement of substances in and out of the prokaryotic cell."
    },
    {
        "Q.No": "43",
        "Question": "What is the term for the structure that surrounds the plasma membrane in some prokaryotic cells?",
        "Option A": "Capsule",
        "Option B": "Cytoplasm",
        "Option C": "Nucleoid",
        "Option D": "Endospore",
        "Correct Option": "A",
        "Explanation": "The capsule surrounds the plasma membrane and helps protect the cell."
    },
    {
        "Q.No": "44",
        "Question": "Which of the following processes do prokaryotic cells undergo to reproduce?",
        "Option A": "Binary fission",
        "Option B": "Meiosis",
        "Option C": "Mitosis",
        "Option D": "Budding",
        "Correct Option": "A",
        "Explanation": "Prokaryotic cells reproduce by binary fission, a simple form of cell division."
    },
    {
        "Q.No": "45",
        "Question": "In what way is the flagella of prokaryotes different from those of eukaryotes?",
        "Option A": "Prokaryotic flagella are much larger",
        "Option B": "Prokaryotic flagella rotate, while eukaryotic flagella whip",
        "Option C": "Prokaryotic flagella are not made of proteins",
        "Option D": "Eukaryotic flagella have no function",
        "Correct Option": "B",
        "Explanation": "Prokaryotic flagella rotate, while eukaryotic flagella whip to move."
    },
    {
        "Q.No": "46",
        "Question": "What is the shape of the chromosomes in prokaryotes?",
        "Option A": "Circular",
        "Option B": "Linear",
        "Option C": "Rod-shaped",
        "Option D": "Oval",
        "Correct Option": "A",
        "Explanation": "Prokaryotic chromosomes are typically circular."
    },
    {
        "Q.No": "47",
        "Question": "Which of the following is true about prokaryotic ribosomes?",
        "Option A": "They are larger than eukaryotic ribosomes",
        "Option B": "They are smaller than eukaryotic ribosomes",
        "Option C": "They lack a subunit",
        "Option D": "They are not involved in protein synthesis",
        "Correct Option": "B",
        "Explanation": "Prokaryotic ribosomes are smaller (70S) than those found in eukaryotes (80S)."
    },
    {
        "Q.No": "48",
        "Question": "Which of the following structures is responsible for prokaryotic cell movement?",
        "Option A": "Cilia",
        "Option B": "Pili",
        "Option C": "Flagella",
        "Option D": "Cytoplasm",
        "Correct Option": "C",
        "Explanation": "Flagella are the structures responsible for movement in some prokaryotic cells."
    },
    {
        "Q.No": "49",
        "Question": "What is the primary role of prokaryotic ribosomes?",
        "Option A": "Protein synthesis",
        "Option B": "Energy production",
        "Option C": "Genetic material storage",
        "Option D": "DNA replication",
        "Correct Option": "A",
        "Explanation": "Ribosomes in prokaryotic cells are responsible for protein synthesis."
    },
    {
        "Q.No": "50",
        "Question": "What distinguishes the cell wall of archaebacteria from eubacteria?",
        "Option A": "The presence of cellulose",
        "Option B": "The presence of peptidoglycan",
        "Option C": "The presence of pseudomurein",
        "Option D": "The absence of any cell wall",
        "Correct Option": "C",
        "Explanation": "Archaebacteria cell walls contain pseudomurein, unlike eubacteria which have peptidoglycan."
    },
    {
        "Q.No": "51",
        "Question": "Which of the following prokaryotic cells can perform photosynthesis?",
        "Option A": "Cyanobacteria",
        "Option B": "Bacteria",
        "Option C": "Archaebacteria",
        "Option D": "E. coli",
        "Correct Option": "A",
        "Explanation": "Cyanobacteria are prokaryotes capable of photosynthesis."
    },
    {
        "Q.No": "52",
        "Question": "What is the term for the region in prokaryotic cells where the DNA is concentrated?",
        "Option A": "Nucleus",
        "Option B": "Cytoplasm",
        "Option C": "Nucleoid",
        "Option D": "Golgi body",
        "Correct Option": "C",
        "Explanation": "In prokaryotic cells, the nucleoid region contains the cell's genetic material."
    },
    {
        "Q.No": "53",
        "Question": "Which of the following structures assists prokaryotic cells in exchanging genetic material?",
        "Option A": "Capsule",
        "Option B": "Flagella",
        "Option C": "Plasmid",
        "Option D": "Pili",
        "Correct Option": "D",
        "Explanation": "Pili are used for genetic material exchange during conjugation in prokaryotes."
    },
    {
        "Q.No": "54",
        "Question": "The DNA in prokaryotic cells is primarily found in which shape?",
        "Option A": "Linear",
        "Option B": "Circular",
        "Option C": "Rod-shaped",
        "Option D": "Spherical",
        "Correct Option": "B",
        "Explanation": "The DNA in prokaryotic cells is circular in shape, stored in the nucleoid region."
    },
    {
        "Q.No": "55",
        "Question": "Which type of prokaryotic cell can survive in extreme environments such as hot springs?",
        "Option A": "Eubacteria",
        "Option B": "Archaebacteria",
        "Option C": "Cyanobacteria",
        "Option D": "All prokaryotes",
        "Correct Option": "B",
        "Explanation": "Archaebacteria are known to survive in extreme environments."
    },
    {
        "Q.No": "56",
        "Question": "What is the function of peptidoglycan in the prokaryotic cell wall?",
        "Option A": "To provide structure and rigidity",
        "Option B": "To help in motility",
        "Option C": "To synthesize proteins",
        "Option D": "To store energy",
        "Correct Option": "A",
        "Explanation": "Peptidoglycan provides structure and rigidity to the prokaryotic cell wall."
    },
    {
        "Q.No": "57",
        "Question": "Which of the following is NOT a characteristic of prokaryotes?",
        "Option A": "No membrane-bound organelles",
        "Option B": "A single chromosome",
        "Option C": "A defined nucleus",
        "Option D": "A simple structure",
        "Correct Option": "C",
        "Explanation": "Prokaryotes lack a defined nucleus and have simpler cellular structures compared to eukaryotes."
    },
    {
        "Q.No": "58",
        "Question": "Which of the following best describes the genetic makeup of prokaryotic cells?",
        "Option A": "Multiple chromosomes",
        "Option B": "Circular DNA",
        "Option C": "Linear DNA",
        "Option D": "Linear and multiple chromosomes",
        "Correct Option": "B",
        "Explanation": "Prokaryotic cells typically have circular DNA, unlike eukaryotic cells with linear chromosomes."
    },
    {
        "Q.No": "59",
        "Question": "Which of the following processes does NOT occur in prokaryotic cells?",
        "Option A": "Photosynthesis",
        "Option B": "Cellular respiration",
        "Option C": "DNA replication",
        "Option D": "Meiosis",
        "Correct Option": "D",
        "Explanation": "Prokaryotes do not undergo meiosis; they reproduce through binary fission."
    },
    {
        "Q.No": "60",
        "Question": "What is the main structural difference between prokaryotic and eukaryotic cells?",
        "Option A": "Prokaryotes have a nucleus",
        "Option B": "Eukaryotes have a membrane-bound nucleus",
        "Option C": "Prokaryotes lack ribosomes",
        "Option D": "Eukaryotes have simpler structures",
        "Correct Option": "B",
        "Explanation": "The main difference is that eukaryotes have a membrane-bound nucleus, whereas prokaryotes do not."
    },
    {
        "Q.No": "61",
        "Question": "What is the function of pili in prokaryotic cells?",
        "Option A": "Motility",
        "Option B": "Genetic transfer",
        "Option C": "Energy production",
        "Option D": "Protein synthesis",
        "Correct Option": "B",
        "Explanation": "Pili play a key role in genetic transfer between prokaryotic cells."
    },
    {
        "Q.No": "62",
        "Question": "What is the function of the plasma membrane in prokaryotic cells?",
        "Option A": "To synthesize proteins",
        "Option B": "To control the movement of substances",
        "Option C": "To store genetic information",
        "Option D": "To protect from external toxins",
        "Correct Option": "B",
        "Explanation": "The plasma membrane controls the passage of substances in and out of the prokaryotic cell."
    },
    {
        "Q.No": "63",
        "Question": "What is the structure that surrounds the plasma membrane in some prokaryotic cells?",
        "Option A": "Capsule",
        "Option B": "Flagella",
        "Option C": "Cytoplasm",
        "Option D": "Nucleoid",
        "Correct Option": "A",
        "Explanation": "The capsule surrounds the plasma membrane in some prokaryotic cells for protection."
    },
    {
        "Q.No": "64",
        "Question": "Prokaryotic cells are typically smaller than eukaryotic cells. What is the average size range of prokaryotic cells?",
        "Option A": "10-100 micrometers",
        "Option B": "0.1-10 micrometers",
        "Option C": "1-5 micrometers",
        "Option D": "1-10 nanometers",
        "Correct Option": "B",
        "Explanation": "Prokaryotic cells typically range from 0.1 to 10 micrometers in size."
    },
    {
        "Q.No": "65",
        "Question": "Which of the following is a prokaryotic organism that can cause disease?",
        "Option A": "Yeast",
        "Option B": "Staphylococcus",
        "Option C": "Fungi",
        "Option D": "Algae",
        "Correct Option": "B",
        "Explanation": "Staphylococcus is a type of bacteria that can cause diseases in humans."
    },
    {
        "Q.No": "66",
        "Question": "Which of the following is NOT a prokaryotic feature?",
        "Option A": "Simple structure",
        "Option B": "Lack of membrane-bound organelles",
        "Option C": "Circular chromosomes",
        "Option D": "Presence of mitochondria",
        "Correct Option": "D",
        "Explanation": "Prokaryotes lack mitochondria, which are present in eukaryotic cells."
    },
    {
        "Q.No": "67",
        "Question": "How do prokaryotic cells obtain energy?",
        "Option A": "Through cellular respiration or fermentation",
        "Option B": "Through photosynthesis only",
        "Option C": "Through the digestion of food",
        "Option D": "Through sunlight absorption",
        "Correct Option": "A",
        "Explanation": "Prokaryotic cells obtain energy through cellular respiration or fermentation."
    },
    {
        "Q.No": "68",
        "Question": "What is the role of the cytoplasm in prokaryotic cells?",
        "Option A": "It stores nutrients",
        "Option B": "It aids in cell division",
        "Option C": "It provides structure",
        "Option D": "It is where cellular processes occur",
        "Correct Option": "D",
        "Explanation": "The cytoplasm is where most of the metabolic processes occur in prokaryotic cells."
    },
    {
        "Q.No": "69",
        "Question": "How do prokaryotic cells differ from eukaryotic cells in terms of organelles?",
        "Option A": "Prokaryotes have more organelles",
        "Option B": "Prokaryotes lack membrane-bound organelles",
        "Option C": "Eukaryotes have fewer organelles",
        "Option D": "Prokaryotes have a nucleus",
        "Correct Option": "B",
        "Explanation": "Prokaryotic cells lack membrane-bound organelles, unlike eukaryotic cells."
    },
    {
        "Q.No": "70",
        "Question": "What type of prokaryotic cells are capable of nitrogen fixation?",
        "Option A": "Cyanobacteria",
        "Option B": "Eubacteria",
        "Option C": "Archaebacteria",
        "Option D": "All prokaryotes",
        "Correct Option": "A",
        "Explanation": "Cyanobacteria are capable of nitrogen fixation, an important process for the environment."
    },
    {
        "Q.No": "71",
        "Question": "What structure in prokaryotic cells helps them attach to surfaces?",
        "Option A": "Flagella",
        "Option B": "Pili",
        "Option C": "Capsule",
        "Option D": "Cytoplasm",
        "Correct Option": "C",
        "Explanation": "The capsule helps prokaryotic cells attach to surfaces."
    },
    {
        "Q.No": "72",
        "Question": "Which of the following is a characteristic of eubacteria?",
        "Option A": "They have a nucleus",
        "Option B": "They are larger than archaebacteria",
        "Option C": "They have a peptidoglycan cell wall",
        "Option D": "They live only in extreme conditions",
        "Correct Option": "C",
        "Explanation": "Eubacteria have a peptidoglycan cell wall and are not restricted to extreme environments."
    },
    {
        "Q.No": "73",
        "Question": "How do prokaryotic cells regulate what enters or exits the cell?",
        "Option A": "Through the cytoplasm",
        "Option B": "Through the plasma membrane",
        "Option C": "Through the cell wall",
        "Option D": "Through the ribosomes",
        "Correct Option": "B",
        "Explanation": "The plasma membrane controls the movement of substances in and out of the prokaryotic cell."
    },
    {
        "Q.No": "74",
        "Question": "What structure in prokaryotic cells helps in the exchange of genetic material?",
        "Option A": "Flagella",
        "Option B": "Pili",
        "Option C": "Ribosomes",
        "Option D": "Capsule",
        "Correct Option": "B",
        "Explanation": "Pili are involved in the exchange of genetic material in prokaryotic cells."
    },
    {
        "Q.No": "75",
        "Question": "Which of the following is the main function of the prokaryotic capsule?",
        "Option A": "To help in energy production",
        "Option B": "To assist in photosynthesis",
        "Option C": "To protect against desiccation and phagocytosis",
        "Option D": "To store nutrients",
        "Correct Option": "C",
        "Explanation": "The capsule protects prokaryotic cells from desiccation and helps avoid phagocytosis by the immune system."
    },
    {
        "Q.No": "76",
        "Question": "What is the primary role of the prokaryotic plasma membrane?",
        "Option A": "To store nutrients",
        "Option B": "To protect the cell from viruses",
        "Option C": "To control the movement of ions and molecules",
        "Option D": "To help with energy production",
        "Correct Option": "C",
        "Explanation": "The plasma membrane controls the movement of ions, molecules, and nutrients in and out of the cell."
    },
    {
        "Q.No": "77",
        "Question": "Which of the following processes is involved in prokaryotic reproduction?",
        "Option A": "Mitosis",
        "Option B": "Binary fission",
        "Option C": "Budding",
        "Option D": "Meiosis",
        "Correct Option": "B",
        "Explanation": "Prokaryotic cells reproduce asexually through binary fission."
    },
    {
        "Q.No": "78",
        "Question": "What is the significance of prokaryotic ribosomes being smaller than eukaryotic ribosomes?",
        "Option A": "It allows them to divide faster",
        "Option B": "It enables protein synthesis at a faster rate",
        "Option C": "It makes them resistant to antibiotics",
        "Option D": "It aids in more complex protein synthesis",
        "Correct Option": "C",
        "Explanation": "The smaller size of prokaryotic ribosomes allows certain antibiotics to target them."
    },
    {
        "Q.No": "79",
        "Question": "Which prokaryotic group is known for thriving in extreme environments?",
        "Option A": "Archaebacteria",
        "Option B": "Eubacteria",
        "Option C": "Cyanobacteria",
        "Option D": "All prokaryotes",
        "Correct Option": "A",
        "Explanation": "Archaebacteria are known for thriving in extreme environments such as hot springs and salty lakes."
    },
    {
        "Q.No": "80",
        "Question": "What is the function of the prokaryotic nucleoid region?",
        "Option A": "To help in protein synthesis",
        "Option B": "To store the genetic material",
        "Option C": "To maintain cell shape",
        "Option D": "To produce energy",
        "Correct Option": "B",
        "Explanation": "The nucleoid region stores the genetic material in prokaryotic cells."
    },
    {
        "Q.No": "81",
        "Question": "Which of the following is true about prokaryotic chromosomes?",
        "Option A": "They are always circular",
        "Option B": "They are always linear",
        "Option C": "They exist in multiple copies",
        "Option D": "They contain histones",
        "Correct Option": "A",
        "Explanation": "Prokaryotic chromosomes are typically circular and exist as a single copy."
    },
    {
        "Q.No": "82",
        "Question": "How do prokaryotes benefit from their small cell size?",
        "Option A": "They can produce more energy",
        "Option B": "They can divide faster",
        "Option C": "They can store more nutrients",
        "Option D": "They can avoid oxygen",
        "Correct Option": "B",
        "Explanation": "The small size of prokaryotic cells allows them to divide rapidly."
    },
    {
        "Q.No": "83",
        "Question": "How do prokaryotic cells gain energy in the absence of oxygen?",
        "Option A": "Photosynthesis",
        "Option B": "Cellular respiration",
        "Option C": "Fermentation",
        "Option D": "Anaerobic respiration",
        "Correct Option": "C",
        "Explanation": "Some prokaryotic cells use fermentation to gain energy in the absence of oxygen."
    },
    {
        "Q.No": "84",
        "Question": "What is the primary role of prokaryotic ribosomes?",
        "Option A": "To help in energy production",
        "Option B": "To synthesize proteins",
        "Option C": "To replicate DNA",
        "Option D": "To divide the cell",
        "Correct Option": "B",
        "Explanation": "Prokaryotic ribosomes are responsible for protein synthesis."
    },
    {
        "Q.No": "85",
        "Question": "What structure in prokaryotic cells assists in motility?",
        "Option A": "Pili",
        "Option B": "Flagella",
        "Option C": "Capsule",
        "Option D": "Endospores",
        "Correct Option": "B",
        "Explanation": "Flagella are responsible for the motility of some prokaryotic cells."
    },
    {
        "Q.No": "86",
        "Question": "How do prokaryotes exchange genetic material with each other?",
        "Option A": "Conjugation",
        "Option B": "Mitosis",
        "Option C": "Budding",
        "Option D": "Binary fission",
        "Correct Option": "A",
        "Explanation": "Prokaryotes exchange genetic material through conjugation using pili."
    },
    {
        "Q.No": "87",
        "Question": "What is one way prokaryotes can survive in harsh conditions?",
        "Option A": "By creating a capsule",
        "Option B": "By producing spores",
        "Option C": "By increasing their ribosomes",
        "Option D": "By dividing rapidly",
        "Correct Option": "B",
        "Explanation": "Some prokaryotes produce spores to survive in harsh conditions."
    },
    {
        "Q.No": "88",
        "Question": "What is the function of the prokaryotic cell wall?",
        "Option A": "To aid in protein synthesis",
        "Option B": "To provide structural support and protection",
        "Option C": "To synthesize energy",
        "Option D": "To produce genetic material",
        "Correct Option": "B",
        "Explanation": "The cell wall in prokaryotes provides structural support and protection."
    },
    {
        "Q.No": "89",
        "Question": "What type of prokaryotic cell wall composition is found in gram-negative bacteria?",
        "Option A": "Pseudomurein",
        "Option B": "Peptidoglycan",
        "Option C": "Cellulose",
        "Option D": "Chitin",
        "Correct Option": "B",
        "Explanation": "Gram-negative bacteria have a peptidoglycan cell wall surrounded by an outer membrane."
    },
    {
        "Q.No": "90",
        "Question": "How are prokaryotic cells different from eukaryotic cells in terms of DNA storage?",
        "Option A": "Eukaryotic DNA is circular",
        "Option B": "Eukaryotic DNA is stored in the nucleus",
        "Option C": "Prokaryotic DNA lacks histones",
        "Option D": "Prokaryotic DNA is linear",
        "Correct Option": "B",
        "Explanation": "Eukaryotic cells store their DNA in the nucleus, while prokaryotes store it in the nucleoid region."
    },
    {
        "Q.No": "91",
        "Question": "Which prokaryotic cell structure assists in the attachment to surfaces?",
        "Option A": "Flagella",
        "Option B": "Pili",
        "Option C": "Capsule",
        "Option D": "Cytoplasm",
        "Correct Option": "C",
        "Explanation": "The capsule helps prokaryotes attach to surfaces."
    },
    {
        "Q.No": "92",
        "Question": "Which prokaryotic group can photosynthesize?",
        "Option A": "Eubacteria",
        "Option B": "Cyanobacteria",
        "Option C": "Archaebacteria",
        "Option D": "All of the above",
        "Correct Option": "B",
        "Explanation": "Cyanobacteria are capable of photosynthesis among prokaryotic organisms."
    },
    {
        "Q.No": "93",
        "Question": "Which of the following best describes the structure of prokaryotic ribosomes?",
        "Option A": "Larger and more complex",
        "Option B": "Smaller and less complex",
        "Option C": "Identical to eukaryotic ribosomes",
        "Option D": "Not present in prokaryotes",
        "Correct Option": "B",
        "Explanation": "Prokaryotic ribosomes are smaller (70S) than eukaryotic ribosomes (80S)."
    },
    {
        "Q.No": "94",
        "Question": "How do prokaryotic cells contribute to the nitrogen cycle?",
        "Option A": "By producing oxygen",
        "Option B": "By performing nitrogen fixation",
        "Option C": "By consuming oxygen",
        "Option D": "By producing methane",
        "Correct Option": "B",
        "Explanation": "Some prokaryotes fix nitrogen, converting atmospheric nitrogen into usable forms for plants."
    },
    {
        "Q.No": "95",
        "Question": "Which prokaryotic group is responsible for methane production?",
        "Option A": "Archaebacteria",
        "Option B": "Eubacteria",
        "Option C": "Cyanobacteria",
        "Option D": "Algae",
        "Correct Option": "A",
        "Explanation": "Methanogens, a type of archaebacteria, are responsible for methane production."
    },
    {
        "Q.No": "96",
        "Question": "Which of the following is the simplest form of prokaryotic cell division?",
        "Option A": "Binary fission",
        "Option B": "Budding",
        "Option C": "Mitosis",
        "Option D": "Meiosis",
        "Correct Option": "A",
        "Explanation": "Binary fission is the simplest form of prokaryotic cell division."
    },
    {
        "Q.No": "97",
        "Question": "What is one function of the prokaryotic cytoplasm?",
        "Option A": "To store the genetic material",
        "Option B": "To carry out metabolic reactions",
        "Option C": "To synthesize proteins",
        "Option D": "To provide structural support",
        "Correct Option": "B",
        "Explanation": "The cytoplasm carries out the majority of metabolic reactions in prokaryotic cells."
    },
    {
        "Q.No": "98",
        "Question": "How does the lack of organelles in prokaryotes affect their function?",
        "Option A": "It limits their ability to store nutrients",
        "Option B": "It simplifies their cellular structure and function",
        "Option C": "It allows them to specialize",
        "Option D": "It helps them perform complex tasks",
        "Correct Option": "B",
        "Explanation": "The lack of organelles simplifies the structure and allows for more straightforward functions in prokaryotes."
    },
    {
        "Q.No": "99",
        "Question": "How does the small size of prokaryotic cells benefit them?",
        "Option A": "It allows them to divide rapidly",
        "Option B": "It allows them to store more nutrients",
        "Option C": "It makes them more resistant to stress",
        "Option D": "It helps them survive in low-oxygen conditions",
        "Correct Option": "A",
        "Explanation": "The small size of prokaryotic cells enables them to divide rapidly, increasing their population quickly."
    }
      ]
    },
    "Reproduction": {
      color: "#2c3e50",
      icon: "🤝",
      questions: [
        {
        "Q.No": "1",
        "Question": "What is the main difference between sexual and asexual reproduction?",
        "Option A": "Sexual reproduction requires two parents",
        "Option B": "Asexual reproduction involves gametes",
        "Option C": "Asexual reproduction requires two parents",
        "Option D": "Sexual reproduction results in identical offspring",
        "Correct Option": "A",
        "Explanation": "Sexual reproduction requires two parents and combines their genetic material, while asexual reproduction does not."
    },
    {
        "Q.No": "2",
        "Question": "Which of the following organisms reproduces through binary fission?",
        "Option A": "Humans",
        "Option B": "Amoeba",
        "Option C": "Flowers",
        "Option D": "Birds",
        "Correct Option": "B",
        "Explanation": "Amoeba reproduces by binary fission, a form of asexual reproduction."
    },
    {
        "Q.No": "3",
        "Question": "In which type of reproduction is genetic variation introduced?",
        "Option A": "Asexual reproduction",
        "Option B": "Budding",
        "Option C": "Sexual reproduction",
        "Option D": "Binary fission",
        "Correct Option": "C",
        "Explanation": "Sexual reproduction introduces genetic variation by combining genes from two parents."
    },
    {
        "Q.No": "4",
        "Question": "What process do plants use to reproduce sexually?",
        "Option A": "Pollination",
        "Option B": "Vegetative propagation",
        "Option C": "Budding",
        "Option D": "Binary fission",
        "Correct Option": "A",
        "Explanation": "Pollination is the process through which plants reproduce sexually."
    },
    {
        "Q.No": "5",
        "Question": "Which of the following is true about asexual reproduction?",
        "Option A": "It requires two parents",
        "Option B": "It produces genetically identical offspring",
        "Option C": "It results in genetic variation",
        "Option D": "It involves fertilization",
        "Correct Option": "B",
        "Explanation": "Asexual reproduction produces genetically identical offspring from a single parent."
    },
    {
        "Q.No": "6",
        "Question": "What is the male gamete in humans called?",
        "Option A": "Egg",
        "Option B": "Sperm",
        "Option C": "Ovum",
        "Option D": "Zygote",
        "Correct Option": "B",
        "Explanation": "The male gamete in humans is the sperm cell."
    },
    {
        "Q.No": "7",
        "Question": "Which of the following is a method of asexual reproduction in plants?",
        "Option A": "Pollination",
        "Option B": "Fragmentation",
        "Option C": "Fertilization",
        "Option D": "Cross-pollination",
        "Correct Option": "B",
        "Explanation": "Fragmentation is an asexual reproductive method in plants where a new individual is formed from a fragment of the parent."
    },
    {
        "Q.No": "8",
        "Question": "What is the primary function of meiosis in sexual reproduction?",
        "Option A": "To produce identical cells",
        "Option B": "To maintain the chromosome number",
        "Option C": "To create gametes",
        "Option D": "To repair damaged DNA",
        "Correct Option": "C",
        "Explanation": "Meiosis reduces the chromosome number and produces gametes, ensuring genetic diversity in offspring."
    },
    {
        "Q.No": "9",
        "Question": "How many chromosomes does the zygote have after fertilization in humans?",
        "Option A": "Half the number of parent chromosomes",
        "Option B": "The same as the mother",
        "Option C": "The same as the father",
        "Option D": "A complete set from both parents",
        "Correct Option": "D",
        "Explanation": "The zygote inherits one set of chromosomes from each parent, restoring the diploid number."
    },
    {
        "Q.No": "10",
        "Question": "What is the term for the fusion of male and female gametes?",
        "Option A": "Mitosis",
        "Option B": "Meiosis",
        "Option C": "Fertilization",
        "Option D": "Binary fission",
        "Correct Option": "C",
        "Explanation": "Fertilization is the fusion of male and female gametes to form a zygote."
    },
    {
        "Q.No": "11",
        "Question": "Which of the following is an example of external fertilization?",
        "Option A": "Humans",
        "Option B": "Frogs",
        "Option C": "Birds",
        "Option D": "Mammals",
        "Correct Option": "B",
        "Explanation": "Frogs perform external fertilization, where the female lays eggs and the male fertilizes them outside the body."
    },
    {
        "Q.No": "12",
        "Question": "What is the term for the process of forming a new organism without fertilization?",
        "Option A": "Binary fission",
        "Option B": "Parthenogenesis",
        "Option C": "Budding",
        "Option D": "Fragmentation",
        "Correct Option": "B",
        "Explanation": "Parthenogenesis is a form of asexual reproduction where offspring are produced without fertilization."
    },
    {
        "Q.No": "13",
        "Question": "In which type of organisms does regeneration occur?",
        "Option A": "Plants only",
        "Option B": "Animals only",
        "Option C": "Both plants and animals",
        "Option D": "Only fungi",
        "Correct Option": "C",
        "Explanation": "Regeneration occurs in both plants (e.g., through cuttings) and animals (e.g., starfish regeneration)."
    },
    {
        "Q.No": "14",
        "Question": "What is a key characteristic of vegetative reproduction in plants?",
        "Option A": "It involves seeds",
        "Option B": "It results in genetically diverse offspring",
        "Option C": "New plants are formed from non-reproductive parts",
        "Option D": "It requires cross-pollination",
        "Correct Option": "C",
        "Explanation": "Vegetative reproduction involves the formation of new plants from vegetative parts like roots, stems, or leaves."
    },
    {
        "Q.No": "15",
        "Question": "What process is responsible for the development of gametes in animals?",
        "Option A": "Mitosis",
        "Option B": "Meiosis",
        "Option C": "Binary fission",
        "Option D": "Budding",
        "Correct Option": "B",
        "Explanation": "Meiosis is responsible for the formation of gametes in animals."
    },
    {
        "Q.No": "16",
        "Question": "Which of the following is an example of asexual reproduction in animals?",
        "Option A": "Budding in hydra",
        "Option B": "Fertilization in humans",
        "Option C": "External fertilization in fish",
        "Option D": "Pollination in plants",
        "Correct Option": "A",
        "Explanation": "Budding in hydra is an example of asexual reproduction, where offspring develop from a bud on the parent organism."
    },
    {
        "Q.No": "17",
        "Question": "What is the result of sexual reproduction in animals?",
        "Option A": "Two identical offspring",
        "Option B": "Genetic variation",
        "Option C": "One offspring",
        "Option D": "Multiple identical offspring",
        "Correct Option": "B",
        "Explanation": "Sexual reproduction results in genetic variation in offspring due to the combination of genes from two parents."
    },
    {
        "Q.No": "18",
        "Question": "In which of the following does binary fission occur?",
        "Option A": "Bacteria",
        "Option B": "Humans",
        "Option C": "Dogs",
        "Option D": "Plants",
        "Correct Option": "A",
        "Explanation": "Binary fission is a common method of reproduction in bacteria, where the cell divides into two identical daughter cells."
    },
    {
        "Q.No": "19",
        "Question": "Which reproductive process occurs in humans during the production of sperm and eggs?",
        "Option A": "Meiosis",
        "Option B": "Mitosis",
        "Option C": "Binary fission",
        "Option D": "Budding",
        "Correct Option": "A",
        "Explanation": "Meiosis is responsible for the production of sperm and eggs in humans, reducing the chromosome number by half."
    },
    {
        "Q.No": "20",
        "Question": "What is the primary purpose of mitosis in reproduction?",
        "Option A": "To reduce chromosome number",
        "Option B": "To form gametes",
        "Option C": "To produce identical cells for growth and repair",
        "Option D": "To create genetic variation",
        "Correct Option": "C",
        "Explanation": "Mitosis is responsible for producing identical cells for growth, repair, and asexual reproduction."
    },
    {
        "Q.No": "21",
        "Question": "What is the primary role of the placenta during pregnancy?",
        "Option A": "To protect the fetus from disease",
        "Option B": "To allow the exchange of nutrients and gases between the mother and fetus",
        "Option C": "To produce hormones",
        "Option D": "To control fetal movement",
        "Correct Option": "B",
        "Explanation": "The placenta allows for the exchange of nutrients, gases, and waste between the mother and fetus."
    },
    {
        "Q.No": "22",
        "Question": "What type of reproduction occurs when a single parent produces offspring without the involvement of gametes?",
        "Option A": "Asexual reproduction",
        "Option B": "Sexual reproduction",
        "Option C": "Fragmentation",
        "Option D": "External fertilization",
        "Correct Option": "A",
        "Explanation": "Asexual reproduction occurs when a single parent produces offspring without the need for gametes."
    },
    {
        "Q.No": "23",
        "Question": "In which reproductive system do the testes and ovaries play a key role?",
        "Option A": "Nervous system",
        "Option B": "Circulatory system",
        "Option C": "Respiratory system",
        "Option D": "Reproductive system",
        "Correct Option": "D",
        "Explanation": "The testes and ovaries are key organs in the reproductive system, producing gametes and hormones."
    },
    {
        "Q.No": "24",
        "Question": "What is the term for the production of female gametes?",
        "Option A": "Spermatogenesis",
        "Option B": "Oogenesis",
        "Option C": "Mitosis",
        "Option D": "Binary fission",
        "Correct Option": "B",
        "Explanation": "Oogenesis is the process of producing female gametes (eggs) in females."
    },
    {
        "Q.No": "25",
        "Question": "Which of the following is true about asexual reproduction?",
        "Option A": "It involves gametes",
        "Option B": "It leads to genetic variation",
        "Option C": "It occurs only in animals",
        "Option D": "It produces offspring identical to the parent",
        "Correct Option": "D",
        "Explanation": "Asexual reproduction produces offspring that are genetically identical to the parent organism."
    },
    {
        "Q.No": "26",
        "Question": "What is asexual reproduction by budding?",
        "Option A": "Offspring are formed from a fragment of the parent",
        "Option B": "New organisms are produced from specialized cells",
        "Option C": "A new individual grows from a bud on the parent",
        "Option D": "Offspring develop from seeds",
        "Correct Option": "C",
        "Explanation": "Budding is a type of asexual reproduction where a new organism grows from a bud on the parent organism."
    },
    {
        "Q.No": "27",
        "Question": "What is the name of the process in which sperm and egg fuse to form a zygote?",
        "Option A": "Fertilization",
        "Option B": "Oogenesis",
        "Option C": "Embryogenesis",
        "Option D": "Pollination",
        "Correct Option": "A",
        "Explanation": "Fertilization is the fusion of sperm and egg to form a zygote in sexual reproduction."
    },
    {
        "Q.No": "28",
        "Question": "Which structure in flowering plants contains the male gametes?",
        "Option A": "Ovary",
        "Option B": "Stigma",
        "Option C": "Anther",
        "Option D": "Style",
        "Correct Option": "C",
        "Explanation": "The anther contains the male gametes (pollen) in flowering plants."
    },
    {
        "Q.No": "29",
        "Question": "What is the result of mitosis in terms of chromosome number?",
        "Option A": "It reduces the chromosome number by half",
        "Option B": "It maintains the chromosome number",
        "Option C": "It increases the chromosome number",
        "Option D": "It forms gametes",
        "Correct Option": "B",
        "Explanation": "Mitosis maintains the chromosome number by producing identical daughter cells."
    },
    {
        "Q.No": "30",
        "Question": "What process occurs when a single-celled organism divides into two identical cells?",
        "Option A": "Binary fission",
        "Option B": "Budding",
        "Option C": "Fertilization",
        "Option D": "Meiosis",
        "Correct Option": "A",
        "Explanation": "Binary fission is the process where a single-celled organism divides into two identical cells."
    },
    {
        "Q.No": "31",
        "Question": "What is the term for the process in which an egg is released from the ovary?",
        "Option A": "Fertilization",
        "Option B": "Ovulation",
        "Option C": "Menstruation",
        "Option D": "Gestation",
        "Correct Option": "B",
        "Explanation": "Ovulation is the release of an egg from the ovary in female animals."
    },
    {
        "Q.No": "32",
        "Question": "In which type of reproduction are offspring genetically identical to the parent?",
        "Option A": "Asexual reproduction",
        "Option B": "Sexual reproduction",
        "Option C": "Cross-pollination",
        "Option D": "Fragmentation",
        "Correct Option": "A",
        "Explanation": "Asexual reproduction produces offspring that are genetically identical to the parent."
    },
    {
        "Q.No": "33",
        "Question": "What is the process called when an organism regenerates lost body parts?",
        "Option A": "Regeneration",
        "Option B": "Fertilization",
        "Option C": "Budding",
        "Option D": "Binary fission",
        "Correct Option": "A",
        "Explanation": "Regeneration is the process by which an organism regrows lost or damaged body parts."
    },
    {
        "Q.No": "34",
        "Question": "Which of the following is an example of external sexual reproduction?",
        "Option A": "Mammals",
        "Option B": "Birds",
        "Option C": "Fish",
        "Option D": "Insects",
        "Correct Option": "C",
        "Explanation": "Fish often reproduce externally, where eggs are fertilized outside the female's body."
    },
    {
        "Q.No": "35",
        "Question": "Which process results in the formation of identical offspring from one parent?",
        "Option A": "Sexual reproduction",
        "Option B": "Asexual reproduction",
        "Option C": "Fertilization",
        "Option D": "Pollination",
        "Correct Option": "B",
        "Explanation": "Asexual reproduction results in genetically identical offspring from one parent organism."
    },
    {
        "Q.No": "36",
        "Question": "What is the function of the ovary in female reproductive systems?",
        "Option A": "To produce eggs and hormones",
        "Option B": "To nourish the embryo",
        "Option C": "To produce sperm",
        "Option D": "To house the zygote",
        "Correct Option": "A",
        "Explanation": "The ovary produces eggs (ova) and hormones such as estrogen in female reproductive systems."
    },
    {
        "Q.No": "37",
        "Question": "What type of reproduction involves two parents?",
        "Option A": "Asexual reproduction",
        "Option B": "Binary fission",
        "Option C": "Sexual reproduction",
        "Option D": "Budding",
        "Correct Option": "C",
        "Explanation": "Sexual reproduction involves the fusion of gametes from two parents to form offspring."
    },
    {
        "Q.No": "38",
        "Question": "What is the term for the joining of male and female gametes?",
        "Option A": "Fertilization",
        "Option B": "Mitosis",
        "Option C": "Meiosis",
        "Option D": "Pollination",
        "Correct Option": "A",
        "Explanation": "Fertilization is the process where male and female gametes fuse to form a zygote."
    },
    {
        "Q.No": "39",
        "Question": "What process occurs during the first stage of human embryonic development?",
        "Option A": "Fertilization",
        "Option B": "Gastrulation",
        "Option C": "Cleavage",
        "Option D": "Organogenesis",
        "Correct Option": "C",
        "Explanation": "Cleavage is the early series of cell divisions that occurs after fertilization, leading to the formation of a blastocyst."
    },
    {
        "Q.No": "40",
        "Question": "What is the name of the male reproductive organ in animals?",
        "Option A": "Uterus",
        "Option B": "Testes",
        "Option C": "Ovary",
        "Option D": "Fallopian tube",
        "Correct Option": "B",
        "Explanation": "The testes are the male reproductive organs responsible for producing sperm and hormones."
    },
    {
        "Q.No": "41",
        "Question": "In which reproductive process does a zygote undergo mitotic divisions?",
        "Option A": "Fertilization",
        "Option B": "Meiosis",
        "Option C": "Embryogenesis",
        "Option D": "Regeneration",
        "Correct Option": "C",
        "Explanation": "Embryogenesis involves mitotic divisions of the zygote, leading to the formation of an embryo."
    },
    {
        "Q.No": "42",
        "Question": "What is the main characteristic of vegetative propagation in plants?",
        "Option A": "It involves sexual reproduction",
        "Option B": "It occurs without the use of seeds",
        "Option C": "It requires cross-pollination",
        "Option D": "It results in genetically diverse offspring",
        "Correct Option": "B",
        "Explanation": "Vegetative propagation occurs without the use of seeds and results in genetically identical offspring."
    },
    {
        "Q.No": "43",
        "Question": "What is the term for the cell division process that produces gametes?",
        "Option A": "Mitosis",
        "Option B": "Meiosis",
        "Option C": "Binary fission",
        "Option D": "Fragmentation",
        "Correct Option": "B",
        "Explanation": "Meiosis is the type of cell division that produces gametes with half the chromosome number."
    },
    {
        "Q.No": "44",
        "Question": "What does asexual reproduction produce in terms of genetic variation?",
        "Option A": "High genetic variation",
        "Option B": "No genetic variation",
        "Option C": "Moderate genetic variation",
        "Option D": "No effect on variation",
        "Correct Option": "B",
        "Explanation": "Asexual reproduction results in offspring that are genetically identical to the parent, meaning there is no genetic variation."
    },
    {
        "Q.No": "45",
        "Question": "Which of the following organisms uses asexual reproduction by binary fission?",
        "Option A": "Human",
        "Option B": "Bacteria",
        "Option C": "Frog",
        "Option D": "Bird",
        "Correct Option": "B",
        "Explanation": "Bacteria reproduce by binary fission, where one cell divides to form two identical daughter cells."
    },
    {
        "Q.No": "46",
        "Question": "What is the term for the reproductive process that involves the formation of spores?",
        "Option A": "Pollination",
        "Option B": "Budding",
        "Option C": "Spore formation",
        "Option D": "Fertilization",
        "Correct Option": "C",
        "Explanation": "Spore formation is a method of reproduction in some fungi and plants."
    },
    {
        "Q.No": "47",
        "Question": "How many chromosomes do human gametes contain?",
        "Option A": "46",
        "Option B": "23",
        "Option C": "92",
        "Option D": "44",
        "Correct Option": "B",
        "Explanation": "Human gametes (sperm and egg) contain 23 chromosomes, half the normal chromosome number."
    },
    {
        "Q.No": "48",
        "Question": "Which of the following best describes the role of the placenta in humans?",
        "Option A": "To protect the fetus from external harm",
        "Option B": "To produce hormones",
        "Option C": "To allow exchange of nutrients and gases",
        "Option D": "To develop into the umbilical cord",
        "Correct Option": "C",
        "Explanation": "The placenta allows for the exchange of nutrients, gases, and waste between the mother and fetus."
    },
    {
        "Q.No": "49",
        "Question": "In which type of organisms does sexual reproduction usually involve fertilization?",
        "Option A": "Invertebrates",
        "Option B": "Fish",
        "Option C": "Reptiles and mammals",
        "Option D": "All of the above",
        "Correct Option": "D",
        "Explanation": "Sexual reproduction in most organisms, including invertebrates, fish, reptiles, and mammals, involves fertilization."
    },
    {
        "Q.No": "50",
        "Question": "What is the name of the process in which cells undergo to form two identical daughter cells?",
        "Option A": "Meiosis",
        "Option B": "Mitosis",
        "Option C": "Fertilization",
        "Option D": "Gametogenesis",
        "Correct Option": "B",
        "Explanation": "Mitosis is the process where a cell divides into two identical daughter cells."
    },
    {
        "Q.No": "51",
        "Question": "Which of the following organisms can reproduce both sexually and asexually?",
        "Option A": "Hydra",
        "Option B": "Frog",
        "Option C": "Human",
        "Option D": "Bird",
        "Correct Option": "A",
        "Explanation": "Hydra can reproduce both sexually (via gametes) and asexually (via budding)."
    },
    {
        "Q.No": "52",
        "Question": "What is the name of the process by which plants reproduce using flowers?",
        "Option A": "Pollination",
        "Option B": "Budding",
        "Option C": "Vegetative propagation",
        "Option D": "Fertilization",
        "Correct Option": "A",
        "Explanation": "Pollination is the process where pollen is transferred to the stigma, allowing fertilization to occur in plants."
    },
    {
        "Q.No": "53",
        "Question": "Which of the following is not a method of asexual reproduction?",
        "Option A": "Binary fission",
        "Option B": "Budding",
        "Option C": "Fertilization",
        "Option D": "Fragmentation",
        "Correct Option": "C",
        "Explanation": "Fertilization is a form of sexual reproduction, not asexual reproduction."
    },
    {
        "Q.No": "54",
        "Question": "What is the main function of the male reproductive system in humans?",
        "Option A": "To produce eggs",
        "Option B": "To produce sperm",
        "Option C": "To support fetal development",
        "Option D": "To facilitate fertilization",
        "Correct Option": "B",
        "Explanation": "The main function of the male reproductive system is to produce sperm."
    },
    {
        "Q.No": "55",
        "Question": "What is the term for the fusion of sperm and egg?",
        "Option A": "Fertilization",
        "Option B": "Mitosis",
        "Option C": "Meiosis",
        "Option D": "Budding",
        "Correct Option": "A",
        "Explanation": "Fertilization is the process where the sperm and egg combine to form a zygote."
    },
    {
        "Q.No": "56",
        "Question": "What does the term \"\"asexual reproduction\"\" mean?",
        "Option A": "Reproduction involving two parents",
        "Option B": "Reproduction without gametes",
        "Option C": "Reproduction with gametes",
        "Option D": "Reproduction involving only males",
        "Correct Option": "B",
        "Explanation": "Asexual reproduction involves one parent and does not require gametes."
    },
    {
        "Q.No": "57",
        "Question": "In human females, where does fertilization typically occur?",
        "Option A": "Uterus",
        "Option B": "Fallopian tube",
        "Option C": "Ovary",
        "Option D": "Cervix",
        "Correct Option": "B",
        "Explanation": "Fertilization typically occurs in the fallopian tube in human females."
    },
    {
        "Q.No": "58",
        "Question": "What type of asexual reproduction occurs in yeast?",
        "Option A": "Budding",
        "Option B": "Binary fission",
        "Option C": "Fragmentation",
        "Option D": "Spore formation",
        "Correct Option": "A",
        "Explanation": "Yeast reproduces asexually through budding, where a new organism forms from the parent."
    },
    {
        "Q.No": "59",
        "Question": "What is the term for the production of sperm in male animals?",
        "Option A": "Oogenesis",
        "Option B": "Spermatogenesis",
        "Option C": "Meiosis",
        "Option D": "Fertilization",
        "Correct Option": "B",
        "Explanation": "Spermatogenesis is the process by which sperm are produced in male animals."
    },
    {
        "Q.No": "60",
        "Question": "Which of the following is an example of asexual reproduction in plants?",
        "Option A": "Pollination",
        "Option B": "Vegetative propagation",
        "Option C": "Cross-pollination",
        "Option D": "Fertilization",
        "Correct Option": "B",
        "Explanation": "Vegetative propagation is asexual reproduction in plants, involving new plants grown from non-reproductive parts."
    },
    {
        "Q.No": "61",
        "Question": "What is a key difference between sexual and asexual reproduction?",
        "Option A": "Sexual reproduction results in genetically identical offspring",
        "Option B": "Asexual reproduction requires two parents",
        "Option C": "Asexual reproduction involves gametes",
        "Option D": "Sexual reproduction results in genetic diversity",
        "Correct Option": "D",
        "Explanation": "Sexual reproduction combines genetic material from two parents, leading to genetic diversity."
    },
    {
        "Q.No": "62",
        "Question": "What is the role of the stigma in a flower?",
        "Option A": "To produce pollen",
        "Option B": "To catch pollen",
        "Option C": "To support the ovary",
        "Option D": "To produce seeds",
        "Correct Option": "B",
        "Explanation": "The stigma is the part of the flower that catches pollen during pollination."
    },
    {
        "Q.No": "63",
        "Question": "What happens during the process of meiosis?",
        "Option A": "Chromosomes are duplicated",
        "Option B": "Gametes are produced",
        "Option C": "The organism's body cells divide",
        "Option D": "New individuals are created",
        "Correct Option": "B",
        "Explanation": "Meiosis is the process that produces gametes with half the chromosome number of the parent cell."
    },
    {
        "Q.No": "64",
        "Question": "What is the main advantage of sexual reproduction?",
        "Option A": "It is faster than asexual reproduction",
        "Option B": "It produces genetically identical offspring",
        "Option C": "It introduces genetic variation",
        "Option D": "It does not require gametes",
        "Correct Option": "C",
        "Explanation": "Sexual reproduction introduces genetic variation, which enhances survival in changing environments."
    },
    {
        "Q.No": "65",
        "Question": "Which of the following is not an example of sexual reproduction?",
        "Option A": "Cross-pollination in flowers",
        "Option B": "Fertilization in animals",
        "Option C": "Budding in yeast",
        "Option D": "Meiosis",
        "Correct Option": "C",
        "Explanation": "Budding in yeast is an example of asexual reproduction, not sexual reproduction."
    },
    {
        "Q.No": "66",
        "Question": "In which of the following processes does the chromosome number stay constant?",
        "Option A": "Mitosis",
        "Option B": "Meiosis",
        "Option C": "Fertilization",
        "Option D": "Binary fission",
        "Correct Option": "A",
        "Explanation": "In mitosis, the chromosome number stays constant as the cell divides into two identical daughter cells."
    },
    {
        "Q.No": "67",
        "Question": "What is the term for an organism's first cell after fertilization?",
        "Option A": "Zygote",
        "Option B": "Gamete",
        "Option C": "Blastocyst",
        "Option D": "Embryo",
        "Correct Option": "A",
        "Explanation": "The first cell formed after fertilization is called a zygote."
    },
    {
        "Q.No": "68",
        "Question": "What is the main purpose of the female reproductive system in mammals?",
        "Option A": "To produce sperm",
        "Option B": "To produce eggs",
        "Option C": "To support fertilization and fetal development",
        "Option D": "To support gamete formation",
        "Correct Option": "C",
        "Explanation": "The female reproductive system supports fertilization and fetal development in mammals."
    },
    {
        "Q.No": "69",
        "Question": "Which of the following is a characteristic of asexual reproduction?",
        "Option A": "It requires two parents",
        "Option B": "It results in genetic diversity",
        "Option C": "It produces offspring that are clones of the parent",
        "Option D": "It requires gametes",
        "Correct Option": "C",
        "Explanation": "Asexual reproduction produces offspring that are genetically identical to the parent (clones)."
    },
    {
        "Q.No": "70",
        "Question": "Which of the following statements about sexual reproduction is false?",
        "Option A": "It involves two parents",
        "Option B": "It results in genetically unique offspring",
        "Option C": "It produces offspring that are identical to the parent",
        "Option D": "It involves gametes",
        "Correct Option": "C",
        "Explanation": "Sexual reproduction results in genetically unique offspring, not identical ones."
    },
    {
        "Q.No": "71",
        "Question": "What is the name of the process where an organism grows new tissue from a fragment of itself?",
        "Option A": "Budding",
        "Option B": "Fragmentation",
        "Option C": "Binary fission",
        "Option D": "Parthenogenesis",
        "Correct Option": "B",
        "Explanation": "Fragmentation is a form of asexual reproduction where new individuals grow from parts of the parent organism."
    },
    {
        "Q.No": "72",
        "Question": "How does external fertilization occur in fish?",
        "Option A": "The male deposits sperm inside the female's body",
        "Option B": "The female deposits eggs outside the body",
        "Option C": "Eggs and sperm are released into the water",
        "Option D": "The male fertilizes eggs inside the female",
        "Correct Option": "C",
        "Explanation": "In external fertilization, fish release eggs and sperm into the water for fertilization to occur outside the body."
    },
    {
        "Q.No": "73",
        "Question": "Which of the following is not a type of asexual reproduction?",
        "Option A": "Binary fission",
        "Option B": "Budding",
        "Option C": "Cross-fertilization",
        "Option D": "Vegetative propagation",
        "Correct Option": "C",
        "Explanation": "Cross-fertilization is a process of sexual reproduction, not asexual reproduction."
    },
    {
        "Q.No": "74",
        "Question": "What is the term for the development of a new organism from a fragment of the parent organism?",
        "Option A": "Fragmentation",
        "Option B": "Mitosis",
        "Option C": "Budding",
        "Option D": "Binary fission",
        "Correct Option": "A",
        "Explanation": "Fragmentation occurs when a part of an organism breaks off and develops into a new individual."
    },
    {
        "Q.No": "75",
        "Question": "In which of the following organisms does parthenogenesis occur?",
        "Option A": "Snake",
        "Option B": "Fish",
        "Option C": "Insect",
        "Option D": "All of the above",
        "Correct Option": "D",
        "Explanation": "Parthenogenesis occurs in some reptiles, insects, and other organisms, where offspring are produced without fertilization."
    },
    {
        "Q.No": "76",
        "Question": "What is the primary function of the ovary in the female reproductive system?",
        "Option A": "To produce sperm",
        "Option B": "To produce hormones and eggs",
        "Option C": "To support fertilization",
        "Option D": "To protect the fetus",
        "Correct Option": "B",
        "Explanation": "The ovary produces both eggs (ova) and reproductive hormones such as estrogen."
    },
    {
        "Q.No": "77",
        "Question": "What is the difference between meiosis and mitosis?",
        "Option A": "Meiosis results in genetically identical cells, while mitosis results in genetically different cells",
        "Option B": "Mitosis results in genetically identical cells, while meiosis results in genetically different cells",
        "Option C": "Meiosis occurs only in somatic cells, and mitosis occurs in gametes",
        "Option D": "There is no difference",
        "Correct Option": "B",
        "Explanation": "Meiosis reduces the chromosome number in gametes, while mitosis produces genetically identical cells."
    },
    {
        "Q.No": "78",
        "Question": "Which process in plants allows the male gamete to reach the female gamete?",
        "Option A": "Fertilization",
        "Option B": "Pollination",
        "Option C": "Germination",
        "Option D": "Meiosis",
        "Correct Option": "B",
        "Explanation": "Pollination allows the male gamete (pollen) to reach the female gamete (ovule) in plants."
    },
    {
        "Q.No": "79",
        "Question": "What is the process in which the zygote develops into an embryo?",
        "Option A": "Fertilization",
        "Option B": "Embryogenesis",
        "Option C": "Meiosis",
        "Option D": "Mitosis",
        "Correct Option": "B",
        "Explanation": "Embryogenesis is the process where the zygote undergoes divisions to develop into an embryo."
    },
    {
        "Q.No": "80",
        "Question": "What is the function of the sperm cell's tail?",
        "Option A": "To carry genetic material",
        "Option B": "To help in fertilization",
        "Option C": "To move the sperm cell toward the egg",
        "Option D": "To store nutrients",
        "Correct Option": "C",
        "Explanation": "The tail of the sperm cell helps it swim toward the egg during fertilization."
    },
    {
        "Q.No": "81",
        "Question": "In which of the following animals does internal fertilization occur?",
        "Option A": "Fish",
        "Option B": "Frogs",
        "Option C": "Humans",
        "Option D": "All of the above",
        "Correct Option": "C",
        "Explanation": "Internal fertilization occurs in humans, where sperm is deposited inside the female body for fertilization."
    },
    {
        "Q.No": "82",
        "Question": "What is the main advantage of asexual reproduction?",
        "Option A": "It produces genetically diverse offspring",
        "Option B": "It requires two parents",
        "Option C": "It is faster and produces offspring quickly",
        "Option D": "It introduces genetic mutations",
        "Correct Option": "C",
        "Explanation": "Asexual reproduction is faster and produces offspring quickly, without the need for two parents."
    },
    {
        "Q.No": "83",
        "Question": "Which of the following is true about sexual reproduction in flowering plants?",
        "Option A": "It involves only one parent",
        "Option B": "It leads to genetically identical offspring",
        "Option C": "It requires the fusion of male and female gametes",
        "Option D": "It does not require pollinators",
        "Correct Option": "C",
        "Explanation": "Sexual reproduction in flowering plants involves the fusion of male (pollen) and female (ovule) gametes."
    },
    {
        "Q.No": "84",
        "Question": "What is the term for the development of a new organism from a bud or outgrowth of the parent?",
        "Option A": "Budding",
        "Option B": "Fragmentation",
        "Option C": "Mitosis",
        "Option D": "Binary fission",
        "Correct Option": "A",
        "Explanation": "Budding is a form of asexual reproduction where a new organism develops as a bud or outgrowth of the parent."
    },
    {
        "Q.No": "85",
        "Question": "What happens during fertilization in sexual reproduction?",
        "Option A": "A sperm cell and an egg cell combine to form a zygote",
        "Option B": "A single parent produces offspring",
        "Option C": "The egg cell divides into multiple cells",
        "Option D": "The offspring are genetically identical",
        "Correct Option": "A",
        "Explanation": "Fertilization occurs when a sperm cell and an egg cell combine to form a zygote, initiating the development of a new organism."
    },
    {
        "Q.No": "86",
        "Question": "Which of the following is a characteristic of external fertilization?",
        "Option A": "It occurs inside the female body",
        "Option B": "It requires the release of sperm and eggs into the environment",
        "Option C": "It results in fewer offspring",
        "Option D": "It occurs only in mammals",
        "Correct Option": "B",
        "Explanation": "External fertilization requires the release of sperm and eggs into the environment, as seen in fish and amphibians."
    },
    {
        "Q.No": "87",
        "Question": "What is the result of asexual reproduction in terms of genetic material?",
        "Option A": "Offspring have different genetic material from the parent",
        "Option B": "Offspring inherit a combination of genes from both parents",
        "Option C": "Offspring have identical genetic material to the parent",
        "Option D": "Offspring inherit genes from only the mother",
        "Correct Option": "C",
        "Explanation": "Asexual reproduction results in offspring that have identical genetic material to the parent."
    },
    {
        "Q.No": "88",
        "Question": "In which reproductive process do organisms develop from an unfertilized egg?",
        "Option A": "Sexual reproduction",
        "Option B": "Binary fission",
        "Option C": "Parthenogenesis",
        "Option D": "Regeneration",
        "Correct Option": "C",
        "Explanation": "Parthenogenesis is a form of asexual reproduction where offspring develop from unfertilized eggs."
    },
    {
        "Q.No": "89",
        "Question": "What is the term for the process of gamete production in males?",
        "Option A": "Spermatogenesis",
        "Option B": "Oogenesis",
        "Option C": "Embryogenesis",
        "Option D": "Fertilization",
        "Correct Option": "A",
        "Explanation": "Spermatogenesis is the process of sperm production in males."
    },
    {
        "Q.No": "90",
        "Question": "What type of reproduction occurs in humans?",
        "Option A": "Asexual reproduction",
        "Option B": "Sexual reproduction",
        "Option C": "Budding",
        "Option D": "Binary fission",
        "Correct Option": "B",
        "Explanation": "Humans reproduce sexually, involving the fusion of male and female gametes."
    },
    {
        "Q.No": "91",
        "Question": "Which of the following is an example of an organism that reproduces by binary fission?",
        "Option A": "Amoeba",
        "Option B": "Human",
        "Option C": "Frog",
        "Option D": "Rose",
        "Correct Option": "A",
        "Explanation": "Amoeba reproduces asexually by binary fission, where the cell divides to form two identical cells."
    },
    {
        "Q.No": "92",
        "Question": "In human reproduction, what is the function of the fallopian tube?",
        "Option A": "To produce eggs",
        "Option B": "To support the embryo during pregnancy",
        "Option C": "To transport sperm to the egg",
        "Option D": "To provide a passage for the fertilized egg to the uterus",
        "Correct Option": "D",
        "Explanation": "The fallopian tube transports the fertilized egg (zygote) to the uterus for implantation."
    },
    {
        "Q.No": "93",
        "Question": "What happens to the chromosome number during meiosis?",
        "Option A": "It doubles",
        "Option B": "It stays the same",
        "Option C": "It is halved",
        "Option D": "It is tripled",
        "Correct Option": "C",
        "Explanation": "Meiosis halves the chromosome number in gametes, ensuring the chromosome number remains constant after fertilization."
    },
    {
        "Q.No": "94",
        "Question": "What is the term for the fusion of two gametes in sexual reproduction?",
        "Option A": "Cleavage",
        "Option B": "Fertilization",
        "Option C": "Gametogenesis",
        "Option D": "Spore formation",
        "Correct Option": "B",
        "Explanation": "Fertilization is the process in which two gametes (sperm and egg) fuse to form a zygote."
    },
    {
        "Q.No": "95",
        "Question": "What is the main difference between sexual and asexual reproduction?",
        "Option A": "Sexual reproduction involves one parent",
        "Option B": "Asexual reproduction involves two parents",
        "Option C": "Sexual reproduction results in genetic variation",
        "Option D": "Asexual reproduction produces genetically unique offspring",
        "Correct Option": "C",
        "Explanation": "Sexual reproduction involves the combination of genetic material from two parents, leading to genetic variation."
    },
    {
        "Q.No": "96",
        "Question": "What is the term for the formation of male and female gametes?",
        "Option A": "Fertilization",
        "Option B": "Meiosis",
        "Option C": "Gametogenesis",
        "Option D": "Binary fission",
        "Correct Option": "C",
        "Explanation": "Gametogenesis is the process where male (spermatogenesis) and female (oogenesis) gametes are formed."
    },
    {
        "Q.No": "97",
        "Question": "What happens during gamete formation in meiosis?",
        "Option A": "The chromosome number is doubled",
        "Option B": "The chromosome number is halved",
        "Option C": "The chromosome number remains unchanged",
        "Option D": "The cell divides into four genetically identical cells",
        "Correct Option": "B",
        "Explanation": "In meiosis, the chromosome number is halved to produce gametes with half the chromosomes of the parent cell."
    },
    {
        "Q.No": "98",
        "Question": "In plants, what is the structure that holds the female gamete?",
        "Option A": "Stigma",
        "Option B": "Ovary",
        "Option C": "Anther",
        "Option D": "Filament",
        "Correct Option": "B",
        "Explanation": "The ovary holds the female gametes (ovules) in plants, where fertilization occurs."
    },
    {
        "Q.No": "99",
        "Question": "In which process does the zygote divide to form a multicellular embryo?",
        "Option A": "Fertilization",
        "Option B": "Mitosis",
        "Option C": "Meiosis",
        "Option D": "Embryogenesis",
        "Correct Option": "D",
        "Explanation": "Embryogenesis involves the zygote dividing by mitosis to form a multicellular embryo."
    },
    {
        "Q.No": "100",
        "Question": "What type of reproduction occurs in humans?",
        "Option A": "Asexual reproduction",
        "Option B": "Sexual reproduction",
        "Option C": "Budding",
        "Option D": "Binary fission",
        "Correct Option": "B",
        "Explanation": "Humans reproduce sexually, involving the fusion of male and female gametes."
    }
      ]
    },
    "Human Skeleton & Muscles": {
      color: "#a0522d",
      icon: "🦴",
      questions: [
        {
        "Q.No": "1",
        "Question": "Which of the following structures provides support to plant cells?",
        "Option A": "Mitochondria",
        "Option B": "Chloroplast",
        "Option C": "Cell wall",
        "Option D": "Nucleus",
        "Correct Option": "C",
        "Explanation": "The cell wall in plant cells provides structure and support."
    },
    {
        "Q.No": "2",
        "Question": "What is the main function of the human skeleton?",
        "Option A": "To produce energy",
        "Option B": "To aid in digestion",
        "Option C": "To provide support and protection",
        "Option D": "To produce blood cells",
        "Correct Option": "C",
        "Explanation": "The skeleton provides structural support and protection for internal organs."
    },
    {
        "Q.No": "3",
        "Question": "What type of muscle is responsible for involuntary movements in humans?",
        "Option A": "Skeletal muscle",
        "Option B": "Cardiac muscle",
        "Option C": "Smooth muscle",
        "Option D": "Striated muscle",
        "Correct Option": "C",
        "Explanation": "Smooth muscle is responsible for involuntary movements, such as those in the digestive system."
    },
    {
        "Q.No": "4",
        "Question": "What is the primary function of ligaments?",
        "Option A": "To connect muscles to bones",
        "Option B": "To support bones",
        "Option C": "To connect bones to bones",
        "Option D": "To protect organs",
        "Correct Option": "C",
        "Explanation": "Ligaments connect bones to other bones at joints, providing stability."
    },
    {
        "Q.No": "5",
        "Question": "What type of joint allows for the widest range of movement in humans?",
        "Option A": "Hinge joint",
        "Option B": "Ball-and-socket joint",
        "Option C": "Pivot joint",
        "Option D": "Gliding joint",
        "Correct Option": "B",
        "Explanation": "The ball-and-socket joint (e.g., shoulder, hip) allows the greatest range of motion."
    },
    {
        "Q.No": "6",
        "Question": "Which of the following is a characteristic of cartilage?",
        "Option A": "It is rigid and hard",
        "Option B": "It is flexible and rubbery",
        "Option C": "It forms the bone structure",
        "Option D": "It has no blood vessels",
        "Correct Option": "B",
        "Explanation": "Cartilage is flexible and rubbery, providing support and cushioning at joints."
    },
    {
        "Q.No": "7",
        "Question": "What is the role of tendons in the human body?",
        "Option A": "To connect muscles to bones",
        "Option B": "To connect bones to bones",
        "Option C": "To support organs",
        "Option D": "To produce movement",
        "Correct Option": "A",
        "Explanation": "Tendons connect muscles to bones, allowing for movement at joints."
    },
    {
        "Q.No": "8",
        "Question": "Which of the following is an example of a hinge joint?",
        "Option A": "Knee",
        "Option B": "Shoulder",
        "Option C": "Wrist",
        "Option D": "Neck",
        "Correct Option": "A",
        "Explanation": "The knee joint is a hinge joint that allows movement in one plane (flexion and extension)."
    },
    {
        "Q.No": "9",
        "Question": "Which type of muscle is found in the heart?",
        "Option A": "Skeletal muscle",
        "Option B": "Smooth muscle",
        "Option C": "Cardiac muscle",
        "Option D": "Striated muscle",
        "Correct Option": "C",
        "Explanation": "Cardiac muscle is found in the heart and is responsible for its contractions."
    },
    {
        "Q.No": "10",
        "Question": "What is the main structural protein in bones?",
        "Option A": "Actin",
        "Option B": "Collagen",
        "Option C": "Keratin",
        "Option D": "Myosin",
        "Correct Option": "B",
        "Explanation": "Collagen is the main protein in bones, providing strength and flexibility."
    },
    {
        "Q.No": "11",
        "Question": "What part of the skeleton protects the brain?",
        "Option A": "Skull",
        "Option B": "Ribs",
        "Option C": "Spine",
        "Option D": "Pelvis",
        "Correct Option": "A",
        "Explanation": "The skull protects the brain from physical damage."
    },
    {
        "Q.No": "12",
        "Question": "What is the name of the fluid-filled cavity in the center of bones?",
        "Option A": "Osteon",
        "Option B": "Medullary cavity",
        "Option C": "Synovial fluid",
        "Option D": "Periosteum",
        "Correct Option": "B",
        "Explanation": "The medullary cavity is a hollow space within bones that contains bone marrow."
    },
    {
        "Q.No": "13",
        "Question": "Which of the following structures is responsible for movement in skeletal muscles?",
        "Option A": "Tendons",
        "Option B": "Ligaments",
        "Option C": "Sarcomeres",
        "Option D": "Cartilage",
        "Correct Option": "C",
        "Explanation": "Sarcomeres, the basic units of muscle contraction, are responsible for movement in skeletal muscles."
    },
    {
        "Q.No": "14",
        "Question": "What type of movement occurs at a ball-and-socket joint?",
        "Option A": "Flexion",
        "Option B": "Rotation",
        "Option C": "Abduction",
        "Option D": "All of the above",
        "Correct Option": "D",
        "Explanation": "Ball-and-socket joints, such as the shoulder and hip, allow various movements, including flexion, rotation, and abduction."
    },
    {
        "Q.No": "15",
        "Question": "What is the main function of the skeletal system?",
        "Option A": "To store fat",
        "Option B": "To produce hormones",
        "Option C": "To maintain body temperature",
        "Option D": "To provide structural support and facilitate movement",
        "Correct Option": "D",
        "Explanation": "The skeletal system provides structure, support, and enables movement through its connection with muscles."
    },
    {
        "Q.No": "16",
        "Question": "Which of the following best describes the movement of muscles?",
        "Option A": "They contract and extend",
        "Option B": "They stay rigid and fixed",
        "Option C": "They grow larger",
        "Option D": "They only contract",
        "Correct Option": "A",
        "Explanation": "Muscles contract and extend to produce movement in the body."
    },
    {
        "Q.No": "17",
        "Question": "What type of muscle allows for voluntary movement?",
        "Option A": "Smooth muscle",
        "Option B": "Cardiac muscle",
        "Option C": "Skeletal muscle",
        "Option D": "Both smooth and skeletal muscle",
        "Correct Option": "C",
        "Explanation": "Skeletal muscle controls voluntary movements such as walking and lifting."
    },
    {
        "Q.No": "18",
        "Question": "What is the function of the synovial fluid?",
        "Option A": "To provide energy",
        "Option B": "To lubricate joints",
        "Option C": "To connect muscles to bones",
        "Option D": "To protect internal organs",
        "Correct Option": "B",
        "Explanation": "Synovial fluid lubricates joints, reducing friction and allowing smooth movement."
    },
    {
        "Q.No": "19",
        "Question": "Which of the following bones is part of the axial skeleton?",
        "Option A": "Femur",
        "Option B": "Humerus",
        "Option C": "Vertebrae",
        "Option D": "Tibia",
        "Correct Option": "C",
        "Explanation": "The vertebrae are part of the axial skeleton, which includes the skull, spine, and rib cage."
    },
    {
        "Q.No": "20",
        "Question": "What is the primary purpose of bones in the body?",
        "Option A": "To store calcium",
        "Option B": "To protect organs",
        "Option C": "To produce blood cells",
        "Option D": "All of the above",
        "Correct Option": "D",
        "Explanation": "Bones store calcium, protect vital organs, and are involved in the production of blood cells."
    },
    {
        "Q.No": "21",
        "Question": "What is the name of the hard outer layer of bone?",
        "Option A": "Periosteum",
        "Option B": "Compact bone",
        "Option C": "Spongy bone",
        "Option D": "Bone marrow",
        "Correct Option": "B",
        "Explanation": "Compact bone is the dense, hard outer layer of bone that provides strength."
    },
    {
        "Q.No": "22",
        "Question": "What type of movement is demonstrated when you bend your arm at the elbow?",
        "Option A": "Flexion",
        "Option B": "Extension",
        "Option C": "Rotation",
        "Option D": "Abduction",
        "Correct Option": "A",
        "Explanation": "Flexion is the movement of bending a joint, such as the elbow."
    },
    {
        "Q.No": "23",
        "Question": "Which of the following types of joints allows for rotation?",
        "Option A": "Hinge joint",
        "Option B": "Ball-and-socket joint",
        "Option C": "Pivot joint",
        "Option D": "Saddle joint",
        "Correct Option": "C",
        "Explanation": "Pivot joints allow rotation, such as the joint between the first and second cervical vertebrae."
    },
    {
        "Q.No": "24",
        "Question": "What is the function of the bursa in joints?",
        "Option A": "To support muscles",
        "Option B": "To store synovial fluid",
        "Option C": "To reduce friction",
        "Option D": "To store calcium",
        "Correct Option": "C",
        "Explanation": "The bursa is a fluid-filled sac that reduces friction between joints and surrounding tissues."
    },
    {
        "Q.No": "25",
        "Question": "What is the main structural difference between ligaments and tendons?",
        "Option A": "Ligaments connect muscles to bones, tendons connect bones to bones",
        "Option B": "Ligaments connect bones to bones, tendons connect muscles to bones",
        "Option C": "Ligaments are more elastic than tendons",
        "Option D": "Tendons have a more rigid structure than ligaments",
        "Correct Option": "B",
        "Explanation": "Ligaments connect bones to other bones, while tendons connect muscles to bones."
    },
    {
        "Q.No": "26",
        "Question": "Which part of the human body has a hinge joint?",
        "Option A": "Elbow",
        "Option B": "Hip",
        "Option C": "Spine",
        "Option D": "Neck",
        "Correct Option": "A",
        "Explanation": "The elbow is a hinge joint, allowing for bending and straightening."
    },
    {
        "Q.No": "27",
        "Question": "What type of tissue makes up the majority of the bones?",
        "Option A": "Cartilage",
        "Option B": "Bone tissue",
        "Option C": "Muscle tissue",
        "Option D": "Connective tissue",
        "Correct Option": "B",
        "Explanation": "Bone tissue, also known as osseous tissue, makes up the majority of the bones."
    },
    {
        "Q.No": "28",
        "Question": "What is the purpose of the skeletal muscles in relation to movement?",
        "Option A": "To provide strength to bones",
        "Option B": "To produce movement by contracting and pulling on bones",
        "Option C": "To generate energy",
        "Option D": "To support vital organs",
        "Correct Option": "B",
        "Explanation": "Skeletal muscles produce movement by contracting and pulling on bones at the joints."
    },
    {
        "Q.No": "29",
        "Question": "Which of the following bones is part of the appendicular skeleton?",
        "Option A": "Skull",
        "Option B": "Rib cage",
        "Option C": "Pelvis",
        "Option D": "Spine",
        "Correct Option": "C",
        "Explanation": "The pelvis is part of the appendicular skeleton, which includes the limbs and girdles."
    },
    {
        "Q.No": "30",
        "Question": "What is the role of calcium in the human skeleton?",
        "Option A": "To make bones rigid and strong",
        "Option B": "To help muscles contract",
        "Option C": "To store fat",
        "Option D": "To produce energy",
        "Correct Option": "A",
        "Explanation": "Calcium is a key mineral that gives bones their strength and rigidity."
    },
    {
        "Q.No": "31",
        "Question": "Which structure in the body is responsible for transporting oxygen to muscles?",
        "Option A": "Blood vessels",
        "Option B": "Lymphatic system",
        "Option C": "Nerve cells",
        "Option D": "Bone marrow",
        "Correct Option": "A",
        "Explanation": "Blood vessels transport oxygen, nutrients, and waste products throughout the body, including to muscles."
    },
    {
        "Q.No": "32",
        "Question": "What is the name of the movement where a limb moves away from the midline of the body?",
        "Option A": "Flexion",
        "Option B": "Extension",
        "Option C": "Abduction",
        "Option D": "Adduction",
        "Correct Option": "C",
        "Explanation": "Abduction is the movement of a limb away from the midline of the body."
    },
    {
        "Q.No": "33",
        "Question": "Which of the following muscles is responsible for voluntary control?",
        "Option A": "Cardiac muscle",
        "Option B": "Skeletal muscle",
        "Option C": "Smooth muscle",
        "Option D": "Both skeletal and cardiac muscle",
        "Correct Option": "B",
        "Explanation": "Skeletal muscles are under voluntary control and allow conscious movement."
    },
    {
        "Q.No": "34",
        "Question": "What part of the skeleton allows for movement and flexibility?",
        "Option A": "Ligaments",
        "Option B": "Cartilage",
        "Option C": "Tendons",
        "Option D": "Joints",
        "Correct Option": "D",
        "Explanation": "Joints are the connections between bones that allow for movement and flexibility."
    },
    {
        "Q.No": "35",
        "Question": "What is the term for the contraction of skeletal muscles to produce movement?",
        "Option A": "Extension",
        "Option B": "Flexion",
        "Option C": "Locomotion",
        "Option D": "Muscle contraction",
        "Correct Option": "D",
        "Explanation": "Muscle contraction produces movement by shortening and pulling on bones."
    },
    {
        "Q.No": "36",
        "Question": "Which type of muscle is responsible for the rhythmic contractions of the heart?",
        "Option A": "Skeletal muscle",
        "Option B": "Cardiac muscle",
        "Option C": "Smooth muscle",
        "Option D": "Both cardiac and skeletal muscles",
        "Correct Option": "B",
        "Explanation": "Cardiac muscle is responsible for the rhythmic contractions of the heart."
    },
    {
        "Q.No": "37",
        "Question": "What is the primary function of the skeletal system in terms of movement?",
        "Option A": "To protect the body",
        "Option B": "To facilitate movement through muscle-bone interaction",
        "Option C": "To store calcium",
        "Option D": "To produce blood cells",
        "Correct Option": "B",
        "Explanation": "The skeletal system facilitates movement by providing a framework for muscles to act on."
    },
    {
        "Q.No": "38",
        "Question": "What are osteoblasts responsible for in bone tissue?",
        "Option A": "Destroying old bone tissue",
        "Option B": "Producing bone matrix",
        "Option C": "Storing fat",
        "Option D": "Transporting oxygen",
        "Correct Option": "B",
        "Explanation": "Osteoblasts are responsible for producing bone matrix and building new bone tissue."
    },
    {
        "Q.No": "39",
        "Question": "What is the function of the periosteum in bones?",
        "Option A": "To produce blood cells",
        "Option B": "To provide energy",
        "Option C": "To protect and nourish bone tissue",
        "Option D": "To store calcium",
        "Correct Option": "C",
        "Explanation": "The periosteum is a protective layer that nourishes and supports bone tissue."
    },
    {
        "Q.No": "40",
        "Question": "Which of the following is a characteristic of skeletal muscles?",
        "Option A": "They are involuntary",
        "Option B": "They are striated and multinucleated",
        "Option C": "They are found in the walls of organs",
        "Option D": "They are found in the heart",
        "Correct Option": "B",
        "Explanation": "Skeletal muscles are striated, multinucleated, and responsible for voluntary movement."
    },
    {
        "Q.No": "41",
        "Question": "What is the term for the end of a bone that articulates with another bone at a joint?",
        "Option A": "Diaphysis",
        "Option B": "Epiphysis",
        "Option C": "Medullary cavity",
        "Option D": "Periosteum",
        "Correct Option": "B",
        "Explanation": "The epiphysis is the end of a bone that forms a joint with another bone."
    },
    {
        "Q.No": "42",
        "Question": "Which of the following is a function of cartilage?",
        "Option A": "To store calcium",
        "Option B": "To provide support and reduce friction at joints",
        "Option C": "To connect muscles to bones",
        "Option D": "To produce blood cells",
        "Correct Option": "B",
        "Explanation": "Cartilage reduces friction and provides support at joints, facilitating smooth movement."
    },
    {
        "Q.No": "43",
        "Question": "What is the role of red bone marrow in the skeletal system?",
        "Option A": "To store calcium",
        "Option B": "To produce blood cells",
        "Option C": "To provide bone rigidity",
        "Option D": "To produce energy",
        "Correct Option": "B",
        "Explanation": "Red bone marrow is responsible for producing red blood cells, white blood cells, and platelets."
    },
    {
        "Q.No": "44",
        "Question": "What is the term for the process of bone formation?",
        "Option A": "Osteogenesis",
        "Option B": "Osteolysis",
        "Option C": "Osteoporosis",
        "Option D": "Osteopathy",
        "Correct Option": "A",
        "Explanation": "Osteogenesis is the process of bone formation in the body."
    },
    {
        "Q.No": "45",
        "Question": "Which part of the human skeleton is responsible for protecting the lungs and heart?",
        "Option A": "Skull",
        "Option B": "Ribs",
        "Option C": "Spine",
        "Option D": "Pelvis",
        "Correct Option": "B",
        "Explanation": "The ribs form a protective cage around the heart and lungs."
    },
    {
        "Q.No": "46",
        "Question": "Which of the following movements occurs at a hinge joint?",
        "Option A": "Rotation",
        "Option B": "Flexion",
        "Option C": "Abduction",
        "Option D": "Adduction",
        "Correct Option": "B",
        "Explanation": "Flexion is a movement that occurs at a hinge joint, such as the elbow or knee."
    },
    {
        "Q.No": "47",
        "Question": "What is the role of smooth muscle in the body?",
        "Option A": "To provide voluntary movement",
        "Option B": "To control the heartbeat",
        "Option C": "To facilitate movement of food through the digestive system",
        "Option D": "To allow for quick reflexes",
        "Correct Option": "C",
        "Explanation": "Smooth muscle controls involuntary movements, such as peristalsis in the digestive system."
    },
    {
        "Q.No": "48",
        "Question": "Which of the following bones is part of the appendicular skeleton?",
        "Option A": "Skull",
        "Option B": "Sternum",
        "Option C": "Femur",
        "Option D": "Rib cage",
        "Correct Option": "C",
        "Explanation": "The femur is part of the appendicular skeleton, which includes the limbs and girdles."
    },
    {
        "Q.No": "49",
        "Question": "What is the name of the connective tissue that surrounds and supports muscle fibers?",
        "Option A": "Cartilage",
        "Option B": "Tendon",
        "Option C": "Ligament",
        "Option D": "Endomysium",
        "Correct Option": "D",
        "Explanation": "The endomysium is a connective tissue layer that surrounds individual muscle fibers."
    },
    {
        "Q.No": "50",
        "Question": "Which bone is involved in the process of jaw movement?",
        "Option A": "Tibia",
        "Option B": "Mandible",
        "Option C": "Femur",
        "Option D": "Clavicle",
        "Correct Option": "B",
        "Explanation": "The mandible is the bone that forms the lower jaw and is involved in jaw movement."
    },
    {
        "Q.No": "51",
        "Question": "What type of muscle is responsible for maintaining posture?",
        "Option A": "Skeletal muscle",
        "Option B": "Smooth muscle",
        "Option C": "Cardiac muscle",
        "Option D": "Both skeletal and smooth muscle",
        "Correct Option": "A",
        "Explanation": "Skeletal muscles are responsible for maintaining posture by providing support and stability."
    },
    {
        "Q.No": "52",
        "Question": "What is the function of the intervertebral discs?",
        "Option A": "To connect muscles to bones",
        "Option B": "To cushion the vertebrae and allow movement",
        "Option C": "To support the rib cage",
        "Option D": "To protect the spinal cord",
        "Correct Option": "B",
        "Explanation": "Intervertebral discs act as shock absorbers between the vertebrae and allow movement of the spine."
    },
    {
        "Q.No": "53",
        "Question": "Which of the following is a type of connective tissue that connects muscle to bone?",
        "Option A": "Tendon",
        "Option B": "Ligament",
        "Option C": "Cartilage",
        "Option D": "Blood vessel",
        "Correct Option": "A",
        "Explanation": "Tendons are connective tissues that connect muscles to bones."
    },
    {
        "Q.No": "54",
        "Question": "What is the name of the fibrous tissue that holds bones together at joints?",
        "Option A": "Cartilage",
        "Option B": "Ligament",
        "Option C": "Tendon",
        "Option D": "Bone marrow",
        "Correct Option": "B",
        "Explanation": "Ligaments are fibrous tissues that connect bones to other bones at joints."
    },
    {
        "Q.No": "55",
        "Question": "What is the function of the axial skeleton?",
        "Option A": "To protect vital organs",
        "Option B": "To allow movement of the limbs",
        "Option C": "To store calcium",
        "Option D": "To produce blood cells",
        "Correct Option": "A",
        "Explanation": "The axial skeleton, including the skull and vertebral column, protects vital organs like the brain and heart."
    },
    {
        "Q.No": "56",
        "Question": "What is the name of the process by which muscles return to their resting length after contraction?",
        "Option A": "Extension",
        "Option B": "Flexion",
        "Option C": "Relaxation",
        "Option D": "Hyperextension",
        "Correct Option": "C",
        "Explanation": "Relaxation is the process by which muscles return to their resting length after contraction."
    },
    {
        "Q.No": "57",
        "Question": "What type of joint is found between the bones of the skull?",
        "Option A": "Hinge joint",
        "Option B": "Ball-and-socket joint",
        "Option C": "Sutural joint",
        "Option D": "Pivot joint",
        "Correct Option": "C",
        "Explanation": "Sutural joints are immovable joints found between the bones of the skull."
    },
    {
        "Q.No": "58",
        "Question": "What is the main characteristic of a synovial joint?",
        "Option A": "It allows no movement",
        "Option B": "It allows limited movement",
        "Option C": "It is connected by cartilage",
        "Option D": "It allows free movement",
        "Correct Option": "D",
        "Explanation": "Synovial joints allow free movement between bones and are surrounded by synovial fluid."
    },
    {
        "Q.No": "59",
        "Question": "Which of the following is true about cardiac muscle?",
        "Option A": "It is striated and multinucleated",
        "Option B": "It is involuntary and found in the heart",
        "Option C": "It is voluntary and attaches to bones",
        "Option D": "It is smooth and lacks striations",
        "Correct Option": "B",
        "Explanation": "Cardiac muscle is involuntary, striated, and found only in the heart."
    },
    {
        "Q.No": "60",
        "Question": "What is the term for the bending of a limb at a joint?",
        "Option A": "Flexion",
        "Option B": "Extension",
        "Option C": "Rotation",
        "Option D": "Circumduction",
        "Correct Option": "A",
        "Explanation": "Flexion is the bending of a limb at a joint, reducing the angle between the bones."
    },
    {
        "Q.No": "61",
        "Question": "What is the role of osteoclasts in bone tissue?",
        "Option A": "To produce bone matrix",
        "Option B": "To destroy old bone tissue",
        "Option C": "To store calcium",
        "Option D": "To form cartilage",
        "Correct Option": "B",
        "Explanation": "Osteoclasts break down old bone tissue in a process called bone resorption."
    },
    {
        "Q.No": "62",
        "Question": "What type of muscle is involved in the movement of food through the digestive system?",
        "Option A": "Skeletal muscle",
        "Option B": "Smooth muscle",
        "Option C": "Cardiac muscle",
        "Option D": "All of the above",
        "Correct Option": "B",
        "Explanation": "Smooth muscle is involved in involuntary movements like peristalsis in the digestive system."
    },
    {
        "Q.No": "63",
        "Question": "Which type of joint allows for the rotation of the head?",
        "Option A": "Hinge joint",
        "Option B": "Ball-and-socket joint",
        "Option C": "Pivot joint",
        "Option D": "Saddle joint",
        "Correct Option": "C",
        "Explanation": "A pivot joint, like the one between the first and second cervical vertebrae, allows rotation of the head."
    },
    {
        "Q.No": "64",
        "Question": "What part of the skeleton is responsible for the movement of the arm?",
        "Option A": "Femur",
        "Option B": "Humerus",
        "Option C": "Vertebrae",
        "Option D": "Rib cage",
        "Correct Option": "B",
        "Explanation": "The humerus is the bone in the upper arm that is responsible for arm movement."
    },
    {
        "Q.No": "65",
        "Question": "What is the role of myosin in muscle contraction?",
        "Option A": "To store calcium",
        "Option B": "To produce energy",
        "Option C": "To bind to actin and pull the muscle fibers",
        "Option D": "To break down glucose",
        "Correct Option": "C",
        "Explanation": "Myosin binds to actin and pulls the muscle fibers, causing muscle contraction."
    },
    {
        "Q.No": "66",
        "Question": "What is the function of the skeletal system in calcium storage?",
        "Option A": "To produce calcium",
        "Option B": "To store calcium for later use",
        "Option C": "To regulate calcium levels in the blood",
        "Option D": "To transport calcium",
        "Correct Option": "B",
        "Explanation": "Bones store calcium and release it into the bloodstream when needed to maintain homeostasis."
    },
    {
        "Q.No": "67",
        "Question": "What is the primary role of the rotator cuff muscles in the shoulder?",
        "Option A": "To stabilize the shoulder joint",
        "Option B": "To rotate the shoulder blade",
        "Option C": "To connect the shoulder to the spine",
        "Option D": "To allow arm extension",
        "Correct Option": "A",
        "Explanation": "The rotator cuff muscles stabilize the shoulder joint and help in shoulder movement."
    },
    {
        "Q.No": "68",
        "Question": "Which of the following describes a ball-and-socket joint?",
        "Option A": "It allows movement in one direction",
        "Option B": "It allows circular motion and rotation",
        "Option C": "It allows movement only in two directions",
        "Option D": "It allows no movement",
        "Correct Option": "B",
        "Explanation": "Ball-and-socket joints allow movement in all directions, including rotation (e.g., shoulder, hip)."
    },
    {
        "Q.No": "69",
        "Question": "What is the purpose of red bone marrow in bones?",
        "Option A": "To provide structure",
        "Option B": "To produce blood cells",
        "Option C": "To store fat",
        "Option D": "To produce bone tissue",
        "Correct Option": "B",
        "Explanation": "Red bone marrow is responsible for producing red blood cells, white blood cells, and platelets."
    },
    {
        "Q.No": "70",
        "Question": "What type of muscle is found in the walls of internal organs?",
        "Option A": "Skeletal muscle",
        "Option B": "Cardiac muscle",
        "Option C": "Smooth muscle",
        "Option D": "None of the above",
        "Correct Option": "C",
        "Explanation": "Smooth muscle is found in the walls of internal organs and helps in involuntary movements."
    },
    {
        "Q.No": "71",
        "Question": "What is the function of the pelvic girdle?",
        "Option A": "To protect the brain",
        "Option B": "To connect the arms to the torso",
        "Option C": "To protect the organs in the abdominal cavity",
        "Option D": "To connect the lower limbs to the axial skeleton",
        "Correct Option": "D",
        "Explanation": "The pelvic girdle connects the lower limbs to the axial skeleton and supports the weight of the body."
    },
    {
        "Q.No": "72",
        "Question": "What happens when skeletal muscles contract?",
        "Option A": "They become longer",
        "Option B": "They shorten and pull on bones",
        "Option C": "They relax and extend",
        "Option D": "They stay the same length",
        "Correct Option": "B",
        "Explanation": "Skeletal muscles shorten (contract) and pull on bones to produce movement."
    },
    {
        "Q.No": "73",
        "Question": "What is the primary function of cartilage in joints?",
        "Option A": "To provide flexibility",
        "Option B": "To reduce friction and absorb shock",
        "Option C": "To produce blood cells",
        "Option D": "To connect muscles to bones",
        "Correct Option": "B",
        "Explanation": "Cartilage reduces friction at joints and acts as a shock absorber during movement."
    },
    {
        "Q.No": "74",
        "Question": "Which of the following is a feature of smooth muscle?",
        "Option A": "Voluntary control",
        "Option B": "Found in the heart",
        "Option C": "Involuntary and non-striated",
        "Option D": "Found in the limbs",
        "Correct Option": "C",
        "Explanation": "Smooth muscle is involuntary, non-striated, and found in organs like the stomach and intestines."
    },
    {
        "Q.No": "75",
        "Question": "What is the purpose of the meniscus in the knee joint?",
        "Option A": "To protect the joint from infection",
        "Option B": "To reduce friction and absorb shock",
        "Option C": "To store synovial fluid",
        "Option D": "To support the ligaments",
        "Correct Option": "B",
        "Explanation": "The meniscus is a cartilage structure in the knee that reduces friction and absorbs shock."
    },
    {
        "Q.No": "76",
        "Question": "What is the function of actin in muscle contraction?",
        "Option A": "To store calcium",
        "Option B": "To break down glucose",
        "Option C": "To form muscle fibers",
        "Option D": "To interact with myosin to produce contraction",
        "Correct Option": "D",
        "Explanation": "Actin interacts with myosin to produce muscle contraction by sliding past each other."
    },
    {
        "Q.No": "77",
        "Question": "Which of the following bones forms part of the axial skeleton?",
        "Option A": "Radius",
        "Option B": "Tibia",
        "Option C": "Sternum",
        "Option D": "Scapula",
        "Correct Option": "C",
        "Explanation": "The sternum is part of the axial skeleton, which includes the ribs, vertebral column, and skull."
    },
    {
        "Q.No": "78",
        "Question": "What type of muscle is responsible for producing facial expressions?",
        "Option A": "Skeletal muscle",
        "Option B": "Cardiac muscle",
        "Option C": "Smooth muscle",
        "Option D": "Both skeletal and cardiac muscle",
        "Correct Option": "A",
        "Explanation": "Skeletal muscles are responsible for facial expressions, which are under voluntary control."
    },
    {
        "Q.No": "79",
        "Question": "What is the function of the synovial membrane in a joint?",
        "Option A": "To produce bone marrow",
        "Option B": "To produce synovial fluid",
        "Option C": "To connect bones to muscles",
        "Option D": "To stabilize the joint",
        "Correct Option": "B",
        "Explanation": "The synovial membrane produces synovial fluid, which lubricates the joint and reduces friction."
    },
    {
        "Q.No": "80",
        "Question": "What is the term for the movement of a limb toward the body’s midline?",
        "Option A": "Flexion",
        "Option B": "Extension",
        "Option C": "Abduction",
        "Option D": "Adduction",
        "Correct Option": "D",
        "Explanation": "Adduction is the movement of a limb toward the body's midline."
    },
    {
        "Q.No": "81",
        "Question": "What type of tissue makes up the majority of the walls of blood vessels?",
        "Option A": "Epithelial tissue",
        "Option B": "Muscle tissue",
        "Option C": "Connective tissue",
        "Option D": "Nervous tissue",
        "Correct Option": "B",
        "Explanation": "Muscle tissue (smooth muscle) makes up the majority of the walls of blood vessels."
    },
    {
        "Q.No": "82",
        "Question": "What is the name of the connective tissue that surrounds muscle fibers?",
        "Option A": "Cartilage",
        "Option B": "Tendon",
        "Option C": "Ligament",
        "Option D": "Endomysium",
        "Correct Option": "D",
        "Explanation": "The endomysium is the connective tissue that surrounds individual muscle fibers."
    },
    {
        "Q.No": "83",
        "Question": "Which of the following structures is responsible for cushioning the ends of bones in joints?",
        "Option A": "Ligaments",
        "Option B": "Tendons",
        "Option C": "Cartilage",
        "Option D": "Bone marrow",
        "Correct Option": "C",
        "Explanation": "Cartilage cushions the ends of bones in joints, reducing friction and providing shock absorption."
    },
    {
        "Q.No": "84",
        "Question": "What is the name of the tough outer layer of bones?",
        "Option A": "Endosteum",
        "Option B": "Periosteum",
        "Option C": "Epiphysis",
        "Option D": "Diaphysis",
        "Correct Option": "B",
        "Explanation": "The periosteum is the tough outer layer of bones, which contains blood vessels and nerves."
    },
    {
        "Q.No": "85",
        "Question": "What happens to the skeletal system as a person ages?",
        "Option A": "Bone density increases",
        "Option B": "Bone density decreases",
        "Option C": "Bone structure becomes stronger",
        "Option D": "Bone size increases",
        "Correct Option": "B",
        "Explanation": "As a person ages, bone density typically decreases, making bones more fragile."
    },
    {
        "Q.No": "86",
        "Question": "What is the main function of the heart muscle?",
        "Option A": "To support the circulatory system",
        "Option B": "To pump blood throughout the body",
        "Option C": "To protect the lungs",
        "Option D": "To produce blood cells",
        "Correct Option": "B",
        "Explanation": "The heart muscle (cardiac muscle) pumps blood throughout the body, supplying oxygen and nutrients."
    },
    {
        "Q.No": "87",
        "Question": "Which type of muscle fibers are most suited for endurance activities?",
        "Option A": "Fast-twitch fibers",
        "Option B": "Slow-twitch fibers",
        "Option C": "Both fast and slow-twitch fibers",
        "Option D": "Neither",
        "Correct Option": "B",
        "Explanation": "Slow-twitch muscle fibers are more suited for endurance activities due to their resistance to fatigue."
    },
    {
        "Q.No": "88",
        "Question": "Which part of the skeletal system includes the limbs and their attachments?",
        "Option A": "Axial skeleton",
        "Option B": "Appendicular skeleton",
        "Option C": "Cranial skeleton",
        "Option D": "Thoracic skeleton",
        "Correct Option": "B",
        "Explanation": "The appendicular skeleton includes the limbs and the girdles that attach them to the axial skeleton."
    },
    {
        "Q.No": "89",
        "Question": "What type of joint is the elbow?",
        "Option A": "Ball-and-socket joint",
        "Option B": "Hinge joint",
        "Option C": "Pivot joint",
        "Option D": "Saddle joint",
        "Correct Option": "B",
        "Explanation": "The elbow is a hinge joint, allowing movement in one plane, such as flexion and extension."
    },
    {
        "Q.No": "90",
        "Question": "What is the term for a bone forming within a tendon in response to stress?",
        "Option A": "Osteoblast",
        "Option B": "Osteoclast",
        "Option C": "Sesamoid bone",
        "Option D": "Ligament",
        "Correct Option": "C",
        "Explanation": "A sesamoid bone forms within a tendon, often in response to repetitive stress or pressure."
    },
    {
        "Q.No": "91",
        "Question": "What type of joint allows for the movement of the jaw?",
        "Option A": "Hinge joint",
        "Option B": "Ball-and-socket joint",
        "Option C": "Condyloid joint",
        "Option D": "Pivot joint",
        "Correct Option": "C",
        "Explanation": "The jaw moves at a condyloid joint, allowing for opening, closing, and limited side-to-side movement."
    },
    {
        "Q.No": "92",
        "Question": "Which of the following muscles is involved in the movement of the eye?",
        "Option A": "Orbicularis oculi",
        "Option B": "Rectus abdominis",
        "Option C": "Biceps brachii",
        "Option D": "Extraocular muscles",
        "Correct Option": "D",
        "Explanation": "The extraocular muscles control the movement of the eye."
    },
    {
        "Q.No": "93",
        "Question": "What type of muscle fibers are adapted for short bursts of strength and power?",
        "Option A": "Slow-twitch fibers",
        "Option B": "Fast-twitch fibers",
        "Option C": "Smooth muscle fibers",
        "Option D": "Cardiac muscle fibers",
        "Correct Option": "B",
        "Explanation": "Fast-twitch muscle fibers are adapted for short bursts of strength and power, such as sprinting."
    },
    {
        "Q.No": "94",
        "Question": "What is the role of synovial fluid in joints?",
        "Option A": "To lubricate the joint",
        "Option B": "To produce cartilage",
        "Option C": "To stabilize the bones",
        "Option D": "To store calcium",
        "Correct Option": "A",
        "Explanation": "Synovial fluid lubricates the joint, reducing friction and enabling smooth movement."
    },
    {
        "Q.No": "95",
        "Question": "Which of the following is a function of skeletal muscles?",
        "Option A": "Producing blood cells",
        "Option B": "Maintaining posture",
        "Option C": "Regulating body temperature",
        "Option D": "All of the above",
        "Correct Option": "D",
        "Explanation": "Skeletal muscles are responsible for posture, movement, and temperature regulation."
    },
    {
        "Q.No": "96",
        "Question": "What is the primary role of ligaments?",
        "Option A": "To attach muscles to bones",
        "Option B": "To protect organs",
        "Option C": "To connect bones to bones",
        "Option D": "To store calcium",
        "Correct Option": "C",
        "Explanation": "Ligaments connect bones to other bones at joints, providing stability and support."
    },
    {
        "Q.No": "97",
        "Question": "What part of the skeletal system supports the weight of the body?",
        "Option A": "Ribs",
        "Option B": "Spine",
        "Option C": "Pelvis",
        "Option D": "Femur",
        "Correct Option": "B",
        "Explanation": "The spine supports the weight of the body, especially the lower back and pelvis."
    },
    {
        "Q.No": "98",
        "Question": "What is the primary role of the patella (knee cap)?",
        "Option A": "To protect the knee joint",
        "Option B": "To provide muscle attachment",
        "Option C": "To aid in knee flexion",
        "Option D": "To prevent joint inflammation",
        "Correct Option": "A",
        "Explanation": "The patella protects the knee joint and enhances the leverage of the quadriceps muscle."
    },
    {
        "Q.No": "99",
        "Question": "What is the process of muscle contraction that involves the sliding of actin and myosin filaments?",
        "Option A": "Cross-bridge cycle",
        "Option B": "Muscle elongation",
        "Option C": "Tendon shortening",
        "Option D": "Bone remodeling",
        "Correct Option": "A",
        "Explanation": "The cross-bridge cycle involves the sliding of actin and myosin filaments to produce muscle contraction."
    },
    {
        "Q.No": "100",
        "Question": "Which of the following joints allows for limited rotation of the head?",
        "Option A": "Hinge joint",
        "Option B": "Pivot joint",
        "Option C": "Ball-and-socket joint",
        "Option D": "Saddle joint",
        "Correct Option": "B",
        "Explanation": "The pivot joint between the atlas and axis vertebrae allows rotation of the head."
    }
      ]
    },
    "Genetics & Heredity": {
      color: "#27ae60",
      icon: "🧬",
      questions: [
        {
        "Q.No": "1",
        "Question": "What is the term for the genetic makeup of an organism?",
        "Option A": "Genotype",
        "Option B": "Phenotype",
        "Option C": "Alleles",
        "Option D": "Gene pool",
        "Correct Option": "A",
        "Explanation": "Genotype refers to the genetic makeup or composition of an organism."
    },
    {
        "Q.No": "2",
        "Question": "Which molecule carries genetic information?",
        "Option A": "DNA",
        "Option B": "Protein",
        "Option C": "Lipids",
        "Option D": "Carbohydrates",
        "Correct Option": "A",
        "Explanation": "DNA (Deoxyribonucleic acid) carries the genetic instructions used in the growth, development, functioning, and reproduction of organisms."
    },
    {
        "Q.No": "3",
        "Question": "What is the observable trait or characteristic of an organism called?",
        "Option A": "Genotype",
        "Option B": "Phenotype",
        "Option C": "Locus",
        "Option D": "Allele",
        "Correct Option": "B",
        "Explanation": "Phenotype refers to the observable physical characteristics of an organism, which result from its genotype."
    },
    {
        "Q.No": "4",
        "Question": "What is the process of passing on traits from parents to offspring?",
        "Option A": "Reproduction",
        "Option B": "Inheritance",
        "Option C": "Evolution",
        "Option D": "Genetic mutation",
        "Correct Option": "B",
        "Explanation": "Inheritance is the process of passing genetic information from parents to offspring."
    },
    {
        "Q.No": "5",
        "Question": "Which of the following is a heterozygous genotype?",
        "Option A": "AA",
        "Option B": "Aa",
        "Option C": "aa",
        "Option D": "AB",
        "Correct Option": "B",
        "Explanation": "Aa represents a heterozygous genotype, where one allele is dominant and the other is recessive."
    },
    {
        "Q.No": "6",
        "Question": "What is the purpose of meiosis in sexual reproduction?",
        "Option A": "To produce identical cells",
        "Option B": "To create genetic variation",
        "Option C": "To generate energy",
        "Option D": "To replicate DNA",
        "Correct Option": "B",
        "Explanation": "Meiosis is a type of cell division that produces genetically diverse gametes."
    },
    {
        "Q.No": "7",
        "Question": "What is the term for different forms of a gene?",
        "Option A": "Alleles",
        "Option B": "Chromosomes",
        "Option C": "Nucleotides",
        "Option D": "Codons",
        "Correct Option": "A",
        "Explanation": "Alleles are different versions of a gene that arise through mutation."
    },
    {
        "Q.No": "8",
        "Question": "Which of the following determines the gender of an offspring?",
        "Option A": "Autosomes",
        "Option B": "X chromosomes",
        "Option C": "Y chromosomes",
        "Option D": "Sex chromosomes",
        "Correct Option": "D",
        "Explanation": "The combination of sex chromosomes (XX or XY) determines the gender of the offspring."
    },
    {
        "Q.No": "9",
        "Question": "What is the law of segregation?",
        "Option A": "Alleles segregate into different gametes",
        "Option B": "Two alleles for a gene are located on the same chromosome",
        "Option C": "Homologous chromosomes do not separate",
        "Option D": "Genes for different traits always assort together",
        "Correct Option": "A",
        "Explanation": "The law of segregation states that alleles for a gene segregate (separate) into different gametes during meiosis."
    },
    {
        "Q.No": "10",
        "Question": "In a Mendelian cross between two heterozygous individuals (Aa x Aa), what is the probability of getting an offspring with the homozygous recessive genotype (aa)?",
        "Option A": "25%",
        "Option B": "50%",
        "Option C": "75%",
        "Option D": "100%",
        "Correct Option": "A",
        "Explanation": "The probability of obtaining the homozygous recessive genotype (aa) is 25%."
    },
    {
        "Q.No": "11",
        "Question": "What is the genetic basis of variation within a population?",
        "Option A": "Mutation",
        "Option B": "Genetic drift",
        "Option C": "Natural selection",
        "Option D": "All of the above",
        "Correct Option": "D",
        "Explanation": "Variation in a population is caused by mutation, genetic drift, and natural selection."
    },
    {
        "Q.No": "12",
        "Question": "What is a Punnett square used for?",
        "Option A": "To determine the phenotypic ratio",
        "Option B": "To determine the genotypic ratio",
        "Option C": "To predict offspring traits based on parental genotypes",
        "Option D": "To map genes on chromosomes",
        "Correct Option": "C",
        "Explanation": "A Punnett square is used to predict the likelihood of offspring inheriting specific traits based on the parental genotypes."
    },
    {
        "Q.No": "13",
        "Question": "Which of the following is an example of incomplete dominance?",
        "Option A": "Red and white flowers produce pink offspring",
        "Option B": "Yellow and green pea plants produce only yellow plants",
        "Option C": "A red and white cat produces a red cat",
        "Option D": "Blue and green frogs always produce green offspring",
        "Correct Option": "A",
        "Explanation": "Incomplete dominance occurs when two different alleles result in a blended phenotype, such as pink flowers from red and white parents."
    },
    {
        "Q.No": "14",
        "Question": "What is the process of crossing over?",
        "Option A": "The fusion of two gametes",
        "Option B": "The exchange of genetic material between homologous chromosomes",
        "Option C": "The splitting of chromosomes during cell division",
        "Option D": "The mutation of genes during DNA replication",
        "Correct Option": "B",
        "Explanation": "Crossing over is the process where homologous chromosomes exchange genetic material during meiosis, leading to genetic variation."
    },
    {
        "Q.No": "15",
        "Question": "What is the term for the physical location of a gene on a chromosome?",
        "Option A": "Allele",
        "Option B": "Locus",
        "Option C": "Trait",
        "Option D": "Gene pool",
        "Correct Option": "B",
        "Explanation": "A locus is the specific physical location of a gene on a chromosome."
    },
    {
        "Q.No": "16",
        "Question": "Which of the following is an example of a dominant allele?",
        "Option A": "A allele for green eyes",
        "Option B": "A allele for blue eyes",
        "Option C": "A allele for brown eyes",
        "Option D": "A allele for sickle cell anemia",
        "Correct Option": "C",
        "Explanation": "Brown eyes are typically a dominant trait in humans."
    },
    {
        "Q.No": "17",
        "Question": "What is the term for the failure of chromosomes to separate properly during meiosis?",
        "Option A": "Nondisjunction",
        "Option B": "Crossing over",
        "Option C": "Mutation",
        "Option D": "Genetic drift",
        "Correct Option": "A",
        "Explanation": "Nondisjunction occurs when chromosomes fail to separate properly during meiosis, leading to gametes with abnormal chromosome numbers."
    },
    {
        "Q.No": "18",
        "Question": "What is the primary difference between mitosis and meiosis?",
        "Option A": "Mitosis results in four daughter cells, while meiosis results in two",
        "Option B": "Mitosis involves the division of gametes, while meiosis involves somatic cells",
        "Option C": "Mitosis creates genetically identical cells, while meiosis creates genetically diverse cells",
        "Option D": "Mitosis involves crossing over, while meiosis does not",
        "Correct Option": "C",
        "Explanation": "Mitosis creates two genetically identical cells, while meiosis creates four genetically diverse gametes."
    },
    {
        "Q.No": "19",
        "Question": "Which of the following is true about a homozygous individual?",
        "Option A": "They have two different alleles for a gene",
        "Option B": "They have two identical alleles for a gene",
        "Option C": "They cannot pass on genetic traits",
        "Option D": "They produce only dominant alleles",
        "Correct Option": "B",
        "Explanation": "A homozygous individual has two identical alleles for a particular gene."
    },
    {
        "Q.No": "20",
        "Question": "Which process leads to the formation of gametes?",
        "Option A": "Mitosis",
        "Option B": "Meiosis",
        "Option C": "Binary fission",
        "Option D": "Genetic recombination",
        "Correct Option": "B",
        "Explanation": "Meiosis is the process that leads to the formation of gametes, such as sperm and egg cells."
    },
    {
        "Q.No": "21",
        "Question": "What is the term for the genetic makeup of an organism with respect to a particular trait?",
        "Option A": "Genotype",
        "Option B": "Phenotype",
        "Option C": "Alleles",
        "Option D": "Gene pool",
        "Correct Option": "A",
        "Explanation": "Genotype refers to the genetic makeup of an organism regarding a specific trait."
    },
    {
        "Q.No": "22",
        "Question": "Which of the following best describes a recessive allele?",
        "Option A": "It is always expressed in the phenotype",
        "Option B": "It is only expressed when two copies are present",
        "Option C": "It cannot be inherited",
        "Option D": "It is stronger than the dominant allele",
        "Correct Option": "B",
        "Explanation": "A recessive allele is only expressed in the phenotype when two copies are present, one from each parent."
    },
    {
        "Q.No": "23",
        "Question": "What is the term for the genetic expression of a dominant allele in a heterozygous individual?",
        "Option A": "Codominance",
        "Option B": "Incomplete dominance",
        "Option C": "Complete dominance",
        "Option D": "Polymorphism",
        "Correct Option": "C",
        "Explanation": "Complete dominance occurs when the dominant allele is expressed in a heterozygous individual."
    },
    {
        "Q.No": "24",
        "Question": "What is a carrier in genetic terms?",
        "Option A": "A person who expresses a dominant allele",
        "Option B": "A person who expresses a recessive allele",
        "Option C": "A person who has one recessive allele and one dominant allele",
        "Option D": "A person who has two dominant alleles",
        "Correct Option": "C",
        "Explanation": "A carrier has one recessive allele and one dominant allele, so they do not express the recessive trait but can pass it on."
    },
    {
        "Q.No": "25",
        "Question": "What is the term for the observed traits of an organism, such as height or eye color?",
        "Option A": "Genotype",
        "Option B": "Phenotype",
        "Option C": "Allele",
        "Option D": "Chromosome",
        "Correct Option": "B",
        "Explanation": "Phenotype refers to the observed traits of an organism."
    },
    {
        "Q.No": "26",
        "Question": "Which of the following is an example of codominance?",
        "Option A": "Red and white flowers produce pink offspring",
        "Option B": "Both red and white flower colors are expressed in the offspring",
        "Option C": "A red and white cat produces a red cat",
        "Option D": "Both blue and green skin in frogs",
        "Correct Option": "B",
        "Explanation": "Codominance occurs when both alleles are expressed equally, such as in red and white flowers producing offspring with both red and white spots."
    },
    {
        "Q.No": "27",
        "Question": "What is a mutation?",
        "Option A": "A change in the sequence of DNA",
        "Option B": "A process that prevents inheritance",
        "Option C": "The passing of traits from parents to offspring",
        "Option D": "A form of genetic recombination",
        "Correct Option": "A",
        "Explanation": "A mutation is a change in the sequence of DNA that can lead to changes in traits."
    },
    {
        "Q.No": "28",
        "Question": "What is the main function of genetic recombination during meiosis?",
        "Option A": "To create identical daughter cells",
        "Option B": "To increase genetic diversity",
        "Option C": "To maintain chromosome number",
        "Option D": "To repair damaged DNA",
        "Correct Option": "B",
        "Explanation": "Genetic recombination during meiosis increases genetic diversity in offspring."
    },
    {
        "Q.No": "29",
        "Question": "In a dihybrid cross, what is the ratio of phenotypes expected in the F2 generation?",
        "Option A": "1:01",
        "Option B": "3:01",
        "Option C": "9:3:3:1",
        "Option D": "4:04",
        "Correct Option": "C",
        "Explanation": "A dihybrid cross between two heterozygous individuals typically results in a 9:3:3:1 phenotypic ratio."
    },
    {
        "Q.No": "30",
        "Question": "Which of the following is true about X-linked traits?",
        "Option A": "They are inherited in a similar manner by both males and females",
        "Option B": "They are more commonly expressed in females",
        "Option C": "They are inherited only from the mother",
        "Option D": "They are more commonly expressed in males",
        "Correct Option": "D",
        "Explanation": "X-linked traits are more commonly expressed in males because they have only one X chromosome."
    },
    {
        "Q.No": "31",
        "Question": "What is the main difference between genotype and phenotype?",
        "Option A": "Genotype is determined by the environment, while phenotype is genetic",
        "Option B": "Genotype refers to the genetic makeup, and phenotype refers to the physical appearance",
        "Option C": "Genotype refers to the traits expressed, and phenotype is the DNA sequence",
        "Option D": "Phenotype refers to the DNA sequence, and genotype refers to the traits",
        "Correct Option": "B",
        "Explanation": "Genotype refers to the genetic makeup of an organism, while phenotype is the outward expression of those genes."
    },
    {
        "Q.No": "32",
        "Question": "Which of the following factors contribute to genetic variation in a population?",
        "Option A": "Mutation",
        "Option B": "Genetic recombination",
        "Option C": "Natural selection",
        "Option D": "All of the above",
        "Correct Option": "D",
        "Explanation": "Genetic variation is influenced by mutation, genetic recombination, and natural selection."
    },
    {
        "Q.No": "33",
        "Question": "What is the term for the genetic change in a population over time?",
        "Option A": "Evolution",
        "Option B": "Mutation",
        "Option C": "Genetic drift",
        "Option D": "Gene flow",
        "Correct Option": "A",
        "Explanation": "Evolution is the process by which the genetic composition of a population changes over time."
    },
    {
        "Q.No": "34",
        "Question": "Which of the following is an example of a gene mutation that results in a change in phenotype?",
        "Option A": "A mutation causing cystic fibrosis",
        "Option B": "A mutation in the mitochondrial DNA",
        "Option C": "A silent mutation",
        "Option D": "A missense mutation",
        "Correct Option": "A",
        "Explanation": "A mutation causing cystic fibrosis is an example of a gene mutation that results in a change in phenotype."
    },
    {
        "Q.No": "35",
        "Question": "What is the genetic term for the process where two homologous chromosomes exchange genetic material?",
        "Option A": "Transcription",
        "Option B": "Translation",
        "Option C": "Crossing over",
        "Option D": "Replication",
        "Correct Option": "C",
        "Explanation": "Crossing over is the process in which homologous chromosomes exchange genetic material during meiosis."
    },
    {
        "Q.No": "36",
        "Question": "What is the term for the inheritance of traits controlled by a single gene?",
        "Option A": "Monogenic inheritance",
        "Option B": "Polygenic inheritance",
        "Option C": "Codominance",
        "Option D": "Incomplete dominance",
        "Correct Option": "A",
        "Explanation": "Monogenic inheritance refers to the inheritance of traits controlled by a single gene."
    },
    {
        "Q.No": "37",
        "Question": "Which of the following genetic disorders is caused by a recessive allele?",
        "Option A": "Cystic fibrosis",
        "Option B": "Huntington's disease",
        "Option C": "Hemophilia",
        "Option D": "Down syndrome",
        "Correct Option": "A",
        "Explanation": "Cystic fibrosis is a genetic disorder caused by a recessive allele."
    },
    {
        "Q.No": "38",
        "Question": "What is the probability of a homozygous dominant individual (AA) having offspring with a homozygous recessive individual (aa)?",
        "Option A": "0%",
        "Option B": "25%",
        "Option C": "50%",
        "Option D": "100%",
        "Correct Option": "C",
        "Explanation": "The cross between AA and aa would produce 50% heterozygous offspring (Aa)."
    },
    {
        "Q.No": "39",
        "Question": "What is the effect of a mutation on a gene?",
        "Option A": "It always causes a genetic disorder",
        "Option B": "It can lead to a change in the protein produced",
        "Option C": "It always enhances the organism's traits",
        "Option D": "It has no effect on the organism",
        "Correct Option": "B",
        "Explanation": "A mutation in a gene can lead to a change in the protein that is produced, potentially altering traits."
    },
    {
        "Q.No": "40",
        "Question": "Which of the following terms describes a gene variant that can be passed to offspring?",
        "Option A": "Allele",
        "Option B": "Locus",
        "Option C": "Trait",
        "Option D": "Genotype",
        "Correct Option": "A",
        "Explanation": "An allele is a variant form of a gene that can be inherited from parents to offspring."
    },
    {
        "Q.No": "41",
        "Question": "What type of inheritance is demonstrated by a trait controlled by multiple genes?",
        "Option A": "Monogenic inheritance",
        "Option B": "Polygenic inheritance",
        "Option C": "Codominance",
        "Option D": "Incomplete dominance",
        "Correct Option": "B",
        "Explanation": "Polygenic inheritance occurs when a trait is controlled by multiple genes."
    },
    {
        "Q.No": "42",
        "Question": "What is the term for the process by which organisms with traits better suited to their environment are more likely to survive and reproduce?",
        "Option A": "Natural selection",
        "Option B": "Genetic drift",
        "Option C": "Mutation",
        "Option D": "Evolution",
        "Correct Option": "A",
        "Explanation": "Natural selection is the process by which organisms with advantageous traits are more likely to survive and reproduce."
    },
    {
        "Q.No": "43",
        "Question": "What is the main function of tRNA during translation?",
        "Option A": "To carry genetic information from DNA",
        "Option B": "To form the ribosome",
        "Option C": "To bring amino acids to the ribosome",
        "Option D": "To transcribe DNA into mRNA",
        "Correct Option": "C",
        "Explanation": "tRNA brings amino acids to the ribosome during protein synthesis."
    },
    {
        "Q.No": "44",
        "Question": "What is the genetic material in bacteria?",
        "Option A": "DNA in a nucleus",
        "Option B": "Circular DNA in the cytoplasm",
        "Option C": "RNA in the cytoplasm",
        "Option D": "Mitochondrial DNA",
        "Correct Option": "B",
        "Explanation": "Bacteria have circular DNA located in the cytoplasm, not in a nucleus."
    },
    {
        "Q.No": "45",
        "Question": "Which of the following describes the inheritance pattern of color blindness?",
        "Option A": "Autosomal dominant",
        "Option B": "Autosomal recessive",
        "Option C": "X-linked recessive",
        "Option D": "X-linked dominant",
        "Correct Option": "C",
        "Explanation": "Color blindness is inherited as an X-linked recessive trait."
    },
    {
        "Q.No": "46",
        "Question": "Which of the following represents the genotype for a female with normal vision and a male who is colorblind?",
        "Option A": "XcX, XcY",
        "Option B": "XcX, XY",
        "Option C": "XX, XcY",
        "Option D": "XcX, XcY",
        "Correct Option": "B",
        "Explanation": "The female is heterozygous with normal vision (XcX), while the male is colorblind (XcY)."
    },
    {
        "Q.No": "47",
        "Question": "What is the term for the process where a gene expression can be modified by environmental factors?",
        "Option A": "Genetic drift",
        "Option B": "Epigenetics",
        "Option C": "Natural selection",
        "Option D": "Gene flow",
        "Correct Option": "B",
        "Explanation": "Epigenetics refers to changes in gene expression influenced by environmental factors."
    },
    {
        "Q.No": "48",
        "Question": "What is the term for the exchange of genes between different populations?",
        "Option A": "Mutation",
        "Option B": "Gene flow",
        "Option C": "Genetic drift",
        "Option D": "Inbreeding",
        "Correct Option": "B",
        "Explanation": "Gene flow is the exchange of genetic material between different populations."
    },
    {
        "Q.No": "49",
        "Question": "What does a pedigree chart show?",
        "Option A": "The family tree of an organism",
        "Option B": "The geographic distribution of genes",
        "Option C": "The genotype of individuals",
        "Option D": "The mutation rate of a gene",
        "Correct Option": "A",
        "Explanation": "A pedigree chart shows the family tree, indicating the inheritance of traits through generations."
    },
    {
        "Q.No": "50",
        "Question": "Which of the following is an example of a polygenic trait?",
        "Option A": "Eye color",
        "Option B": "Blood type",
        "Option C": "Height",
        "Option D": "Cystic fibrosis",
        "Correct Option": "C",
        "Explanation": "Height is an example of a polygenic trait, influenced by multiple genes."
    },
    {
        "Q.No": "51",
        "Question": "What is a gene mutation?",
        "Option A": "A change in the DNA sequence",
        "Option B": "A process that replicates genes",
        "Option C": "A crossing over event",
        "Option D": "A duplication of a chromosome",
        "Correct Option": "A",
        "Explanation": "A gene mutation is a change in the DNA sequence that can alter gene expression."
    },
    {
        "Q.No": "52",
        "Question": "Which of the following is true for a sex-linked trait?",
        "Option A": "It is inherited via the Y chromosome",
        "Option B": "It is inherited via the X chromosome",
        "Option C": "It only affects males",
        "Option D": "It only affects females",
        "Correct Option": "B",
        "Explanation": "Sex-linked traits are carried on the X chromosome, affecting both males and females, though often more in males."
    },
    {
        "Q.No": "53",
        "Question": "What is the F1 generation?",
        "Option A": "The first generation of offspring from the parental cross",
        "Option B": "The second generation of offspring",
        "Option C": "The offspring from self-pollination",
        "Option D": "The first-generation parents",
        "Correct Option": "A",
        "Explanation": "The F1 generation refers to the first-generation offspring resulting from the parental (P) cross."
    },
    {
        "Q.No": "54",
        "Question": "In a dihybrid cross, how many different genotypes are possible in the F2 generation?",
        "Option A": "1",
        "Option B": "4",
        "Option C": "16",
        "Option D": "9",
        "Correct Option": "C",
        "Explanation": "In a dihybrid cross, the F2 generation typically produces 16 different genotype combinations."
    },
    {
        "Q.No": "55",
        "Question": "What type of dominance occurs when the heterozygote expresses a phenotype that is a blend of the two homozygotes?",
        "Option A": "Complete dominance",
        "Option B": "Incomplete dominance",
        "Option C": "Codominance",
        "Option D": "Polygenic inheritance",
        "Correct Option": "B",
        "Explanation": "Incomplete dominance occurs when the heterozygote shows a blending of the two homozygous phenotypes."
    },
    {
        "Q.No": "56",
        "Question": "What is the term for the exchange of sections of chromosomes during meiosis?",
        "Option A": "Transcription",
        "Option B": "Translation",
        "Option C": "Crossing over",
        "Option D": "Replication",
        "Correct Option": "C",
        "Explanation": "Crossing over is the process where homologous chromosomes exchange segments of DNA during meiosis."
    },
    {
        "Q.No": "57",
        "Question": "What is the term for the phenomenon where both alleles contribute equally to the phenotype?",
        "Option A": "Incomplete dominance",
        "Option B": "Codominance",
        "Option C": "Complete dominance",
        "Option D": "Epistasis",
        "Correct Option": "B",
        "Explanation": "Codominance occurs when both alleles contribute equally to the phenotype, as seen in blood type inheritance."
    },
    {
        "Q.No": "58",
        "Question": "Which of the following is the correct definition of polygenic inheritance?",
        "Option A": "Inheritance controlled by multiple genes",
        "Option B": "Inheritance of traits from one gene",
        "Option C": "A trait that can be controlled by multiple alleles",
        "Option D": "A mutation affecting multiple genes",
        "Correct Option": "A",
        "Explanation": "Polygenic inheritance involves traits controlled by the interaction of multiple genes."
    },
    {
        "Q.No": "59",
        "Question": "What is the function of the gene p53 in cell division?",
        "Option A": "It helps in DNA replication",
        "Option B": "It helps in the repair of damaged DNA",
        "Option C": "It promotes uncontrolled cell division",
        "Option D": "It is involved in crossing over",
        "Correct Option": "B",
        "Explanation": "The p53 gene plays a role in repairing DNA and can prevent the progression of damaged cells in the cell cycle."
    },
    {
        "Q.No": "60",
        "Question": "In a cross between a homozygous dominant individual (AA) and a homozygous recessive individual (aa), what will be the genotypic ratio of the offspring?",
        "Option A": "1:01",
        "Option B": "100% Aa",
        "Option C": "3:01",
        "Option D": "50% Aa, 50% AA",
        "Correct Option": "B",
        "Explanation": "All offspring will inherit the dominant allele from the homozygous dominant parent and the recessive allele from the homozygous recessive parent, resulting in a 100% Aa genotype."
    },
    {
        "Q.No": "61",
        "Question": "What is the primary function of ribosomes in the process of protein synthesis?",
        "Option A": "To store genetic information",
        "Option B": "To synthesize mRNA",
        "Option C": "To synthesize proteins",
        "Option D": "To replicate DNA",
        "Correct Option": "C",
        "Explanation": "Ribosomes are responsible for protein synthesis, translating mRNA into a polypeptide chain."
    },
    {
        "Q.No": "62",
        "Question": "Which of the following best defines a carrier in genetic terms?",
        "Option A": "An individual with a dominant trait",
        "Option B": "An individual with a recessive trait",
        "Option C": "An individual who has one dominant and one recessive allele",
        "Option D": "An individual with a genetic mutation",
        "Correct Option": "C",
        "Explanation": "A carrier is an individual who has one dominant allele and one recessive allele for a particular trait, and does not express the recessive trait."
    },
    {
        "Q.No": "63",
        "Question": "What is the term for a change in the chromosome number in a cell?",
        "Option A": "Genetic mutation",
        "Option B": "Chromosomal aberration",
        "Option C": "Crossing over",
        "Option D": "Genetic drift",
        "Correct Option": "B",
        "Explanation": "Chromosomal aberrations refer to changes in the chromosome number or structure."
    },
    {
        "Q.No": "64",
        "Question": "What is the term for the process of fertilization in plants where the pollen grain reaches the ovule?",
        "Option A": "Pollination",
        "Option B": "Germination",
        "Option C": "Fertilization",
        "Option D": "Cross-pollination",
        "Correct Option": "A",
        "Explanation": "Pollination is the transfer of pollen to the female reproductive organs of a flower, leading to fertilization."
    },
    {
        "Q.No": "65",
        "Question": "In a Punnett square, what does each box represent?",
        "Option A": "A possible genotype combination of offspring",
        "Option B": "The phenotype of the offspring",
        "Option C": "The number of offspring",
        "Option D": "The sex of the offspring",
        "Correct Option": "A",
        "Explanation": "Each box in a Punnett square represents a possible genotype combination of offspring from the parents."
    },
    {
        "Q.No": "66",
        "Question": "Which of the following statements is true about autosomal recessive inheritance?",
        "Option A": "Two heterozygous parents will have affected offspring in all cases",
        "Option B": "Only homozygous recessive individuals are affected",
        "Option C": "All offspring will express the recessive trait",
        "Option D": "Heterozygous individuals express the trait",
        "Correct Option": "B",
        "Explanation": "Autosomal recessive inheritance requires two recessive alleles for the trait to be expressed."
    },
    {
        "Q.No": "67",
        "Question": "What is the term for the observable physical expression of an organism's genetic makeup?",
        "Option A": "Allele",
        "Option B": "Genotype",
        "Option C": "Phenotype",
        "Option D": "Chromosome",
        "Correct Option": "C",
        "Explanation": "Phenotype refers to the observable traits or characteristics of an organism, influenced by its genotype."
    },
    {
        "Q.No": "68",
        "Question": "What is a recessive allele?",
        "Option A": "An allele that is always expressed in the phenotype",
        "Option B": "An allele that is only expressed in the absence of a dominant allele",
        "Option C": "An allele that is dominant over other alleles",
        "Option D": "An allele that has no effect on the phenotype",
        "Correct Option": "B",
        "Explanation": "A recessive allele is expressed in the phenotype only when two copies are present (homozygous recessive)."
    },
    {
        "Q.No": "69",
        "Question": "What is the purpose of a test cross in genetics?",
        "Option A": "To predict offspring genotypes",
        "Option B": "To determine whether an individual is homozygous or heterozygous",
        "Option C": "To determine the genotype of an unknown parent",
        "Option D": "To study gene mutations",
        "Correct Option": "C",
        "Explanation": "A test cross is used to determine the genotype of an individual with a dominant phenotype by crossing it with a homozygous recessive individual."
    },
    {
        "Q.No": "70",
        "Question": "What is the term for a set of alleles that an organism carries for a specific trait?",
        "Option A": "Locus",
        "Option B": "Genotype",
        "Option C": "Phenotype",
        "Option D": "Gene pool",
        "Correct Option": "B",
        "Explanation": "The genotype is the set of alleles that an organism carries for a specific trait."
    },
    {
        "Q.No": "71",
        "Question": "Which of the following types of inheritance occurs when both alleles of a gene contribute equally to the phenotype?",
        "Option A": "Incomplete dominance",
        "Option B": "Codominance",
        "Option C": "Epistasis",
        "Option D": "Dominance",
        "Correct Option": "B",
        "Explanation": "Codominance occurs when both alleles contribute equally to the phenotype, such as in the case of AB blood type."
    },
    {
        "Q.No": "72",
        "Question": "What is the term for the observable traits or characteristics of an organism?",
        "Option A": "Alleles",
        "Option B": "Phenotype",
        "Option C": "Genotype",
        "Option D": "Traits",
        "Correct Option": "B",
        "Explanation": "Phenotype refers to the observable physical characteristics or traits of an organism."
    },
    {
        "Q.No": "73",
        "Question": "What type of mutation changes one nucleotide base pair and results in the coding of a different amino acid?",
        "Option A": "Silent mutation",
        "Option B": "Missense mutation",
        "Option C": "Nonsense mutation",
        "Option D": "Frameshift mutation",
        "Correct Option": "B",
        "Explanation": "A missense mutation results in a change in one amino acid in the protein sequence, often affecting protein function."
    },
    {
        "Q.No": "74",
        "Question": "What is the role of DNA polymerase during DNA replication?",
        "Option A": "To unwind the DNA strands",
        "Option B": "To join the RNA nucleotides",
        "Option C": "To add complementary nucleotides to the growing DNA strand",
        "Option D": "To replace the thymine bases",
        "Correct Option": "C",
        "Explanation": "DNA polymerase adds complementary nucleotides to the growing DNA strand during replication."
    },
    {
        "Q.No": "75",
        "Question": "In human genetics, what is the chromosome number in a gamete?",
        "Option A": "23 chromosomes",
        "Option B": "46 chromosomes",
        "Option C": "92 chromosomes",
        "Option D": "44 chromosomes",
        "Correct Option": "A",
        "Explanation": "Human gametes (sperm and egg cells) have 23 chromosomes, half the number found in somatic cells."
    },
    {
        "Q.No": "76",
        "Question": "Which of the following is an example of a polygenic trait?",
        "Option A": "Eye color",
        "Option B": "Height",
        "Option C": "Blood type",
        "Option D": "Sickle cell anemia",
        "Correct Option": "B",
        "Explanation": "Height is a polygenic trait, determined by the interaction of multiple genes."
    },
    {
        "Q.No": "77",
        "Question": "What does the principle of independent assortment state?",
        "Option A": "Alleles of different genes are inherited together",
        "Option B": "Alleles of different genes are inherited independently of one another",
        "Option C": "Traits are inherited based on the dominant allele",
        "Option D": "Alleles segregate equally during meiosis",
        "Correct Option": "B",
        "Explanation": "Independent assortment states that alleles for different traits are inherited independently from each other."
    },
    {
        "Q.No": "78",
        "Question": "What does a monohybrid cross examine?",
        "Option A": "The inheritance of one trait",
        "Option B": "The inheritance of two traits",
        "Option C": "The inheritance of genetic mutations",
        "Option D": "The inheritance of sex chromosomes",
        "Correct Option": "A",
        "Explanation": "A monohybrid cross examines the inheritance of a single trait, typically involving two alleles."
    },
    {
        "Q.No": "79",
        "Question": "What is the role of RNA in protein synthesis?",
        "Option A": "To carry genetic information from DNA to the cytoplasm",
        "Option B": "To form the ribosome",
        "Option C": "To produce ATP",
        "Option D": "To replicate DNA",
        "Correct Option": "A",
        "Explanation": "RNA (specifically mRNA) carries genetic information from the DNA in the nucleus to the ribosome for protein synthesis."
    },
    {
        "Q.No": "80",
        "Question": "What does the law of independent assortment state?",
        "Option A": "Genes for different traits are inherited together",
        "Option B": "Genes for different traits assort independently during gamete formation",
        "Option C": "Genes do not assort independently",
        "Option D": "Genes can be mutated during inheritance",
        "Correct Option": "B",
        "Explanation": "The law of independent assortment states that genes for different traits assort independently during gamete formation."
    },
    {
        "Q.No": "81",
        "Question": "What type of inheritance involves the interaction of two or more alleles to create a third phenotype?",
        "Option A": "Codominance",
        "Option B": "Incomplete dominance",
        "Option C": "Epistasis",
        "Option D": "Multiple alleles",
        "Correct Option": "B",
        "Explanation": "Incomplete dominance occurs when the heterozygous phenotype is a blend of the two parental phenotypes."
    },
    {
        "Q.No": "82",
        "Question": "Which of the following describes a gene that is located on the X chromosome and causes a genetic disorder in males?",
        "Option A": "X-linked dominant",
        "Option B": "X-linked recessive",
        "Option C": "Autosomal dominant",
        "Option D": "Autosomal recessive",
        "Correct Option": "B",
        "Explanation": "X-linked recessive genes are often expressed in males because they have only one X chromosome."
    },
    {
        "Q.No": "83",
        "Question": "Which type of genetic variation is responsible for the different colors in a species of flowers?",
        "Option A": "Genetic drift",
        "Option B": "Gene flow",
        "Option C": "Mutation",
        "Option D": "Gene recombination",
        "Correct Option": "C",
        "Explanation": "Mutation causes genetic variation, which can lead to different phenotypic traits such as flower color."
    },
    {
        "Q.No": "84",
        "Question": "What is the term for a genetic disorder that is caused by the presence of three copies of chromosome 21?",
        "Option A": "Down syndrome",
        "Option B": "Turner's syndrome",
        "Option C": "Klinefelter's syndrome",
        "Option D": "Huntington's disease",
        "Correct Option": "A",
        "Explanation": "Down syndrome is caused by a trisomy of chromosome 21."
    },
    {
        "Q.No": "85",
        "Question": "Which of the following is an example of a genetic disorder caused by a dominant allele?",
        "Option A": "Cystic fibrosis",
        "Option B": "Sickle cell anemia",
        "Option C": "Huntington's disease",
        "Option D": "Hemophilia",
        "Correct Option": "C",
        "Explanation": "Huntington's disease is a genetic disorder caused by a dominant allele."
    },
    {
        "Q.No": "86",
        "Question": "What is the role of meiosis in sexual reproduction?",
        "Option A": "It creates genetically identical offspring",
        "Option B": "It creates genetically diverse offspring",
        "Option C": "It replicates the DNA in somatic cells",
        "Option D": "It synthesizes proteins",
        "Correct Option": "B",
        "Explanation": "Meiosis produces genetically diverse offspring by reducing chromosome number and introducing genetic variation."
    },
    {
        "Q.No": "87",
        "Question": "What is the principle of segregation in genetics?",
        "Option A": "Alleles for a trait segregate during meiosis",
        "Option B": "Different traits are inherited together",
        "Option C": "Genes mutate during inheritance",
        "Option D": "Chromosomes do not assort independently",
        "Correct Option": "A",
        "Explanation": "The principle of segregation states that alleles for a trait segregate during gamete formation, resulting in offspring with different combinations of alleles."
    },
    {
        "Q.No": "88",
        "Question": "Which of the following best describes codominance?",
        "Option A": "One allele is completely dominant over the other",
        "Option B": "Both alleles contribute equally to the phenotype",
        "Option C": "The heterozygote phenotype is a blend of both alleles",
        "Option D": "Neither allele is expressed in the phenotype",
        "Correct Option": "B",
        "Explanation": "Codominance occurs when both alleles contribute equally to the phenotype."
    },
    {
        "Q.No": "89",
        "Question": "What is the primary function of mRNA in transcription?",
        "Option A": "To carry genetic information from DNA to the ribosome",
        "Option B": "To synthesize proteins",
        "Option C": "To replicate DNA",
        "Option D": "To transport amino acids",
        "Correct Option": "A",
        "Explanation": "mRNA carries the genetic instructions from DNA in the nucleus to the ribosome for protein synthesis."
    },
    {
        "Q.No": "90",
        "Question": "In a dihybrid cross, what is the phenotypic ratio of the F2 generation?",
        "Option A": "1:01",
        "Option B": "9:3:3:1",
        "Option C": "3:01",
        "Option D": "16:16",
        "Correct Option": "B",
        "Explanation": "The phenotypic ratio for a dihybrid cross is typically 9:3:3:1."
    },
    {
        "Q.No": "91",
        "Question": "What does a homozygous recessive genotype mean?",
        "Option A": "The individual has two dominant alleles",
        "Option B": "The individual has two recessive alleles",
        "Option C": "The individual has one dominant and one recessive allele",
        "Option D": "The individual carries a recessive allele but does not express the trait",
        "Correct Option": "B",
        "Explanation": "A homozygous recessive genotype means the individual has two recessive alleles for a trait."
    },
    {
        "Q.No": "92",
        "Question": "What is the definition of a gene pool in a population?",
        "Option A": "The sum of all alleles in all individuals",
        "Option B": "The number of chromosomes in an individual",
        "Option C": "The number of mutations present in the population",
        "Option D": "The set of traits expressed in the population",
        "Correct Option": "A",
        "Explanation": "The gene pool refers to the total collection of alleles in a population."
    },
    {
        "Q.No": "93",
        "Question": "What does the process of meiosis result in?",
        "Option A": "Two identical daughter cells",
        "Option B": "Four genetically diverse daughter cells",
        "Option C": "Two genetically diverse daughter cells",
        "Option D": "One cell with double the chromosome number",
        "Correct Option": "B",
        "Explanation": "Meiosis results in four genetically diverse daughter cells, each with half the chromosome number of the parent cell."
    },
    {
        "Q.No": "94",
        "Question": "What is the inheritance pattern of hemophilia?",
        "Option A": "Autosomal dominant",
        "Option B": "Autosomal recessive",
        "Option C": "X-linked recessive",
        "Option D": "X-linked dominant",
        "Correct Option": "C",
        "Explanation": "Hemophilia is an X-linked recessive disorder, which is more common in males."
    },
    {
        "Q.No": "95",
        "Question": "What is the main cause of genetic diversity within a population?",
        "Option A": "Mutation",
        "Option B": "Gene flow",
        "Option C": "Genetic drift",
        "Option D": "Natural selection",
        "Correct Option": "A",
        "Explanation": "Mutation is the primary source of genetic diversity, creating new alleles."
    },
    {
        "Q.No": "96",
        "Question": "What is a genotype?",
        "Option A": "The physical appearance of an organism",
        "Option B": "The genetic makeup of an organism",
        "Option C": "The interaction between the environment and genes",
        "Option D": "The environmental influences on a phenotype",
        "Correct Option": "B",
        "Explanation": "A genotype refers to the genetic makeup of an organism for a specific trait."
    },
    {
        "Q.No": "97",
        "Question": "What is the process by which genetic material from two parents combines to form offspring?",
        "Option A": "Asexual reproduction",
        "Option B": "Meiosis",
        "Option C": "Fertilization",
        "Option D": "Mitosis",
        "Correct Option": "C",
        "Explanation": "Fertilization is the process by which genetic material from two parents combines to form offspring."
    },
    {
        "Q.No": "98",
        "Question": "Which of the following is an example of genetic drift?",
        "Option A": "A mutation causing a new trait",
        "Option B": "A random reduction in population size leading to allele frequency changes",
        "Option C": "Natural selection favoring certain traits",
        "Option D": "A gene flow between two populations",
        "Correct Option": "B",
        "Explanation": "Genetic drift is the random change in allele frequencies due to a reduction in population size."
    },
    {
        "Q.No": "99",
        "Question": "What is the purpose of a pedigree chart?",
        "Option A": "To trace genetic disorders across generations",
        "Option B": "To analyze the chromosomal structure of individuals",
        "Option C": "To determine the number of alleles in a population",
        "Option D": "To track the phenotypic traits in a population",
        "Correct Option": "A",
        "Explanation": "A pedigree chart is used to trace genetic disorders or traits across generations of a family."
    },
    {
        "Q.No": "100",
        "Question": "What is an allele?",
        "Option A": "A type of chromosome",
        "Option B": "A variant form of a gene",
        "Option C": "A type of gene mutation",
        "Option D": "A part of a gene pool",
        "Correct Option": "B",
        "Explanation": "An allele is a variant form of a gene that determines a specific trait."
    }
      ]
    }

  };

  // ---------------------------------------------------------
  // State
  // ---------------------------------------------------------
  let currentSubject = null;
  let currentColor = null;
  let currentQuestions = [];
  let userAnswers = [];
  let answeredQuestions = [];
  let timerInterval = null;
  let timeLeft = 0;
  let totalTime = 0;

  const subjectScreen = document.getElementById('subjectScreen');
  const quizScreen = document.getElementById('quizScreen');
  const resultScreen = document.getElementById('resultScreen');
  const subjectGrid = document.getElementById('subjectGrid');
  const questionsContainer = document.getElementById('questionsContainer');

// SVG icons
const checkSvg =
'<svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">' +
'<path d="M4 12L9 17L20 6" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>' +
'</svg>';

const crossSvg =
'<svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">' +
'<path d="M18 6L6 18M6 6L18 18" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>' +
'</svg>';

const chevronUpSvg =
'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"/></svg>';

const chevronDownSvg =
'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>';

  // ---------------------------------------------------------
  // Helpers
  // ---------------------------------------------------------
  function hexToRgba(hex, alpha){
    const r = parseInt(hex.slice(1,3),16);
    const g = parseInt(hex.slice(3,5),16);
    const b = parseInt(hex.slice(5,7),16);
    return 'rgba(' + r + ',' + g + ',' + b + ',' + alpha + ')';
  }

  function formatTime(seconds){
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return (m < 10 ? '0' + m : m) + ':' + (s < 10 ? '0' + s : s);
  }

  // ---------------------------------------------------------
  // Render subject cards
  // ---------------------------------------------------------
  function renderSubjects(){
    subjectGrid.innerHTML = '';
    Object.keys(subjectsData).forEach(function(name){
      const subj = subjectsData[name];
      const color = subj.color;
      const count = subj.questions.length;

      const card = document.createElement('div');
      card.style.cssText =
        "position:relative;display:flex;flex-direction:column;justify-content:space-between;" +
        "border-radius:14px;padding:20px;min-height:150px;overflow:hidden;" +
        "background:linear-gradient(135deg, " + hexToRgba(color, 0.18) + ", " + hexToRgba(color, 0.04) + ");" +
        "border:1px solid " + hexToRgba(color, 0.35) + ";" +
        "transition:var(--trans-2);box-sizing:border-box;";

      card.onmouseover = function(){
        card.style.transform = 'translateY(-3px)';
        card.style.boxShadow = '0 10px 20px -8px ' + hexToRgba(color, 0.45);
      };
      card.onmouseout = function(){
        card.style.transform = 'translateY(0)';
        card.style.boxShadow = 'none';
      };

      card.innerHTML =
        '<div>' +
          '<div style="display:flex;align-items:center;justify-content:space-between;margin:0 0 10px 0;">' +
            '<span style="font-size:30px;line-height:1;">' + subj.icon + '</span>' +
            '<span style="font-size:11px;font-weight:700;padding:4px 10px;border-radius:20px;background:' + color + ';color:#fff;white-space:nowrap;">' + count + ' MCQs</span>' +
          '</div>' +
          '<div style="font-size:17px;font-weight:700;margin:0 0 4px 0;">' + name + '</div>' +
          '<div style="font-size:12px;opacity:.7;">Test your knowledge in ' + name + '</div>' +
        '</div>' +
        '<button class="startBtn" style="margin-top:16px;width:100%;border:0;outline:0;cursor:pointer;padding:11px 14px;border-radius:var(--linkR);font-size:14px;font-weight:600;font-family:var(--fontB);color:#fff;background:' + color + ';transition:var(--trans-2);">Start Test</button>';

      const startBtn = card.querySelector('.startBtn');
      startBtn.onmouseover = function(){ startBtn.style.opacity = '.88'; };
      startBtn.onmouseout = function(){ startBtn.style.opacity = '1'; };
      startBtn.addEventListener('click', function(e){
        e.stopPropagation();
        startQuiz(name);
      });

      card.addEventListener('click', function(){ startQuiz(name); });
      subjectGrid.appendChild(card);
    });
  }

  // ---------------------------------------------------------
  // Start quiz for a subject
  // ---------------------------------------------------------
  function startQuiz(subjectName){
    currentSubject = subjectName;
    currentColor = subjectsData[subjectName].color;
    currentQuestions = subjectsData[subjectName].questions;
    userAnswers = new Array(currentQuestions.length).fill(null);
    answeredQuestions = new Array(currentQuestions.length).fill(false);

    document.getElementById('quizSubjectTitle').textContent = subjectName;
    document.getElementById('progressBar').style.background = currentColor;
    document.getElementById('submitBtn').style.background = currentColor;

    subjectScreen.style.display = 'none';
    resultScreen.style.display = 'none';
    quizScreen.style.display = 'block';

    // Initialize timer: 45 seconds per question
    totalTime = currentQuestions.length * 45;
    timeLeft = totalTime;
    createStickyTimer();
    startTimer();

    renderAllQuestions();
  }

  // ---------------------------------------------------------
  // Sticky Timer
  // ---------------------------------------------------------
  function createStickyTimer(){
    let timerEl = document.getElementById('stickyTimer');
    if (!timerEl){
      timerEl = document.createElement('div');
      timerEl.id = 'stickyTimer';
      timerEl.style.cssText =
        'position:sticky;top:0;z-index:100;background:var(--contentB);' +
        'border-bottom:1px solid var(--contentL);padding:10px 14px;margin:0 0 16px 0;' +
        'display:flex;align-items:center;justify-content:space-between;gap:12px;';
      timerEl.innerHTML =
        '<div style="display:flex;align-items:center;gap:8px;font-size:15px;font-weight:600;font-family:var(--fontB);">' +
          '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>' +
          '<span id="timerDisplay">00:00</span>' +
        '</div>' +
        '<div style="flex:1;height:8px;background:var(--contentBs);border-radius:10px;overflow:hidden;">' +
          '<div id="timerProgress" style="height:100%;width:100%;background:' + currentColor + ';border-radius:10px;transition:width 1s linear;"></div>' +
        '</div>';
      quizScreen.insertBefore(timerEl, quizScreen.children[1]);
    } else {
      timerEl.style.display = 'flex';
      timerEl.querySelector('#timerProgress').style.background = currentColor;
    }
    document.getElementById('timerDisplay').textContent = formatTime(timeLeft);
    document.getElementById('timerProgress').style.width = '100%';
  }

  function startTimer(){
    if (timerInterval) clearInterval(timerInterval);
    timerInterval = setInterval(function(){
      timeLeft--;
      document.getElementById('timerDisplay').textContent = formatTime(timeLeft);
      const pct = (timeLeft / totalTime) * 100;
      document.getElementById('timerProgress').style.width = pct + '%';

      if (timeLeft <= 0){
        clearInterval(timerInterval);
        showResults();
      }
    }, 1000);
  }

  function stopTimer(){
    if (timerInterval){
      clearInterval(timerInterval);
      timerInterval = null;
    }
  }

  // ---------------------------------------------------------
  // Render all questions at once
  // ---------------------------------------------------------
  function renderAllQuestions(){
    questionsContainer.innerHTML = '';
    const optionKeys = ['Option A', 'Option B', 'Option C', 'Option D'];
    const letters = ['A','B','C','D'];

    currentQuestions.forEach(function(q, qIdx){
      const qCard = document.createElement('div');
      qCard.style.cssText = "background:var(--contentB);border:1px solid var(--contentL);border-radius:12px;padding:10px;width:100%;box-sizing:border-box;";

      let html = '<div style="font-size:16px;line-height:1.6em;font-weight:600;margin:0 0 14px 0;">' + (qIdx + 1) + '. ' + q['Question'] + '</div>';
      html += '<div style="display:flex;flex-direction:column;gap:10px;width:100%;" id="options-' + qIdx + '">';

      optionKeys.forEach(function(key, idx){
        const letter = letters[idx];
        html += '<div class="opt-' + qIdx + '-' + letter + '" data-letter="' + letter + '" data-qidx="' + qIdx + '" style="display:flex;align-items:center;gap:10px;padding:12px 14px;border:1px solid var(--contentL);border-radius:var(--linkR);cursor:pointer;transition:var(--trans-2);background:var(--contentBs);">' +
          '<span class="badge-' + qIdx + '-' + letter + '" style="flex-shrink:0;display:flex;align-items:center;justify-content:center;width:26px;height:26px;border-radius:50%;border:1px solid var(--contentL);font-size:12px;font-weight:600;">' + letter + '</span>' +
          '<span style="font-size:14px;line-height:1.5em;">' + q[key] + '</span>' +
        '</div>';
      });

      html += '</div>';

      // Explanation toggle with chevron icons
      html += '<div style="margin:12px 0 0 0;">' +
        '<button class="expToggle-' + qIdx + '" style="cursor:pointer;font-size:13px;padding:8px 14px;margin:0;display:inline-flex;align-items:center;gap:8px;border:1px solid var(--contentL);border-radius:var(--linkR);background:var(--contentBs);font-family:var(--fontB);color:var(--bodyC);">' +
          '<span class="expIcon-' + qIdx + '">' + chevronDownSvg + '</span>' +
          '<span class="expText-' + qIdx + '">Show Explanation</span>' +
        '</button>' +
        '<div class="expBox-' + qIdx + '" style="display:none;margin-top:10px;font-size:13px;line-height:1.6em;padding:12px 14px;background:var(--contentBs);border-radius:var(--linkR);border:1px solid var(--contentL);">' + q['Explanation'] + '</div>' +
      '</div>';

      qCard.innerHTML = html;
      questionsContainer.appendChild(qCard);

      // Add click handlers for options
      optionKeys.forEach(function(key, idx){
        const letter = letters[idx];
        const optEl = qCard.querySelector('.opt-' + qIdx + '-' + letter);
        optEl.addEventListener('click', function(){
          if (answeredQuestions[qIdx]) return; // Already answered
          handleOptionClick(qIdx, letter);
        });
      });

      // Add explanation toggle handler
      const expToggle = qCard.querySelector('.expToggle-' + qIdx);
      const expBox = qCard.querySelector('.expBox-' + qIdx);
      const expIcon = qCard.querySelector('.expIcon-' + qIdx);
      const expText = qCard.querySelector('.expText-' + qIdx);
      expToggle.addEventListener('click', function(){
        const isHidden = expBox.style.display === 'none';
        expBox.style.display = isHidden ? 'block' : 'none';
        expIcon.innerHTML = isHidden ? chevronUpSvg : chevronDownSvg;
        expText.textContent = isHidden ? 'Hide Explanation' : 'Show Explanation';
      });
    });

    // Update progress bar
    updateProgress();
  }

  // ---------------------------------------------------------
  // Handle option click with visual feedback
  // ---------------------------------------------------------
  function handleOptionClick(qIdx, selectedLetter){
    answeredQuestions[qIdx] = true;
    userAnswers[qIdx] = selectedLetter;
    const correctLetter = currentQuestions[qIdx]['Correct Option'];
    const optionKeys = ['Option A', 'Option B', 'Option C', 'Option D'];
    const letters = ['A','B','C','D'];

    letters.forEach(function(letter){
      const optEl = document.querySelector('.opt-' + qIdx + '-' + letter);
      const badgeEl = document.querySelector('.badge-' + qIdx + '-' + letter);
      if (!optEl || !badgeEl) return;

      optEl.style.cursor = 'default';

      if (letter === correctLetter){
        // Correct option - green highlight + check
        optEl.style.borderColor = '#16a085';
        optEl.style.background = 'rgba(22,160,133,0.1)';
        badgeEl.style.borderColor = '#16a085';
        badgeEl.style.background = '#16a085';
        badgeEl.style.color = '#fff';
        badgeEl.innerHTML = checkSvg;
      } else if (letter === selectedLetter && letter !== correctLetter){
        // Wrong selected - red highlight + cross
        optEl.style.borderColor = '#be2e3c';
        optEl.style.background = 'rgba(190,46,60,0.1)';
        badgeEl.style.borderColor = '#be2e3c';
        badgeEl.style.background = '#be2e3c';
        badgeEl.style.color = '#fff';
        badgeEl.innerHTML = crossSvg;
      } else {
        // Other options - disabled look
        optEl.style.opacity = '0.6';
        optEl.style.cursor = 'not-allowed';
      }
    });

    updateProgress();
  }

  // ---------------------------------------------------------
  // Update progress bar
  // ---------------------------------------------------------
  function updateProgress(){
    const answered = answeredQuestions.filter(function(a){ return a; }).length;
    const pct = (answered / currentQuestions.length) * 100;
    document.getElementById('progressBar').style.width = pct + '%';
  }

  // ---------------------------------------------------------
  // Navigation handlers
  // ---------------------------------------------------------
  document.getElementById('backToSubjectsBtn').addEventListener('click', function(){
    stopTimer();
    quizScreen.style.display = 'none';
    resultScreen.style.display = 'none';
    subjectScreen.style.display = 'block';
  });

  document.getElementById('submitBtn').addEventListener('click', function(){
    stopTimer();
    showResults();
    setTimeout(function(){
      document.getElementById('resultScreen').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);
  });

  // ---------------------------------------------------------
  // Results
  // ---------------------------------------------------------
  function showResults(){
    stopTimer();

    let correct = 0, wrong = 0;

    currentQuestions.forEach(function(q, i){
      if (userAnswers[i] === q['Correct Option']) correct++;
      else wrong++;
    });

    const total = currentQuestions.length;
    const pct = Math.round((correct / total) * 100);

    document.getElementById('resultSubject').textContent = currentSubject;
    document.getElementById('resultTime').textContent = '';
    document.getElementById('scoreCorrect').textContent = correct;
    document.getElementById('scoreWrong').textContent = wrong;
    document.getElementById('scorePercent').textContent = pct + '%';
    document.getElementById('scorePercent').style.color = pct >= 50 ? '#127a5b' : '#be2e3c';

    const reviewList = document.getElementById('reviewList');
    reviewList.innerHTML = '';

    const optionKeys = { A:'Option A', B:'Option B', C:'Option C', D:'Option D' };

    currentQuestions.forEach(function(q, i){
      const userAns = userAnswers[i];
      const correctAns = q['Correct Option'];
      const isCorrect = userAns === correctAns;

      const item = document.createElement('div');
      item.className = 'alert ' + (isCorrect ? 'success' : 'error');

      let html = '<strong>Q' + (i+1) + '. ' + q['Question'] + '</strong>';
      html += '<div style="margin-bottom:4px;">Your answer: ' + (userAns ? (userAns + '. ' + q[optionKeys[userAns]]) : 'Not answered') + '</div>';
      if (!isCorrect){
        html += '<div style="margin-bottom:4px;">Correct answer: ' + correctAns + '. ' + q[optionKeys[correctAns]] + '</div>';
      }
      html += '<div style="opacity:.85;font-size:13px;">' + q['Explanation'] + '</div>';

      item.innerHTML = html;
      reviewList.appendChild(item);
    });

    document.getElementById('progressBar').style.width = '100%';
    quizScreen.style.display = 'none';
    resultScreen.style.display = 'block';
  }

  document.getElementById('retryBtn').addEventListener('click', function(){
    startQuiz(currentSubject);
    setTimeout(function(){
      document.getElementById('quizScreen').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);
  });

  document.getElementById('homeBtn').addEventListener('click', function(){
    resultScreen.style.display = 'none';
    subjectScreen.style.display = 'block';
  });

  // ---------------------------------------------------------
  // Init
  // ---------------------------------------------------------
  renderSubjects();

})();