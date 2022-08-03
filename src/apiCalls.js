const apiKey = process.env.REACT_APP_API_KEY

const getArticles = (section) => {
	return fetch(`https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${apiKey}`)
    .then((res) => {
		if (res.ok) {
			return res.json();
		} else {
			throw new Error();
		}
    })
    .catch(err => alert(err));
}

const testCall = {
	"status": "OK",
	"copyright": "Copyright (c) 2022 The New York Times Company. All Rights Reserved.",
	"section": "Technology",
	"last_updated": "2022-07-29T10:46:53-04:00",
	"num_results": 29,
	"results": [
	  {
		"section": "business",
		"subsection": "",
		"title": "Stalkers, Fan Threats, Police Raids: The Hidden Price of Twitch Fame",
		"abstract": "Stars on the video game streaming platform invite viewers into their homes virtually. What happens when one shows up in person?",
		"url": "https://www.nytimes.com/2022/07/29/business/twitch-stalking.html",
		"uri": "nyt://article/df4996e1-d630-5953-9aae-5f44f1fc3bc3",
		"byline": "By Kellen Browning and Kashmir Hill",
		"item_type": "Article",
		"updated_date": "2022-07-29T10:51:20-04:00",
		"created_date": "2022-07-29T05:00:24-04:00",
		"published_date": "2022-07-29T05:00:24-04:00",
		"material_type_facet": "",
		"kicker": "",
		"des_facet": [
		  "Computers and the Internet",
		  "Computer and Video Games",
		  "Security and Warning Systems",
		  "Threats and Threatening Messages",
		  "Celebrities",
		  "Video Recordings, Downloads and Streaming",
		  "Swatting (Crime)"
		],
		"org_facet": [
		  "Amazon.com Inc",
		  "Twitch Interactive Inc"
		],
		"per_facet": [
		  
		],
		"geo_facet": [
		  
		],
		"multimedia": [
		  {
			"url": "https://static01.nyt.com/images/2022/07/26/business/00Twitch-Siragusa-02sub/merlin_209340744_368ed439-3dd1-4ba9-9c6f-dc92de87267d-superJumbo.jpg",
			"format": "Super Jumbo",
			"height": 1365,
			"width": 2048,
			"type": "image",
			"subtype": "photo",
			"caption": "Ms. Siragusa doesn’t know what more she can do to protect herself, she said, “besides build a moat with crocodiles.”",
			"copyright": "Go Nakamura for The New York Times"
		  },
		  {
			"url": "https://static01.nyt.com/images/2022/07/26/business/00Twitch-Siragusa-02sub/merlin_209340744_368ed439-3dd1-4ba9-9c6f-dc92de87267d-threeByTwoSmallAt2X.jpg",
			"format": "threeByTwoSmallAt2X",
			"height": 400,
			"width": 600,
			"type": "image",
			"subtype": "photo",
			"caption": "Ms. Siragusa doesn’t know what more she can do to protect herself, she said, “besides build a moat with crocodiles.”",
			"copyright": "Go Nakamura for The New York Times"
		  },
		  {
			"url": "https://static01.nyt.com/images/2022/07/26/business/00Twitch-Siragusa-02sub/00Twitch-Siragusa-02sub-thumbLarge.jpg",
			"format": "Large Thumbnail",
			"height": 150,
			"width": 150,
			"type": "image",
			"subtype": "photo",
			"caption": "Ms. Siragusa doesn’t know what more she can do to protect herself, she said, “besides build a moat with crocodiles.”",
			"copyright": "Go Nakamura for The New York Times"
		  }
		],
		"short_url": "https://nyti.ms/3S7Tvud"
	  },
	  {
		"section": "us",
		"subsection": "politics",
		"title": "China Has Leapfrogged the U.S. in Key Technologies. Can a New Law Help?",
		"abstract": "While Congress argued over whether and how to support American chip makers and research in other technologies, China was surging ahead.",
		"url": "https://www.nytimes.com/2022/07/28/us/politics/us-china-semiconductors.html",
		"uri": "nyt://article/cde1b489-c1dd-5edb-8a31-17b98ace7587",
		"byline": "By David E. Sanger",
		"item_type": "Article",
		"updated_date": "2022-07-29T10:50:24-04:00",
		"created_date": "2022-07-28T20:26:29-04:00",
		"published_date": "2022-07-28T20:26:29-04:00",
		"material_type_facet": "",
		"kicker": "News Analysis",
		"des_facet": [
		  "United States International Relations",
		  "United States Politics and Government",
		  "Factories and Manufacturing",
		  "International Trade and World Market",
		  "Computer Chips"
		],
		"org_facet": [
		  "House of Representatives",
		  "Senate"
		],
		"per_facet": [
		  
		],
		"geo_facet": [
		  "China"
		],
		"multimedia": [
		  {
			"url": "https://static01.nyt.com/images/2022/07/28/us/politics/28dc-china-compete/merlin_206798100_10b62638-ac18-491a-992e-6871e54e964f-superJumbo.jpg",
			"format": "Super Jumbo",
			"height": 1365,
			"width": 2048,
			"type": "image",
			"subtype": "photo",
			"caption": "The Semiconductor Manufacturing International Corporation booth at the China International Semiconductor Expo in Shanghai in 2020.",
			"copyright": "Aly Song/Reuters"
		  },
		  {
			"url": "https://static01.nyt.com/images/2022/07/28/us/politics/28dc-china-compete/merlin_206798100_10b62638-ac18-491a-992e-6871e54e964f-threeByTwoSmallAt2X.jpg",
			"format": "threeByTwoSmallAt2X",
			"height": 400,
			"width": 600,
			"type": "image",
			"subtype": "photo",
			"caption": "The Semiconductor Manufacturing International Corporation booth at the China International Semiconductor Expo in Shanghai in 2020.",
			"copyright": "Aly Song/Reuters"
		  },
		  {
			"url": "https://static01.nyt.com/images/2022/07/28/us/politics/28dc-china-compete/merlin_206798100_10b62638-ac18-491a-992e-6871e54e964f-thumbLarge.jpg",
			"format": "Large Thumbnail",
			"height": 150,
			"width": 150,
			"type": "image",
			"subtype": "photo",
			"caption": "The Semiconductor Manufacturing International Corporation booth at the China International Semiconductor Expo in Shanghai in 2020.",
			"copyright": "Aly Song/Reuters"
		  }
		],
		"short_url": "https://nyti.ms/3Bnj2tB"
	  },
	  {
		"section": "business",
		"subsection": "",
		"title": "Big Tech Is Proving Resilient as the Economy Cools",
		"abstract": "Tech companies are slowing their frenetic hiring, but a combination of dominance and diversity is turning out to be — yet again — an overwhelming asset.",
		"url": "https://www.nytimes.com/2022/07/28/business/big-tech-resilient-economy.html",
		"uri": "nyt://article/93f16cdd-00d0-50da-b237-c98019bc3c00",
		"byline": "By Tripp Mickle",
		"item_type": "Article",
		"updated_date": "2022-07-29T05:40:51-04:00",
		"created_date": "2022-07-28T18:46:11-04:00",
		"published_date": "2022-07-28T18:46:11-04:00",
		"material_type_facet": "",
		"kicker": "",
		"des_facet": [
		  "Computers and the Internet",
		  "E-Commerce",
		  "Company Reports"
		],
		"org_facet": [
		  "Alphabet Inc",
		  "Amazon.com Inc",
		  "Apple Inc",
		  "Facebook Inc",
		  "Google Inc",
		  "Meta Platforms Inc",
		  "Microsoft Corp"
		],
		"per_facet": [
		  "Nadella, Satya",
		  "Pichai, Sundar"
		],
		"geo_facet": [
		  
		],
		"multimedia": [
		  {
			"url": "https://static01.nyt.com/images/2022/07/29/business/28tech-earnings1/merlin_185750028_7ac492ca-b307-44ce-a478-b03fea32afb9-superJumbo.jpg",
			"format": "Super Jumbo",
			"height": 1436,
			"width": 2048,
			"type": "image",
			"subtype": "photo",
			"caption": "Amazon’s growth slowed as retail spending cooled, but the company continues to benefit from its strong cloud computing business.",
			"copyright": "Chang W. Lee/The New York Times"
		  },
		  {
			"url": "https://static01.nyt.com/images/2022/07/29/business/28tech-earnings1/28tech-earnings1-threeByTwoSmallAt2X.jpg",
			"format": "threeByTwoSmallAt2X",
			"height": 400,
			"width": 600,
			"type": "image",
			"subtype": "photo",
			"caption": "Amazon’s growth slowed as retail spending cooled, but the company continues to benefit from its strong cloud computing business.",
			"copyright": "Chang W. Lee/The New York Times"
		  },
		  {
			"url": "https://static01.nyt.com/images/2022/07/29/business/28tech-earnings1/28tech-earnings1-thumbLarge.jpg",
			"format": "Large Thumbnail",
			"height": 150,
			"width": 150,
			"type": "image",
			"subtype": "photo",
			"caption": "Amazon’s growth slowed as retail spending cooled, but the company continues to benefit from its strong cloud computing business.",
			"copyright": "Chang W. Lee/The New York Times"
		  }
		],
		"short_url": "https://nyti.ms/3zGTqqr"
	  },
	  {
		"section": "technology",
		"subsection": "",
		"title": "F.T.C. Chair Upends Antitrust Standards With Meta Lawsuit",
		"abstract": "Lina Khan may set off a shift in how Washington regulates competition by filing cases in tech areas before they mature. She faces an uphill climb.",
		"url": "https://www.nytimes.com/2022/07/28/technology/ftc-lina-khan-meta.html",
		"uri": "nyt://article/eb1c3e8c-38c1-5e35-b0bc-5bb816315948",
		"byline": "By Cecilia Kang",
		"item_type": "Article",
		"updated_date": "2022-07-28T22:46:08-04:00",
		"created_date": "2022-07-28T16:45:57-04:00",
		"published_date": "2022-07-28T16:45:57-04:00",
		"material_type_facet": "",
		"kicker": "",
		"des_facet": [
		  "Computers and the Internet",
		  "Antitrust Laws and Competition Issues",
		  "Virtual Reality (Computers)",
		  "Corporations",
		  "Mobile Applications",
		  "Regulation and Deregulation of Industry",
		  "Start-ups",
		  "Mergers, Acquisitions and Divestitures",
		  "Entrepreneurship",
		  "Metaverse (Internet)",
		  "Computer and Video Games"
		],
		"org_facet": [
		  "Meta Platforms Inc",
		  "Supernatural (Mobile App)",
		  "Federal Trade Commission",
		  "Facebook Inc"
		],
		"per_facet": [
		  "Khan, Lina"
		],
		"geo_facet": [
		  
		],
		"multimedia": [
		  {
			"url": "https://static01.nyt.com/images/2022/07/29/business/28ftc-legal1/28ftc-legal1-superJumbo.jpg",
			"format": "Super Jumbo",
			"height": 1366,
			"width": 2048,
			"type": "image",
			"subtype": "photo",
			"caption": "Lina Khan, who has led the Federal Trade Commission since June 2021, has said she will focus regulation on “next-generation technologies.”",
			"copyright": "Tom Williams/CQ-Roll Call, Inc via Getty Images"
		  },
		  {
			"url": "https://static01.nyt.com/images/2022/07/29/business/28ftc-legal1/28ftc-legal1-threeByTwoSmallAt2X.jpg",
			"format": "threeByTwoSmallAt2X",
			"height": 400,
			"width": 600,
			"type": "image",
			"subtype": "photo",
			"caption": "Lina Khan, who has led the Federal Trade Commission since June 2021, has said she will focus regulation on “next-generation technologies.”",
			"copyright": "Tom Williams/CQ-Roll Call, Inc via Getty Images"
		  },
		  {
			"url": "https://static01.nyt.com/images/2022/07/29/business/28ftc-legal1/28ftc-legal1-thumbLarge.jpg",
			"format": "Large Thumbnail",
			"height": 150,
			"width": 150,
			"type": "image",
			"subtype": "photo",
			"caption": "Lina Khan, who has led the Federal Trade Commission since June 2021, has said she will focus regulation on “next-generation technologies.”",
			"copyright": "Tom Williams/CQ-Roll Call, Inc via Getty Images"
		  }
		],
		"short_url": "https://nyti.ms/3cNjRBA"
	  },
	  {
		"section": "travel",
		"subsection": "",
		"title": "National Park Booking App Leaves Users Feeling Lost in the Woods",
		"abstract": "Little availability for campsites. Confusing booking windows. Traveler and travel industry frustration is growing with Recreation.gov, the online portal to book accommodations and access on federal lands.",
		"url": "https://www.nytimes.com/2022/07/29/travel/nps-recreation-gov.html",
		"uri": "nyt://article/200fb60f-35fb-53c3-9228-20acc9c669d0",
		"byline": "By Lauren Sloss",
		"item_type": "Article",
		"updated_date": "2022-07-29T05:00:23-04:00",
		"created_date": "2022-07-29T05:00:23-04:00",
		"published_date": "2022-07-29T05:00:23-04:00",
		"material_type_facet": "",
		"kicker": "",
		"des_facet": [
		  "National Parks, Monuments and Seashores",
		  "Federal Lands",
		  "Travel and Vacations",
		  "Camps and Camping"
		],
		"org_facet": [
		  "National Park Service",
		  "Interior Department",
		  "United States Travel Assn",
		  "Bureau of Land Management",
		  "Forest Service"
		],
		"per_facet": [
		  "Haaland, Deb"
		],
		"geo_facet": [
		  
		],
		"multimedia": [
		  {
			"url": "https://static01.nyt.com/images/2022/07/28/travel/28nps-recreation-illo/28nps-recreation-illo-superJumbo.jpg",
			"format": "Super Jumbo",
			"height": 1317,
			"width": 2048,
			"type": "image",
			"subtype": "photo",
			"caption": "",
			"copyright": "Julie Benbassat"
		  },
		  {
			"url": "https://static01.nyt.com/images/2022/07/28/travel/28nps-recreation-illo/28nps-recreation-illo-threeByTwoSmallAt2X.jpg",
			"format": "threeByTwoSmallAt2X",
			"height": 400,
			"width": 600,
			"type": "image",
			"subtype": "photo",
			"caption": "",
			"copyright": "Julie Benbassat"
		  },
		  {
			"url": "https://static01.nyt.com/images/2022/07/28/travel/28nps-recreation-illo/28nps-recreation-illo-thumbLarge.jpg",
			"format": "Large Thumbnail",
			"height": 150,
			"width": 150,
			"type": "image",
			"subtype": "photo",
			"caption": "",
			"copyright": "Julie Benbassat"
		  }
		],
		"short_url": "https://nyti.ms/3vslsDl"
	  },
	  {
		"section": "technology",
		"subsection": "",
		"title": "Instagram rolls back some product changes after user backlash.",
		"abstract": "Celebrities like Kylie Jenner and Kim Kardashian were among the upset users who said the updates made the app too much like TikTok.",
		"url": "https://www.nytimes.com/2022/07/28/technology/instagram-reverses-changes.html",
		"uri": "nyt://article/efa6596f-339b-52a9-ab60-9a19930aefa1",
		"byline": "By Kalley Huang and Mike Isaac",
		"item_type": "Article",
		"updated_date": "2022-07-28T22:52:11-04:00",
		"created_date": "2022-07-28T17:03:12-04:00",
		"published_date": "2022-07-28T17:03:12-04:00",
		"material_type_facet": "",
		"kicker": "",
		"des_facet": [
		  "Mobile Applications",
		  "Social Media",
		  "Instant Messaging",
		  "Computers and the Internet",
		  "Video Recordings, Downloads and Streaming",
		  "Celebrities"
		],
		"org_facet": [
		  "Instagram Inc",
		  "Meta Platforms Inc",
		  "TikTok (ByteDance)"
		],
		"per_facet": [
		  "Jenner, Kylie",
		  "Mosseri, Adam",
		  "Zuckerberg, Mark E"
		],
		"geo_facet": [
		  
		],
		"multimedia": null,
		"short_url": "https://nyti.ms/3zckQmx"
	  },
	  {
		"section": "technology",
		"subsection": "",
		"title": "The Word of the Year Is ‘Uncertainty’",
		"abstract": "Did tech win the pandemic or not? We likely won’t be able to tell for a while.",
		"url": "https://www.nytimes.com/2022/07/28/technology/tech-uncertainty.html",
		"uri": "nyt://article/8b053cbe-4125-5f8a-bdca-6b091710b6a3",
		"byline": "By Shira Ovide",
		"item_type": "Article",
		"updated_date": "2022-07-28T22:53:25-04:00",
		"created_date": "2022-07-28T12:04:00-04:00",
		"published_date": "2022-07-28T12:04:00-04:00",
		"material_type_facet": "",
		"kicker": "On Tech Newsletter",
		"des_facet": [
		  "internal-sub-only-nl",
		  "Computers and the Internet"
		],
		"org_facet": [
		  "Google Inc",
		  "Netflix Inc",
		  "Shopify Inc",
		  "Snap Inc",
		  "Facebook Inc",
		  "Amazon.com Inc"
		],
		"per_facet": [
		  "Chen, Brian X"
		],
		"geo_facet": [
		  
		],
		"multimedia": [
		  {
			"url": "https://static01.nyt.com/images/2022/07/28/business/28OnTech-Winning-promo/28OnTech-Winning-promo-superJumbo.png",
			"format": "Super Jumbo",
			"height": 1365,
			"width": 2048,
			"type": "image",
			"subtype": "photo",
			"caption": "",
			"copyright": "Gabriel Gabriel Garble"
		  },
		  {
			"url": "https://static01.nyt.com/images/2022/07/28/business/28OnTech-Winning-promo/28OnTech-Winning-promo-threeByTwoSmallAt2X.png",
			"format": "threeByTwoSmallAt2X",
			"height": 400,
			"width": 600,
			"type": "image",
			"subtype": "photo",
			"caption": "",
			"copyright": "Gabriel Gabriel Garble"
		  },
		  {
			"url": "https://static01.nyt.com/images/2022/07/28/business/28OnTech-Winning-promo/28OnTech-Winning-promo-thumbLarge.png",
			"format": "Large Thumbnail",
			"height": 150,
			"width": 150,
			"type": "image",
			"subtype": "photo",
			"caption": "",
			"copyright": "Gabriel Gabriel Garble"
		  }
		],
		"short_url": "https://nyti.ms/3Jc80ci"
	  },
	  {
		"section": "science",
		"subsection": "",
		"title": "A.I. Predicts the Shape of Nearly Every Protein Known to Science",
		"abstract": "DeepMind has expanded its database of microscopic biological mechanisms, hoping to accelerate research into all living things.",
		"url": "https://www.nytimes.com/2022/07/28/science/ai-deepmind-proteins.html",
		"uri": "nyt://article/2607dbc0-8354-5af5-b03d-51924117c766",
		"byline": "By Cade Metz",
		"item_type": "Article",
		"updated_date": "2022-07-28T12:46:30-04:00",
		"created_date": "2022-07-28T11:35:49-04:00",
		"published_date": "2022-07-28T11:35:49-04:00",
		"material_type_facet": "",
		"kicker": "",
		"des_facet": [
		  "Proteins",
		  "Artificial Intelligence",
		  "Drug Resistance (Microbial)",
		  "Parkinson's Disease",
		  "Coronavirus (2019-nCoV)",
		  "your-feed-science",
		  "your-feed-health"
		],
		"org_facet": [
		  "DeepMind Technologies Ltd"
		],
		"per_facet": [
		  "Hassabis, Demis"
		],
		"geo_facet": [
		  
		],
		"multimedia": [
		  {
			"url": "https://static01.nyt.com/images/2022/07/28/science/28alphafold-promo/28alphafold-promo-superJumbo.jpg",
			"format": "Super Jumbo",
			"height": 1365,
			"width": 2048,
			"type": "image",
			"subtype": "photo",
			"caption": "",
			"copyright": "DeepMind"
		  },
		  {
			"url": "https://static01.nyt.com/images/2022/07/28/science/28alphafold-promo/28alphafold-promo-threeByTwoSmallAt2X.jpg",
			"format": "threeByTwoSmallAt2X",
			"height": 400,
			"width": 600,
			"type": "image",
			"subtype": "photo",
			"caption": "",
			"copyright": "DeepMind"
		  },
		  {
			"url": "https://static01.nyt.com/images/2022/07/28/science/28alphafold-promo/28alphafold-promo-thumbLarge.jpg",
			"format": "Large Thumbnail",
			"height": 150,
			"width": 150,
			"type": "image",
			"subtype": "photo",
			"caption": "",
			"copyright": "DeepMind"
		  }
		],
		"short_url": "https://nyti.ms/3S5N6jl"
	  },
	  {
		"section": "us",
		"subsection": "politics",
		"title": "Doug Mastriano Faces Criticism Over His Backing From Antisemitic Ally",
		"abstract": "The founder of Gab, a far-right social media network, recently made bigoted remarks defending his ties with Mr. Mastriano, the Republican nominee for governor of Pennsylvania.",
		"url": "https://www.nytimes.com/2022/07/27/us/politics/doug-mastriano-gab.html",
		"uri": "nyt://article/4c0a62ec-98ad-5caf-8cb5-ff3147b17cdf",
		"byline": "By Trip Gabriel",
		"item_type": "Article",
		"updated_date": "2022-07-28T09:29:28-04:00",
		"created_date": "2022-07-27T20:32:47-04:00",
		"published_date": "2022-07-27T20:32:47-04:00",
		"material_type_facet": "",
		"kicker": "",
		"des_facet": [
		  "Right-Wing Extremism and Alt-Right",
		  "Elections, Governors",
		  "United States Politics and Government",
		  "Campaign Finance",
		  "Fringe Groups and Movements"
		],
		"org_facet": [
		  "Gab AI Inc"
		],
		"per_facet": [
		  "Mastriano, Doug",
		  "Torba, Andrew"
		],
		"geo_facet": [
		  "Pennsylvania"
		],
		"multimedia": [
		  {
			"url": "https://static01.nyt.com/images/2022/07/27/multimedia/27pol-mastriano-gab-1/27pol-mastriano-gab-1-superJumbo.jpg",
			"format": "Super Jumbo",
			"height": 1365,
			"width": 2048,
			"type": "image",
			"subtype": "photo",
			"caption": "Doug Mastriano, the Republican nominee for governor of Pennsylvania, has ignored criticism of his ties to Gab, a social media platform that has become a haven for extremists.",
			"copyright": "Rachel Wisniewski/Reuters"
		  },
		  {
			"url": "https://static01.nyt.com/images/2022/07/27/multimedia/27pol-mastriano-gab-1/27pol-mastriano-gab-1-threeByTwoSmallAt2X.jpg",
			"format": "threeByTwoSmallAt2X",
			"height": 400,
			"width": 600,
			"type": "image",
			"subtype": "photo",
			"caption": "Doug Mastriano, the Republican nominee for governor of Pennsylvania, has ignored criticism of his ties to Gab, a social media platform that has become a haven for extremists.",
			"copyright": "Rachel Wisniewski/Reuters"
		  },
		  {
			"url": "https://static01.nyt.com/images/2022/07/27/multimedia/27pol-mastriano-gab-1/27pol-mastriano-gab-1-thumbLarge.jpg",
			"format": "Large Thumbnail",
			"height": 150,
			"width": 150,
			"type": "image",
			"subtype": "photo",
			"caption": "Doug Mastriano, the Republican nominee for governor of Pennsylvania, has ignored criticism of his ties to Gab, a social media platform that has become a haven for extremists.",
			"copyright": "Rachel Wisniewski/Reuters"
		  }
		],
		"short_url": "https://nyti.ms/3zdEGxB"
	  },
	  {
		"section": "us",
		"subsection": "politics",
		"title": "3 Senate Hopefuls Denounce Big Tech. They Also Have Deep Ties to It.",
		"abstract": "Blake Masters, J.D. Vance and Mehmet Oz, all Republicans, have a history with the industry that involves uses of consumer data they now criticize.",
		"url": "https://www.nytimes.com/2022/07/27/us/politics/big-tech-oz-jd-vance-masters-senate.html",
		"uri": "nyt://article/65de34ed-cbf1-5e71-a696-323ccc7a9046",
		"byline": "By Jonathan Weisman",
		"item_type": "Article",
		"updated_date": "2022-07-28T12:04:14-04:00",
		"created_date": "2022-07-27T17:01:27-04:00",
		"published_date": "2022-07-27T17:01:27-04:00",
		"material_type_facet": "",
		"kicker": "",
		"des_facet": [
		  "Elections, Senate",
		  "Computers and the Internet",
		  "Midterm Elections (2022)",
		  "United States Politics and Government",
		  "United States Economy",
		  "Privacy",
		  "Data-Mining and Database Marketing",
		  "Regulation and Deregulation of Industry"
		],
		"org_facet": [
		  "Republican Party"
		],
		"per_facet": [
		  "Vance, J D",
		  "Masters, Blake (1986- )",
		  "Oz, Mehmet C",
		  "Thiel, Peter A"
		],
		"geo_facet": [
		  "Arizona",
		  "Ohio",
		  "Pennsylvania"
		],
		"multimedia": [
		  {
			"url": "https://static01.nyt.com/images/2022/07/27/us/politics/27pol-bigtech-01/merlin_209645271_2de5920e-3a72-4c8d-9318-37f97de9145f-superJumbo.jpg",
			"format": "Super Jumbo",
			"height": 1365,
			"width": 2048,
			"type": "image",
			"subtype": "photo",
			"caption": "Blake Masters, the leading Republican Senate candidate in Arizona, said in a video last year, “The internet, which was supposed to give us an awesome future, is instead being used to shut us up.”",
			"copyright": "Bridget Bennett for The New York Times"
		  },
		  {
			"url": "https://static01.nyt.com/images/2022/07/27/us/politics/27pol-bigtech-01/merlin_209645271_2de5920e-3a72-4c8d-9318-37f97de9145f-threeByTwoSmallAt2X.jpg",
			"format": "threeByTwoSmallAt2X",
			"height": 400,
			"width": 600,
			"type": "image",
			"subtype": "photo",
			"caption": "Blake Masters, the leading Republican Senate candidate in Arizona, said in a video last year, “The internet, which was supposed to give us an awesome future, is instead being used to shut us up.”",
			"copyright": "Bridget Bennett for The New York Times"
		  },
		  {
			"url": "https://static01.nyt.com/images/2022/07/27/us/politics/27pol-bigtech-01/27pol-bigtech-01-thumbLarge.jpg",
			"format": "Large Thumbnail",
			"height": 150,
			"width": 150,
			"type": "image",
			"subtype": "photo",
			"caption": "Blake Masters, the leading Republican Senate candidate in Arizona, said in a video last year, “The internet, which was supposed to give us an awesome future, is instead being used to shut us up.”",
			"copyright": "Bridget Bennett for The New York Times"
		  }
		],
		"short_url": "https://nyti.ms/3PEv4Tv"
	  },
	  {
		"section": "technology",
		"subsection": "",
		"title": "Meta reports first revenue decline and a 36 percent profit drop.",
		"abstract": "It was the first time the social media giant’s revenue had fallen since it went public a decade ago, as it confronts increased regulatory scrutiny and a turbulent economy.",
		"url": "https://www.nytimes.com/2022/07/27/technology/meta-earnings-revenue-decline.html",
		"uri": "nyt://article/0d8eda53-945e-57b5-9117-d9be98b57928",
		"byline": "By Mike Isaac",
		"item_type": "Article",
		"updated_date": "2022-07-27T23:25:38-04:00",
		"created_date": "2022-07-27T16:17:54-04:00",
		"published_date": "2022-07-27T16:17:54-04:00",
		"material_type_facet": "",
		"kicker": "",
		"des_facet": [
		  "Computers and the Internet",
		  "Metaverse (Internet)",
		  "Virtual Reality (Computers)",
		  "Social Media",
		  "Company Reports",
		  "Advertising and Marketing"
		],
		"org_facet": [
		  "Meta Platforms Inc",
		  "Facebook Inc",
		  "Instagram Inc"
		],
		"per_facet": [
		  
		],
		"geo_facet": [
		  
		],
		"multimedia": [
		  {
			"url": "https://static01.nyt.com/images/2022/07/27/business/27economy-briefing-meta-earnings/merlin_202629249_6646c1b0-19cf-41f0-826f-2a9981c088cf-superJumbo.jpg",
			"format": "Super Jumbo",
			"height": 1586,
			"width": 2048,
			"type": "image",
			"subtype": "photo",
			"caption": "Meta’s second-quarter revenue was $28.82 billion, down 1 percent from a year earlier",
			"copyright": "Jim Wilson/The New York Times"
		  },
		  {
			"url": "https://static01.nyt.com/images/2022/07/27/business/27economy-briefing-meta-earnings/merlin_202629249_6646c1b0-19cf-41f0-826f-2a9981c088cf-threeByTwoSmallAt2X.jpg",
			"format": "threeByTwoSmallAt2X",
			"height": 400,
			"width": 600,
			"type": "image",
			"subtype": "photo",
			"caption": "Meta’s second-quarter revenue was $28.82 billion, down 1 percent from a year earlier",
			"copyright": "Jim Wilson/The New York Times"
		  },
		  {
			"url": "https://static01.nyt.com/images/2022/07/27/business/27economy-briefing-meta-earnings/merlin_202629249_6646c1b0-19cf-41f0-826f-2a9981c088cf-thumbLarge.jpg",
			"format": "Large Thumbnail",
			"height": 150,
			"width": 150,
			"type": "image",
			"subtype": "photo",
			"caption": "Meta’s second-quarter revenue was $28.82 billion, down 1 percent from a year earlier",
			"copyright": "Jim Wilson/The New York Times"
		  }
		],
		"short_url": "https://nyti.ms/3J8B6JQ"
	  },
	  {
		"section": "technology",
		"subsection": "",
		"title": "F.T.C. Sues to Block Meta’s Virtual Reality Deal as It Confronts Big Tech",
		"abstract": "The move is a potential blow to Meta’s metaverse efforts and signals a shift in how the Federal Trade Commission is approaching tech deals.",
		"url": "https://www.nytimes.com/2022/07/27/technology/meta-facebook-vr-ftc.html",
		"uri": "nyt://article/6bbaf0ce-9c0a-5c2e-bce9-3f7f9cab2483",
		"byline": "By David McCabe and Mike Isaac",
		"item_type": "Article",
		"updated_date": "2022-07-28T12:08:22-04:00",
		"created_date": "2022-07-27T13:50:07-04:00",
		"published_date": "2022-07-27T13:50:07-04:00",
		"material_type_facet": "",
		"kicker": "",
		"des_facet": [
		  "Antitrust Laws and Competition Issues",
		  "Metaverse (Internet)",
		  "Virtual Reality (Computers)",
		  "Mergers, Acquisitions and Divestitures",
		  "Regulation and Deregulation of Industry"
		],
		"org_facet": [
		  "Facebook Inc",
		  "Meta Platforms Inc",
		  "Federal Trade Commission",
		  "Within Unlimited Inc"
		],
		"per_facet": [
		  
		],
		"geo_facet": [
		  
		],
		"multimedia": [
		  {
			"url": "https://static01.nyt.com/images/2022/07/27/business/27ftc-meta-sub/merlin_154203504_40b56689-7633-495f-83d4-7947a675cf3d-superJumbo.jpg",
			"format": "Super Jumbo",
			"height": 1499,
			"width": 2048,
			"type": "image",
			"subtype": "photo",
			"caption": "Facebook has promoted its virtual reality headsets for fitness and health purposes.",
			"copyright": "John G Mabanglo/EPA, via Shutterstock"
		  },
		  {
			"url": "https://static01.nyt.com/images/2022/07/27/business/27ftc-meta-sub/27ftc-meta-sub-threeByTwoSmallAt2X.jpg",
			"format": "threeByTwoSmallAt2X",
			"height": 400,
			"width": 600,
			"type": "image",
			"subtype": "photo",
			"caption": "Facebook has promoted its virtual reality headsets for fitness and health purposes.",
			"copyright": "John G Mabanglo/EPA, via Shutterstock"
		  },
		  {
			"url": "https://static01.nyt.com/images/2022/07/27/business/27ftc-meta-sub/27ftc-meta-sub-thumbLarge.jpg",
			"format": "Large Thumbnail",
			"height": 150,
			"width": 150,
			"type": "image",
			"subtype": "photo",
			"caption": "Facebook has promoted its virtual reality headsets for fitness and health purposes.",
			"copyright": "John G Mabanglo/EPA, via Shutterstock"
		  }
		],
		"short_url": "https://nyti.ms/3PHQvDa"
	  },
	  {
		"section": "world",
		"subsection": "europe",
		"title": "Senior European Parliament Member Targeted as Spyware Abuse Spreads",
		"abstract": "The attempted hack of a Greek opposition leader is the first aimed at a European Parliament member to be detected, but he has plenty of company among politicians, journalists and dissidents.",
		"url": "https://www.nytimes.com/2022/07/27/world/europe/eu-spyware-predator-pegasus.html",
		"uri": "nyt://article/dc1a877d-b403-5e91-84c0-061c1e025062",
		"byline": "By Matina Stevis-Gridneff and Monika Pronczuk",
		"item_type": "Article",
		"updated_date": "2022-07-27T23:16:22-04:00",
		"created_date": "2022-07-27T13:37:59-04:00",
		"published_date": "2022-07-27T13:37:59-04:00",
		"material_type_facet": "",
		"kicker": "",
		"des_facet": [
		  "Cyberattacks and Hackers",
		  "International Relations",
		  "Legislatures and Parliaments",
		  "Politics and Government",
		  "Computers and the Internet",
		  "Espionage and Intelligence Services",
		  "Wireless Communications"
		],
		"org_facet": [
		  
		],
		"per_facet": [
		  "Reynders, Didier",
		  "Michel, Charles (1975- )",
		  "Macron, Emmanuel (1977- )",
		  "Sanchez Perez-Castejon, Pedro (1972- )"
		],
		"geo_facet": [
		  "Belgium",
		  "Greece"
		],
		"multimedia": [
		  {
			"url": "https://static01.nyt.com/images/2022/07/27/world/27EUSpyware01/merlin_199175121_7b770788-8952-4c20-9279-4945800379f2-superJumbo.jpg",
			"format": "Super Jumbo",
			"height": 1365,
			"width": 2048,
			"type": "image",
			"subtype": "photo",
			"caption": "Nikos Androulakis filed a lawsuit in Athens to try to get authorities there to investigate an attempt to hack his phone.",
			"copyright": "Girogos Kontarinis/Eurokinissi, via Associated Press"
		  },
		  {
			"url": "https://static01.nyt.com/images/2022/07/27/world/27EUSpyware01/merlin_199175121_7b770788-8952-4c20-9279-4945800379f2-threeByTwoSmallAt2X.jpg",
			"format": "threeByTwoSmallAt2X",
			"height": 400,
			"width": 600,
			"type": "image",
			"subtype": "photo",
			"caption": "Nikos Androulakis filed a lawsuit in Athens to try to get authorities there to investigate an attempt to hack his phone.",
			"copyright": "Girogos Kontarinis/Eurokinissi, via Associated Press"
		  },
		  {
			"url": "https://static01.nyt.com/images/2022/07/27/world/27EUSpyware01/merlin_199175121_7b770788-8952-4c20-9279-4945800379f2-thumbLarge.jpg",
			"format": "Large Thumbnail",
			"height": 150,
			"width": 150,
			"type": "image",
			"subtype": "photo",
			"caption": "Nikos Androulakis filed a lawsuit in Athens to try to get authorities there to investigate an attempt to hack his phone.",
			"copyright": "Girogos Kontarinis/Eurokinissi, via Associated Press"
		  }
		],
		"short_url": "https://nyti.ms/3zaEaQY"
	  },
	  {
		"section": "us",
		"subsection": "politics",
		"title": "Senate Passes $280 Billion Industrial Policy Bill to Counter China",
		"abstract": "The bipartisan vote reflected a rare consensus in the otherwise polarized Congress in favor of investing federal resources into a broad industrial policy to counter China.",
		"url": "https://www.nytimes.com/2022/07/27/us/politics/senate-chips-china.html",
		"uri": "nyt://article/ae12548f-5bfb-5632-84d3-a97805572c77",
		"byline": "By Catie Edmondson",
		"item_type": "Article",
		"updated_date": "2022-07-28T11:47:17-04:00",
		"created_date": "2022-07-27T13:14:53-04:00",
		"published_date": "2022-07-27T13:14:53-04:00",
		"material_type_facet": "",
		"kicker": "",
		"des_facet": [
		  "Law and Legislation",
		  "Factories and Manufacturing",
		  "International Trade and World Market",
		  "Computer Chips",
		  "United States International Relations",
		  "United States Economy"
		],
		"org_facet": [
		  "Senate",
		  "Democratic Party",
		  "Republican Party"
		],
		"per_facet": [
		  "Schumer, Charles E",
		  "McConnell, Mitch",
		  "Young, Todd (1972- )"
		],
		"geo_facet": [
		  "China"
		],
		"multimedia": [
		  {
			"url": "https://static01.nyt.com/images/2022/07/27/us/politics/27dc-chips-copy/merlin_172476177_a9ad7438-ee58-4064-9560-1da0a23e9fb5-superJumbo.jpg",
			"format": "Super Jumbo",
			"height": 1365,
			"width": 2048,
			"type": "image",
			"subtype": "photo",
			"caption": "A semiconductor production facility in Beijing. The issue of commercial and military competition with China — and the promise of thousands of new American jobs — has brought Democrats and Republicans together.",
			"copyright": "Mark Schiefelbein/Associated Press"
		  },
		  {
			"url": "https://static01.nyt.com/images/2022/07/27/us/politics/27dc-chips-copy/merlin_172476177_a9ad7438-ee58-4064-9560-1da0a23e9fb5-threeByTwoSmallAt2X.jpg",
			"format": "threeByTwoSmallAt2X",
			"height": 400,
			"width": 600,
			"type": "image",
			"subtype": "photo",
			"caption": "A semiconductor production facility in Beijing. The issue of commercial and military competition with China — and the promise of thousands of new American jobs — has brought Democrats and Republicans together.",
			"copyright": "Mark Schiefelbein/Associated Press"
		  },
		  {
			"url": "https://static01.nyt.com/images/2022/07/27/us/politics/27dc-chips-copy/27dc-chips-thumbLarge.jpg",
			"format": "Large Thumbnail",
			"height": 150,
			"width": 150,
			"type": "image",
			"subtype": "photo",
			"caption": "A semiconductor production facility in Beijing. The issue of commercial and military competition with China — and the promise of thousands of new American jobs — has brought Democrats and Republicans together.",
			"copyright": "Mark Schiefelbein/Associated Press"
		  }
		],
		"short_url": "https://nyti.ms/3ozlIwz"
	  },
	  {
		"section": "technology",
		"subsection": "",
		"title": "So Much Tech. So Few Winners.",
		"abstract": "Technology is everything. Why are there hardly any blockbuster tech companies of the smartphone age?",
		"url": "https://www.nytimes.com/2022/07/27/technology/tech-winners.html",
		"uri": "nyt://article/061dd333-4418-5493-8378-b74502f6139f",
		"byline": "By Shira Ovide",
		"item_type": "Article",
		"updated_date": "2022-07-27T12:18:18-04:00",
		"created_date": "2022-07-27T12:18:18-04:00",
		"published_date": "2022-07-27T12:18:18-04:00",
		"material_type_facet": "",
		"kicker": "On Tech Newsletter",
		"des_facet": [
		  "internal-sub-only-nl",
		  "Computers and the Internet",
		  "iPhone",
		  "Smartphones",
		  "Mobile Applications"
		],
		"org_facet": [
		  
		],
		"per_facet": [
		  
		],
		"geo_facet": [
		  
		],
		"multimedia": [
		  {
			"url": "https://static01.nyt.com/images/2022/07/27/autossell/NYT_Konrad_Adam_Modrzejewski/NYT_Konrad_Adam_Modrzejewski-superJumbo.png",
			"format": "Super Jumbo",
			"height": 2048,
			"width": 2048,
			"type": "image",
			"subtype": "photo",
			"caption": "",
			"copyright": "Konrad Adam Modrzejewski"
		  },
		  {
			"url": "https://static01.nyt.com/images/2022/07/27/autossell/NYT_Konrad_Adam_Modrzejewski/NYT_Konrad_Adam_Modrzejewski-threeByTwoSmallAt2X.png",
			"format": "threeByTwoSmallAt2X",
			"height": 400,
			"width": 600,
			"type": "image",
			"subtype": "photo",
			"caption": "",
			"copyright": "Konrad Adam Modrzejewski"
		  },
		  {
			"url": "https://static01.nyt.com/images/2022/07/27/autossell/NYT_Konrad_Adam_Modrzejewski/NYT_Konrad_Adam_Modrzejewski-thumbLarge.png",
			"format": "Large Thumbnail",
			"height": 150,
			"width": 150,
			"type": "image",
			"subtype": "photo",
			"caption": "",
			"copyright": "Konrad Adam Modrzejewski"
		  }
		],
		"short_url": "https://nyti.ms/3zy9z17"
	  },
	  {
		"section": "technology",
		"subsection": "personaltech",
		"title": "The Default Tech Settings You Should Turn Off Right Away",
		"abstract": "These controls, which are buried inside products from Apple, Google, Meta and others, make us share more data than we need to.",
		"url": "https://www.nytimes.com/2022/07/27/technology/personaltech/default-settings-turn-off.html",
		"uri": "nyt://article/6ff02b50-f836-5e4c-9544-ed0af7c4fcb2",
		"byline": "By Brian X. Chen",
		"item_type": "Article",
		"updated_date": "2022-07-27T23:28:29-04:00",
		"created_date": "2022-07-27T05:00:26-04:00",
		"published_date": "2022-07-27T05:00:26-04:00",
		"material_type_facet": "",
		"kicker": "tech fix",
		"des_facet": [
		  "Data-Mining and Database Marketing",
		  "Computers and the Internet",
		  "Mobile Applications",
		  "Privacy",
		  "Smartphones",
		  "Speakers (Audio)",
		  "iPhone",
		  "Android (Operating System)",
		  "Content Type: Service"
		],
		"org_facet": [
		  "Amazon.com Inc",
		  "Apple Inc",
		  "Facebook Inc",
		  "Google Inc",
		  "Meta Platforms Inc",
		  "Microsoft Corp"
		],
		"per_facet": [
		  
		],
		"geo_facet": [
		  
		],
		"multimedia": [
		  {
			"url": "https://static01.nyt.com/images/2022/07/28/business/21Techfix-illo/21Techfix-illo-superJumbo.gif",
			"format": "Super Jumbo",
			"height": 613,
			"width": 1024,
			"type": "image",
			"subtype": "photo",
			"caption": "",
			"copyright": "Glenn Harvey"
		  },
		  {
			"url": "https://static01.nyt.com/images/2022/07/28/business/21Techfix-illo/21Techfix-illo-threeByTwoSmallAt2X.jpg",
			"format": "threeByTwoSmallAt2X",
			"height": 400,
			"width": 600,
			"type": "image",
			"subtype": "photo",
			"caption": "",
			"copyright": "Glenn Harvey"
		  },
		  {
			"url": "https://static01.nyt.com/images/2022/07/28/business/21Techfix-illo/21Techfix-illo-thumbLarge.jpg",
			"format": "Large Thumbnail",
			"height": 150,
			"width": 150,
			"type": "image",
			"subtype": "photo",
			"caption": "",
			"copyright": "Glenn Harvey"
		  }
		],
		"short_url": "https://nyti.ms/3OxzMRT"
	  },
	  {
		"section": "magazine",
		"subsection": "",
		"title": "Why Does the Prison-Life Content on TikTok Feel So Familiar?",
		"abstract": "Cooking, life advice, bored dancing, workout tips — on social media, you’re reminded that incarceration is a pretty common slice of American life.",
		"url": "https://www.nytimes.com/2022/07/27/magazine/prison-life-tiktok.html",
		"uri": "nyt://article/d8f6aee6-8f60-5011-a4ae-e4090be54fab",
		"byline": "By Robin Kaiser-Schatzlein",
		"item_type": "Article",
		"updated_date": "2022-07-28T13:33:13-04:00",
		"created_date": "2022-07-27T05:00:07-04:00",
		"published_date": "2022-07-27T05:00:07-04:00",
		"material_type_facet": "",
		"kicker": "Screenland",
		"des_facet": [
		  "Prisons and Prisoners",
		  "Cooking and Cookbooks",
		  "Documentary Films and Programs"
		],
		"org_facet": [
		  "TikTok (ByteDance)"
		],
		"per_facet": [
		  
		],
		"geo_facet": [
		  
		],
		"multimedia": [
		  {
			"url": "https://static01.nyt.com/images/2022/07/31/magazine/31mag-screenland/31mag-screenland-superJumbo-v2.jpg",
			"format": "Super Jumbo",
			"height": 1364,
			"width": 2048,
			"type": "image",
			"subtype": "photo",
			"caption": "",
			"copyright": "Photo illustration by Ricardo Santos"
		  },
		  {
			"url": "https://static01.nyt.com/images/2022/07/31/magazine/31mag-screenland/31mag-screenland-threeByTwoSmallAt2X.jpg",
			"format": "threeByTwoSmallAt2X",
			"height": 399,
			"width": 600,
			"type": "image",
			"subtype": "photo",
			"caption": "",
			"copyright": "Photo illustration by Ricardo Santos"
		  },
		  {
			"url": "https://static01.nyt.com/images/2022/07/31/magazine/31mag-screenland/31mag-screenland-thumbLarge.jpg",
			"format": "Large Thumbnail",
			"height": 150,
			"width": 150,
			"type": "image",
			"subtype": "photo",
			"caption": "",
			"copyright": "Photo illustration by Ricardo Santos"
		  }
		],
		"short_url": "https://nyti.ms/3PSYCwq"
	  },
	  {
		"section": "technology",
		"subsection": "",
		"title": "Microsoft reports earnings that fall short of already-reduced expectations.",
		"abstract": "The tech giant cited the strong U.S. dollar, falling consumer demand and production slowdowns of PCs for its performance.",
		"url": "https://www.nytimes.com/2022/07/26/technology/microsoft-earnings.html",
		"uri": "nyt://article/c8bca8eb-a6e9-52e1-af98-3e84dd117fc7",
		"byline": "By Karen Weise",
		"item_type": "Article",
		"updated_date": "2022-07-26T19:09:05-04:00",
		"created_date": "2022-07-26T16:32:09-04:00",
		"published_date": "2022-07-26T16:32:09-04:00",
		"material_type_facet": "",
		"kicker": "",
		"des_facet": [
		  "Software",
		  "Company Reports",
		  "Computers and the Internet",
		  "Cloud Computing",
		  "Windows (Operating System)",
		  "Computer and Video Games",
		  "Currency"
		],
		"org_facet": [
		  "Microsoft Corp"
		],
		"per_facet": [
		  "Nadella, Satya"
		],
		"geo_facet": [
		  
		],
		"multimedia": [
		  {
			"url": "https://static01.nyt.com/images/2022/07/26/business/26msoft-earnings/merlin_162038541_88adf140-8a9f-4c90-89fd-0374522fb28a-superJumbo.jpg",
			"format": "Super Jumbo",
			"height": 2048,
			"width": 1366,
			"type": "image",
			"subtype": "photo",
			"caption": "Production slowdowns of personal computers in China and falling consumer demand caused a decline of more than $300 million in sales of Microsoft’s Windows operating system that comes preinstalled on new computers.",
			"copyright": "Jeenah Moon for The New York Times"
		  },
		  {
			"url": "https://static01.nyt.com/images/2022/07/26/business/26msoft-earnings/26msoft-earnings-threeByTwoSmallAt2X.jpg",
			"format": "threeByTwoSmallAt2X",
			"height": 400,
			"width": 600,
			"type": "image",
			"subtype": "photo",
			"caption": "Production slowdowns of personal computers in China and falling consumer demand caused a decline of more than $300 million in sales of Microsoft’s Windows operating system that comes preinstalled on new computers.",
			"copyright": "Jeenah Moon for The New York Times"
		  },
		  {
			"url": "https://static01.nyt.com/images/2022/07/26/business/26msoft-earnings/26msoft-earnings-thumbLarge.jpg",
			"format": "Large Thumbnail",
			"height": 150,
			"width": 150,
			"type": "image",
			"subtype": "photo",
			"caption": "Production slowdowns of personal computers in China and falling consumer demand caused a decline of more than $300 million in sales of Microsoft’s Windows operating system that comes preinstalled on new computers.",
			"copyright": "Jeenah Moon for The New York Times"
		  }
		],
		"short_url": "https://nyti.ms/3BkaHqG"
	  },
	  {
		"section": "technology",
		"subsection": "",
		"title": "Instagram, facing criticism from Kylie Jenner and others, tries explaining itself.",
		"abstract": "Meta is meeting backlash for changes that make some of its platforms act more like TikTok.",
		"url": "https://www.nytimes.com/2022/07/26/technology/instagram-kylie-jenner-criticism.html",
		"uri": "nyt://article/d610a29b-1f27-5339-bdc3-88a803af568a",
		"byline": "By Kalley Huang",
		"item_type": "Article",
		"updated_date": "2022-07-27T16:12:23-04:00",
		"created_date": "2022-07-26T16:01:50-04:00",
		"published_date": "2022-07-26T16:01:50-04:00",
		"material_type_facet": "",
		"kicker": "",
		"des_facet": [
		  "Social Media",
		  "Photography",
		  "Video Recordings, Downloads and Streaming",
		  "Instant Messaging",
		  "Mobile Applications",
		  "Celebrities"
		],
		"org_facet": [
		  "Instagram Inc",
		  "Meta Platforms Inc",
		  "TikTok (ByteDance)"
		],
		"per_facet": [
		  "Jenner, Kylie",
		  "Kardashian, Kim",
		  "Mosseri, Adam"
		],
		"geo_facet": [
		  
		],
		"multimedia": [
		  {
			"url": "https://static01.nyt.com/images/2022/07/26/business/26economy-briefing-jenner-teigen/merlin_168565467_0688f920-db52-42e1-b0af-5e085acaa2da-superJumbo.jpg",
			"format": "Super Jumbo",
			"height": 1365,
			"width": 2048,
			"type": "image",
			"subtype": "photo",
			"caption": "The beauty mogul Kylie Jenner shared an image on Monday that read: “Make Instagram Instagram again. (stop trying to be tiktok i just want to see cute photos of my friends.) Sincerely, everyone.”",
			"copyright": "Calla Kessler/The New York Times"
		  },
		  {
			"url": "https://static01.nyt.com/images/2022/07/26/business/26economy-briefing-jenner-teigen/26economy-briefing-jenner-teigen-threeByTwoSmallAt2X.jpg",
			"format": "threeByTwoSmallAt2X",
			"height": 400,
			"width": 600,
			"type": "image",
			"subtype": "photo",
			"caption": "The beauty mogul Kylie Jenner shared an image on Monday that read: “Make Instagram Instagram again. (stop trying to be tiktok i just want to see cute photos of my friends.) Sincerely, everyone.”",
			"copyright": "Calla Kessler/The New York Times"
		  },
		  {
			"url": "https://static01.nyt.com/images/2022/07/26/business/26economy-briefing-jenner-teigen/26economy-briefing-jenner-teigen-thumbLarge.jpg",
			"format": "Large Thumbnail",
			"height": 150,
			"width": 150,
			"type": "image",
			"subtype": "photo",
			"caption": "The beauty mogul Kylie Jenner shared an image on Monday that read: “Make Instagram Instagram again. (stop trying to be tiktok i just want to see cute photos of my friends.) Sincerely, everyone.”",
			"copyright": "Calla Kessler/The New York Times"
		  }
		],
		"short_url": "https://nyti.ms/3SeoxAS"
	  },
	  {
		"section": "technology",
		"subsection": "",
		"title": "Kraken, a U.S. Crypto Exchange, Is Suspected of Violating Sanctions",
		"abstract": "The Treasury Department is investigating whether the crypto exchange allowed users in Iran to buy and sell digital tokens, said people with knowledge of the matter.",
		"url": "https://www.nytimes.com/2022/07/26/technology/kraken-crypto-iran.html",
		"uri": "nyt://article/a8225686-6ca7-572a-bd79-82c08fda0cdf",
		"byline": "By Ryan Mac and David Yaffe-Bellany",
		"item_type": "Article",
		"updated_date": "2022-07-27T10:44:47-04:00",
		"created_date": "2022-07-26T13:54:47-04:00",
		"published_date": "2022-07-26T13:54:47-04:00",
		"material_type_facet": "",
		"kicker": "",
		"des_facet": [
		  "Embargoes and Sanctions",
		  "Virtual Currency",
		  "Regulation and Deregulation of Industry",
		  "Computers and the Internet"
		],
		"org_facet": [
		  "Kraken (Payward Inc)",
		  "Treasury Department",
		  "Office of Foreign Assets Control (United States Treasury)"
		],
		"per_facet": [
		  "Powell, Jesse (Cryptocurrency Executive)"
		],
		"geo_facet": [
		  "Iran"
		],
		"multimedia": [
		  {
			"url": "https://static01.nyt.com/images/2022/07/25/business/00kraken-sanctions/00kraken-sanctions-superJumbo.jpg",
			"format": "Super Jumbo",
			"height": 1639,
			"width": 2048,
			"type": "image",
			"subtype": "photo",
			"caption": "Jesse Powell, chief executive of Kraken, in San Francisco in 2014. The Treasury Department has been investigating the company since 2019.",
			"copyright": "David Paul Morris/Bloomberg"
		  },
		  {
			"url": "https://static01.nyt.com/images/2022/07/25/business/00kraken-sanctions/00kraken-sanctions-threeByTwoSmallAt2X.jpg",
			"format": "threeByTwoSmallAt2X",
			"height": 400,
			"width": 600,
			"type": "image",
			"subtype": "photo",
			"caption": "Jesse Powell, chief executive of Kraken, in San Francisco in 2014. The Treasury Department has been investigating the company since 2019.",
			"copyright": "David Paul Morris/Bloomberg"
		  },
		  {
			"url": "https://static01.nyt.com/images/2022/07/25/business/00kraken-sanctions/00kraken-sanctions-thumbLarge.jpg",
			"format": "Large Thumbnail",
			"height": 150,
			"width": 150,
			"type": "image",
			"subtype": "photo",
			"caption": "Jesse Powell, chief executive of Kraken, in San Francisco in 2014. The Treasury Department has been investigating the company since 2019.",
			"copyright": "David Paul Morris/Bloomberg"
		  }
		],
		"short_url": "https://nyti.ms/3vguF1k"
	  },
	  {
		"section": "technology",
		"subsection": "",
		"title": "Will Streaming Save Sports or Kill It?",
		"abstract": "Sports are the lifeblood of TV but also choking it. Big Tech is following a similar playbook.",
		"url": "https://www.nytimes.com/2022/07/26/technology/streaming-sports.html",
		"uri": "nyt://article/13b4f709-678c-5e0f-81e9-6e7b41dfe978",
		"byline": "By Shira Ovide",
		"item_type": "Article",
		"updated_date": "2022-07-27T23:29:15-04:00",
		"created_date": "2022-07-26T13:00:59-04:00",
		"published_date": "2022-07-26T13:00:59-04:00",
		"material_type_facet": "",
		"kicker": "On Tech Newsletter",
		"des_facet": [
		  "internal-sub-only-nl",
		  "Computers and the Internet",
		  "Television",
		  "Video Recordings, Downloads and Streaming"
		],
		"org_facet": [
		  "Amazon.com Inc",
		  "Apple Inc",
		  "YouTube.com"
		],
		"per_facet": [
		  
		],
		"geo_facet": [
		  
		],
		"multimedia": [
		  {
			"url": "https://static01.nyt.com/images/2022/07/26/autossell/finaltechanim2_1/finaltechanim2_1-superJumbo.png",
			"format": "Super Jumbo",
			"height": 2048,
			"width": 2048,
			"type": "image",
			"subtype": "photo",
			"caption": "",
			"copyright": "Christa Jarrold"
		  },
		  {
			"url": "https://static01.nyt.com/images/2022/07/26/autossell/finaltechanim2_1/finaltechanim2_1-threeByTwoSmallAt2X-v2.png",
			"format": "threeByTwoSmallAt2X",
			"height": 400,
			"width": 600,
			"type": "image",
			"subtype": "photo",
			"caption": "",
			"copyright": "Christa Jarrold"
		  },
		  {
			"url": "https://static01.nyt.com/images/2022/07/26/autossell/finaltechanim2_1/finaltechanim2_1-thumbLarge.png",
			"format": "Large Thumbnail",
			"height": 150,
			"width": 150,
			"type": "image",
			"subtype": "photo",
			"caption": "",
			"copyright": "Christa Jarrold"
		  }
		],
		"short_url": "https://nyti.ms/3OzRYdE"
	  },
	  {
		"section": "technology",
		"subsection": "",
		"title": "‘Operating With Increased Intensity’: Zuckerberg Leads Meta Into Next Phase",
		"abstract": "Facebook’s founder is setting a relentless pace as he pushes his company through a tech transformation during a global economic slowdown.",
		"url": "https://www.nytimes.com/2022/07/26/technology/zuckerberg-meta-facebook-earnings.html",
		"uri": "nyt://article/1469cd81-16d4-5881-bc56-f182f1435991",
		"byline": "By Mike Isaac",
		"item_type": "Article",
		"updated_date": "2022-07-27T10:40:42-04:00",
		"created_date": "2022-07-26T10:55:33-04:00",
		"published_date": "2022-07-26T10:55:33-04:00",
		"material_type_facet": "",
		"kicker": "",
		"des_facet": [
		  "Metaverse (Internet)",
		  "Social Media",
		  "Online Advertising",
		  "Computers and the Internet",
		  "Data-Mining and Database Marketing",
		  "Mobile Applications",
		  "Instant Messaging",
		  "Virtual Reality (Computers)"
		],
		"org_facet": [
		  "Facebook Inc",
		  "Meta Platforms Inc",
		  "Instagram Inc"
		],
		"per_facet": [
		  "Zuckerberg, Mark E"
		],
		"geo_facet": [
		  
		],
		"multimedia": [
		  {
			"url": "https://static01.nyt.com/images/2022/07/27/business/27zuck/27zuck-superJumbo.jpg",
			"format": "Super Jumbo",
			"height": 2048,
			"width": 2048,
			"type": "image",
			"subtype": "photo",
			"caption": "",
			"copyright": "Mark Harris"
		  },
		  {
			"url": "https://static01.nyt.com/images/2022/07/27/business/27zuck/27zuck-threeByTwoSmallAt2X.jpg",
			"format": "threeByTwoSmallAt2X",
			"height": 400,
			"width": 600,
			"type": "image",
			"subtype": "photo",
			"caption": "",
			"copyright": "Mark Harris"
		  },
		  {
			"url": "https://static01.nyt.com/images/2022/07/27/business/27zuck/27zuck-thumbLarge.jpg",
			"format": "Large Thumbnail",
			"height": 150,
			"width": 150,
			"type": "image",
			"subtype": "photo",
			"caption": "",
			"copyright": "Mark Harris"
		  }
		],
		"short_url": "https://nyti.ms/3cKzMRj"
	  },
	  {
		"section": "business",
		"subsection": "",
		"title": "Energy Department will lend G.M. and LG $2.5 billion to build battery factories.",
		"abstract": "The loan will help the automaker and its supplier build electric vehicle battery factories in Ohio, Tennessee and Michigan.",
		"url": "https://www.nytimes.com/2022/07/25/business/energy-department-gm-lg-battery-loan.html",
		"uri": "nyt://article/0e33c408-8cb4-5b9b-a1e7-d0cac9d5512e",
		"byline": "By Jack Ewing",
		"item_type": "Article",
		"updated_date": "2022-07-25T23:17:06-04:00",
		"created_date": "2022-07-25T16:01:07-04:00",
		"published_date": "2022-07-25T16:01:07-04:00",
		"material_type_facet": "",
		"kicker": "",
		"des_facet": [
		  "Automobiles",
		  "Factories and Manufacturing",
		  "Batteries",
		  "Electric and Hybrid Vehicles",
		  "United States Politics and Government"
		],
		"org_facet": [
		  "Energy Department",
		  "General Motors",
		  "LG Energy Solution"
		],
		"per_facet": [
		  
		],
		"geo_facet": [
		  "Tennessee",
		  "Ohio",
		  "Michigan"
		],
		"multimedia": [
		  {
			"url": "https://static01.nyt.com/images/2022/07/25/multimedia/25economy-briefing-doe-batteries/25economy-briefing-doe-batteries-superJumbo.jpg",
			"format": "Super Jumbo",
			"height": 1535,
			"width": 2048,
			"type": "image",
			"subtype": "photo",
			"caption": "A battery pack at the General Motors Estes Engineering lab in Warren, Mich.",
			"copyright": "Peter Hoffman for The New York Times"
		  },
		  {
			"url": "https://static01.nyt.com/images/2022/07/25/multimedia/25economy-briefing-doe-batteries/25economy-briefing-doe-batteries-threeByTwoSmallAt2X.jpg",
			"format": "threeByTwoSmallAt2X",
			"height": 400,
			"width": 600,
			"type": "image",
			"subtype": "photo",
			"caption": "A battery pack at the General Motors Estes Engineering lab in Warren, Mich.",
			"copyright": "Peter Hoffman for The New York Times"
		  },
		  {
			"url": "https://static01.nyt.com/images/2022/07/25/multimedia/25economy-briefing-doe-batteries/25economy-briefing-doe-batteries-thumbLarge.jpg",
			"format": "Large Thumbnail",
			"height": 150,
			"width": 150,
			"type": "image",
			"subtype": "photo",
			"caption": "A battery pack at the General Motors Estes Engineering lab in Warren, Mich.",
			"copyright": "Peter Hoffman for The New York Times"
		  }
		],
		"short_url": "https://nyti.ms/3yZ399S"
	  },
	  {
		"section": "business",
		"subsection": "",
		"title": "Tesla will spend more to increase production at two new factories.",
		"abstract": "Tesla said it expected capital expenditures to be $6 billion to $8 billion in 2022, up from an April forecast of $5 billion to $7 billion.",
		"url": "https://www.nytimes.com/2022/07/25/business/tesla-spending-production-factories.html",
		"uri": "nyt://article/fa9f888e-7ce0-5666-8d74-06f279a62320",
		"byline": "By Jack Ewing",
		"item_type": "Article",
		"updated_date": "2022-07-26T12:14:32-04:00",
		"created_date": "2022-07-25T11:24:45-04:00",
		"published_date": "2022-07-25T11:24:45-04:00",
		"material_type_facet": "",
		"kicker": "",
		"des_facet": [
		  "Company Reports",
		  "Electric and Hybrid Vehicles",
		  "Stocks and Bonds",
		  "Factories and Manufacturing",
		  "Suits and Litigation (Civil)"
		],
		"org_facet": [
		  "Tesla Motors Inc",
		  "Securities and Exchange Commission"
		],
		"per_facet": [
		  "Musk, Elon"
		],
		"geo_facet": [
		  "Austin (Tex)",
		  "Berlin (Germany)"
		],
		"multimedia": [
		  {
			"url": "https://static01.nyt.com/images/2022/07/25/business/25economy-briefing-tesla/merlin_204292440_5b9ffb68-052a-42be-8f7d-9572f1e14a1f-superJumbo.jpg",
			"format": "Super Jumbo",
			"height": 1365,
			"width": 2048,
			"type": "image",
			"subtype": "photo",
			"caption": "A Tesla vehicle during the opening day of the Tesla “Gigafactory” in Germany.",
			"copyright": "Pool photo by Christian Marquardt"
		  },
		  {
			"url": "https://static01.nyt.com/images/2022/07/25/business/25economy-briefing-tesla/merlin_204292440_5b9ffb68-052a-42be-8f7d-9572f1e14a1f-threeByTwoSmallAt2X.jpg",
			"format": "threeByTwoSmallAt2X",
			"height": 400,
			"width": 600,
			"type": "image",
			"subtype": "photo",
			"caption": "A Tesla vehicle during the opening day of the Tesla “Gigafactory” in Germany.",
			"copyright": "Pool photo by Christian Marquardt"
		  },
		  {
			"url": "https://static01.nyt.com/images/2022/07/25/business/25economy-briefing-tesla/25economy-briefing-tesla-thumbLarge.jpg",
			"format": "Large Thumbnail",
			"height": 150,
			"width": 150,
			"type": "image",
			"subtype": "photo",
			"caption": "A Tesla vehicle during the opening day of the Tesla “Gigafactory” in Germany.",
			"copyright": "Pool photo by Christian Marquardt"
		  }
		],
		"short_url": "https://nyti.ms/3PAYYIj"
	  },
	  {
		"section": "technology",
		"subsection": "",
		"title": "QAnon Candidates Aren’t Thriving, but Some of Their Ideas Are",
		"abstract": "While few with ties to the conspiracy theory are winning their primaries, themes pushed by QAnon followers have become Republican talking points.",
		"url": "https://www.nytimes.com/2022/07/25/technology/qanon-midterms.html",
		"uri": "nyt://article/45dd7d2f-7f4a-5871-bb46-32decfde2d2f",
		"byline": "By Stuart A. Thompson",
		"item_type": "Article",
		"updated_date": "2022-07-26T12:11:02-04:00",
		"created_date": "2022-07-25T05:00:17-04:00",
		"published_date": "2022-07-25T05:00:17-04:00",
		"material_type_facet": "",
		"kicker": "",
		"des_facet": [
		  "Right-Wing Extremism and Alt-Right",
		  "QAnon",
		  "Conspiracy Theories",
		  "Fringe Groups and Movements",
		  "Presidential Election of 2020",
		  "Voter Fraud (Election Fraud)",
		  "Rumors and Misinformation",
		  "Project Democracy",
		  "Midterm Elections (2022)",
		  "Primaries and Caucuses"
		],
		"org_facet": [
		  
		],
		"per_facet": [
		  "Lake, Kari A",
		  "Watkins, Ron (1987/88- )"
		],
		"geo_facet": [
		  
		],
		"multimedia": [
		  {
			"url": "https://static01.nyt.com/images/2022/07/25/business/25disinfo-qanon-03/merlin_210484011_3f1afaf0-74cb-4422-b63d-1bcffb434cc3-superJumbo.jpg",
			"format": "Super Jumbo",
			"height": 1366,
			"width": 2048,
			"type": "image",
			"subtype": "photo",
			"caption": "Merchandise for sale outside the Findlay Toyota Center in Prescott, Ariz., before Donald J. Trump’s political rally on Friday.",
			"copyright": "Adriana Zehbrauskas for The New York Times"
		  },
		  {
			"url": "https://static01.nyt.com/images/2022/07/25/business/25disinfo-qanon-03/25disinfo-qanon-03-threeByTwoSmallAt2X.jpg",
			"format": "threeByTwoSmallAt2X",
			"height": 400,
			"width": 600,
			"type": "image",
			"subtype": "photo",
			"caption": "Merchandise for sale outside the Findlay Toyota Center in Prescott, Ariz., before Donald J. Trump’s political rally on Friday.",
			"copyright": "Adriana Zehbrauskas for The New York Times"
		  },
		  {
			"url": "https://static01.nyt.com/images/2022/07/25/business/25disinfo-qanon-03/25disinfo-qanon-03-thumbLarge.jpg",
			"format": "Large Thumbnail",
			"height": 150,
			"width": 150,
			"type": "image",
			"subtype": "photo",
			"caption": "Merchandise for sale outside the Findlay Toyota Center in Prescott, Ariz., before Donald J. Trump’s political rally on Friday.",
			"copyright": "Adriana Zehbrauskas for The New York Times"
		  }
		],
		"short_url": "https://nyti.ms/3OxOW9x"
	  },
	  {
		"section": "technology",
		"subsection": "",
		"title": "Gen Z Designers Made It Big on This App. Now They’re Graduating.",
		"abstract": "Depop, a social shopping app, was a springboard for many young designers during the pandemic. Some are now taking their success elsewhere.",
		"url": "https://www.nytimes.com/2022/07/25/technology/depop-gen-z-designers.html",
		"uri": "nyt://article/98ccafb7-f118-5456-8a66-890947ea8b90",
		"byline": "By Kalley Huang",
		"item_type": "Article",
		"updated_date": "2022-07-26T07:54:48-04:00",
		"created_date": "2022-07-25T03:00:15-04:00",
		"published_date": "2022-07-25T03:00:15-04:00",
		"material_type_facet": "",
		"kicker": "",
		"des_facet": [
		  "Social Media",
		  "Mobile Applications",
		  "Shopping and Retail",
		  "Generation Z",
		  "Mobile Commerce and Payments",
		  "Millennial Generation",
		  "E-Commerce",
		  "Fashion and Apparel",
		  "Computers and the Internet"
		],
		"org_facet": [
		  "Depop (Mobile App)",
		  "Etsy Inc"
		],
		"per_facet": [
		  
		],
		"geo_facet": [
		  
		],
		"multimedia": [
		  {
			"url": "https://static01.nyt.com/images/2022/07/25/business/25-DEPOP-06/merlin_210278721_7580b830-fc59-4112-9636-9a9255ac84ad-superJumbo.jpg",
			"format": "Super Jumbo",
			"height": 2048,
			"width": 1463,
			"type": "image",
			"subtype": "photo",
			"caption": "Brianna Lopez, who has a Depop shop called That Valley Girl, said she struggled to connect with the customers on the app. Last year, she joined Instagram.",
			"copyright": "Jessica Pons for The New York Times"
		  },
		  {
			"url": "https://static01.nyt.com/images/2022/07/25/business/25-DEPOP-06/25-DEPOP-06-threeByTwoSmallAt2X.jpg",
			"format": "threeByTwoSmallAt2X",
			"height": 400,
			"width": 600,
			"type": "image",
			"subtype": "photo",
			"caption": "Brianna Lopez, who has a Depop shop called That Valley Girl, said she struggled to connect with the customers on the app. Last year, she joined Instagram.",
			"copyright": "Jessica Pons for The New York Times"
		  },
		  {
			"url": "https://static01.nyt.com/images/2022/07/25/business/25-DEPOP-06/25-DEPOP-06-thumbLarge.jpg",
			"format": "Large Thumbnail",
			"height": 150,
			"width": 150,
			"type": "image",
			"subtype": "photo",
			"caption": "Brianna Lopez, who has a Depop shop called That Valley Girl, said she struggled to connect with the customers on the app. Last year, she joined Instagram.",
			"copyright": "Jessica Pons for The New York Times"
		  }
		],
		"short_url": "https://nyti.ms/3RXEdIy"
	  },
	  {
		"section": "business",
		"subsection": "media",
		"title": "As Jan. 6 Panel’s Evidence Piled Up, Conservative Media Doubled Down",
		"abstract": "Many of Donald J. Trump’s allies in the media believe the reports about violence and criminal conduct committed by Trump supporters have been exaggerated.",
		"url": "https://www.nytimes.com/2022/07/24/business/media/trump-conservative-media.html",
		"uri": "nyt://article/ed68dff1-de7a-5971-b5f4-185755fb98ae",
		"byline": "By Jeremy W. Peters",
		"item_type": "Article",
		"updated_date": "2022-07-25T12:47:45-04:00",
		"created_date": "2022-07-24T18:13:50-04:00",
		"published_date": "2022-07-24T18:13:50-04:00",
		"material_type_facet": "",
		"kicker": "Media Memo",
		"des_facet": [
		  "Storming of the US Capitol (Jan, 2021)",
		  "Television",
		  "Politics and Government",
		  "News and News Media",
		  "United States Politics and Government",
		  "Conservatism (US Politics)"
		],
		"org_facet": [
		  "House Select Committee to Investigate the January 6th Attack",
		  "CNN",
		  "Fox News Channel"
		],
		"per_facet": [
		  "Trump, Donald J"
		],
		"geo_facet": [
		  
		],
		"multimedia": [
		  {
			"url": "https://static01.nyt.com/images/2022/07/23/lens/23m3ediamemo-2/23m3ediamemo-2-superJumbo.jpg",
			"format": "Super Jumbo",
			"height": 1366,
			"width": 2048,
			"type": "image",
			"subtype": "photo",
			"caption": "The radio host Mark Levin with Donald J. Trump at a White House ceremony in 2019. Mr. Levin has scoffed at the notion that Mr. Trump had tried to overturn the election.",
			"copyright": "Leah Millis/Reuters"
		  },
		  {
			"url": "https://static01.nyt.com/images/2022/07/23/lens/23m3ediamemo-2/23m3ediamemo-2-threeByTwoSmallAt2X.jpg",
			"format": "threeByTwoSmallAt2X",
			"height": 400,
			"width": 600,
			"type": "image",
			"subtype": "photo",
			"caption": "The radio host Mark Levin with Donald J. Trump at a White House ceremony in 2019. Mr. Levin has scoffed at the notion that Mr. Trump had tried to overturn the election.",
			"copyright": "Leah Millis/Reuters"
		  },
		  {
			"url": "https://static01.nyt.com/images/2022/07/23/lens/23m3ediamemo-2/23m3ediamemo-2-thumbLarge.jpg",
			"format": "Large Thumbnail",
			"height": 150,
			"width": 150,
			"type": "image",
			"subtype": "photo",
			"caption": "The radio host Mark Levin with Donald J. Trump at a White House ceremony in 2019. Mr. Levin has scoffed at the notion that Mr. Trump had tried to overturn the election.",
			"copyright": "Leah Millis/Reuters"
		  }
		],
		"short_url": "https://nyti.ms/3cDTNbT"
	  },
	  {
		"section": "business",
		"subsection": "media",
		"title": "Ties Between Alex Jones and Radio Network Show Economics of Misinformation",
		"abstract": "The Genesis Communications Network built a lucrative business alongside the radio host, whose show the company has syndicated for more than two decades.",
		"url": "https://www.nytimes.com/2022/07/24/business/media/alex-jones-misinformation-genesis.html",
		"uri": "nyt://article/f923b124-9372-5b8d-94ed-dc83b6bb00fd",
		"byline": "By Tiffany Hsu",
		"item_type": "Article",
		"updated_date": "2022-07-26T14:06:51-04:00",
		"created_date": "2022-07-24T05:00:17-04:00",
		"published_date": "2022-07-24T05:00:17-04:00",
		"material_type_facet": "",
		"kicker": "",
		"des_facet": [
		  "Radio",
		  "Rumors and Misinformation",
		  "Suits and Litigation (Civil)",
		  "Newtown, Conn, Shooting (2012)",
		  "Conspiracy Theories",
		  "Gold",
		  "audio-neutral-informative"
		],
		"org_facet": [
		  "Infowars",
		  "Genesis Communications Network",
		  "Sandy Hook Elementary School (Newtown, Conn)"
		],
		"per_facet": [
		  "Jones, Alex (1974- )",
		  "Anderson, Ted (Radio Executive)"
		],
		"geo_facet": [
		  "Minnesota"
		],
		"multimedia": [
		  {
			"url": "https://static01.nyt.com/images/2022/07/25/multimedia/00GENESIS-01/00GENESIS-01-superJumbo.jpg",
			"format": "Super Jumbo",
			"height": 1366,
			"width": 2048,
			"type": "image",
			"subtype": "photo",
			"caption": "The radio host Alex Jones, above, and Ted Anderson, a gold and silver dealer, built a lucrative operation through Mr. Anderson’s radio network.",
			"copyright": "Victor J. Blue for The New York Times"
		  },
		  {
			"url": "https://static01.nyt.com/images/2022/07/25/multimedia/00GENESIS-01/00GENESIS-01-threeByTwoSmallAt2X.jpg",
			"format": "threeByTwoSmallAt2X",
			"height": 400,
			"width": 600,
			"type": "image",
			"subtype": "photo",
			"caption": "The radio host Alex Jones, above, and Ted Anderson, a gold and silver dealer, built a lucrative operation through Mr. Anderson’s radio network.",
			"copyright": "Victor J. Blue for The New York Times"
		  },
		  {
			"url": "https://static01.nyt.com/images/2022/07/25/multimedia/00GENESIS-01/00GENESIS-01-thumbLarge.jpg",
			"format": "Large Thumbnail",
			"height": 150,
			"width": 150,
			"type": "image",
			"subtype": "photo",
			"caption": "The radio host Alex Jones, above, and Ted Anderson, a gold and silver dealer, built a lucrative operation through Mr. Anderson’s radio network.",
			"copyright": "Victor J. Blue for The New York Times"
		  }
		],
		"short_url": "https://nyti.ms/3J96bx2"
	  },
	  {
		"section": "technology",
		"subsection": "",
		"title": "Why Big Tech Is Making a Big Play for Live Sports",
		"abstract": "Competing for rights to broadcast games from the N.F.L. and other leagues could be hard for broadcast and cable companies that “aren’t playing by the same financial rules.”",
		"url": "https://www.nytimes.com/2022/07/24/technology/sports-streaming-rights.html",
		"uri": "nyt://article/a0aa3c04-7e7b-5449-9b89-a33dae67c4c1",
		"byline": "By Tripp Mickle, Kevin Draper and Benjamin Mullin",
		"item_type": "Article",
		"updated_date": "2022-07-25T12:54:48-04:00",
		"created_date": "2022-07-24T05:00:13-04:00",
		"published_date": "2022-07-24T05:00:13-04:00",
		"material_type_facet": "",
		"kicker": "",
		"des_facet": [
		  "Computers and the Internet",
		  "Television",
		  "Athletics and Sports",
		  "Football",
		  "Video Recordings, Downloads and Streaming",
		  "Cable Television"
		],
		"org_facet": [
		  "Amazon.com Inc",
		  "Apple Inc",
		  "Apple TV Plus",
		  "Google Inc",
		  "YouTube.com",
		  "Formula One",
		  "National Football League",
		  "National Basketball Assn",
		  "DirecTV",
		  "ESPN"
		],
		"per_facet": [
		  
		],
		"geo_facet": [
		  
		],
		"multimedia": [
		  {
			"url": "https://static01.nyt.com/images/2022/07/20/multimedia/00sports-streaming-01/00sports-streaming-01-superJumbo.jpg",
			"format": "Super Jumbo",
			"height": 1365,
			"width": 2048,
			"type": "image",
			"subtype": "photo",
			"caption": "Tech companies, eager to expand their streaming audiences, increasingly see live sports as a way to do it.",
			"copyright": "Brandon Bell/Getty Images"
		  },
		  {
			"url": "https://static01.nyt.com/images/2022/07/20/multimedia/00sports-streaming-01/00sports-streaming-01-threeByTwoSmallAt2X.jpg",
			"format": "threeByTwoSmallAt2X",
			"height": 400,
			"width": 600,
			"type": "image",
			"subtype": "photo",
			"caption": "Tech companies, eager to expand their streaming audiences, increasingly see live sports as a way to do it.",
			"copyright": "Brandon Bell/Getty Images"
		  },
		  {
			"url": "https://static01.nyt.com/images/2022/07/20/multimedia/00sports-streaming-01/00sports-streaming-01-thumbLarge.jpg",
			"format": "Large Thumbnail",
			"height": 150,
			"width": 150,
			"type": "image",
			"subtype": "photo",
			"caption": "Tech companies, eager to expand their streaming audiences, increasingly see live sports as a way to do it.",
			"copyright": "Brandon Bell/Getty Images"
		  }
		],
		"short_url": "https://nyti.ms/3RUQayx"
	  }
	]
  }

export { getArticles, testCall }