//This script is to help identify the api response and extract data appropiately
// looking at he object 
// Extracting the first document's abstract
// const abstract = response.response.docs[0].abstract;
// console.log(abstract);

// // Extracting the first document's web URL
// const webUrl = response.response.docs[0].web_url;
// console.log(webUrl);

// // Extracting the first document's headline
// const headline = response.response.docs[0].headline.main;
// console.log(headline);

// // Extracting the keywords of the first document
// const keywords = response.response.docs[0].keywords;
// console.log(keywords);
// {
//     "status": "OK",
//     "copyright": "Copyright (c) 2024 The New York Times Company. All Rights Reserved.",
//     "response": {
//         "docs": [
//             {
//                 "abstract": "USAF Aerospace Defense Command repts Apollo 12 is 1 of 1,826 manmade objects currently in space",
//                 "web_url": "https://www.nytimes.com/1969/11/16/archives/apollo-is-object-no-4225.html",
//                 "snippet": "USAF Aerospace Defense Command repts Apollo 12 is 1 of 1,826 manmade objects currently in space",
//                 "lead_paragraph": "",
//                 "print_page": "66",
//                 "source": "The New York Times",
//                 "multimedia": [],
//                 "headline": {
//                     "main": "Apollo Is Object No. 4225",
//                     "kicker": null,
//                     "content_kicker": null,
//                     "print_headline": "Apollo Is Object No. 4225",
//                     "name": null,
//                     "seo": null,
//                     "sub": null
//                 },
//                 "keywords": [
//                     {
//                         "name": "subject",
//                         "value": "ASTRONAUTICS",
//                         "rank": 1,
//                         "major": "N"
//                     },
//                     {
//                         "name": "subject",
//                         "value": "ASTRONAUTICS",
//                         "rank": 2,
//                         "major": "N"
//                     },
//                     {
//                         "name": "subject",
//                         "value": "UNITED STATES PROJECTS",
//                         "rank": 3,
//                         "major": "N"
//                     },
//                     {
//                         "name": "subject",
//                         "value": "APOLLO 12",
//                         "rank": 4,
//                         "major": "N"
//                     }
//                 ],
//                 "pub_date": "1969-11-16T05:00:00+0000",
//                 "document_type": "article",
//                 "news_desk": "None",
//                 "section_name": "Archives",
//                 "byline": {
//                     "original": null,
//                     "person": [],
//                     "organization": null
//                 },
//                 "type_of_material": "Archives",
//                 "_id": "nyt://article/2636bb1d-2e08-59e9-aa44-c72a93fd2e57",
//                 "word_count": 0,
//                 "uri": "nyt://article/2636bb1d-2e08-59e9-aa44-c72a93fd2e57"
//             },
//             {
//                 "abstract": "Which came first — Orhan Pamuk’s museum or his new novel, “The Museum of Innocence”?",
//                 "web_url": "https://www.nytimes.com/2009/11/01/magazine/01Pamuk-t.html",
//                 "snippet": "Which came first — Orhan Pamuk’s museum or his new novel, “The Museum of Innocence”?",
//                 "lead_paragraph": " IN ISTANBUL,  one hot, sun-soaked day this past summer, the novelist Orhan Pamuk leaned back in his chair, a writerly throne in an overfull study, and looked out the window. He trained his eyes on the unblemished vista before him, where the Bosphorus, the Sea of Marmara and the Golden Horn run into one another and emerge as a perfect muddle of turquoise. Today, he announced, he was depressed. “I am a writer. I have books to write. What am I doing building a museum?” His voice rose in a crescendo to escape being drowned out by folkloric music coming from a passing cruise ship. A stuffed bird, perched to his left, peered down at the bookish debris below, giving the impression that the writer was addressing the handsome, ill-fated gull. ",
//                 "print_section": "MM",
//                 "print_page": "54",
//                 "source": "The New York Times",
//                 "multimedia": [
//                     {
//                         "rank": 0,
//                         "subtype": "wide",
//                         "caption": null,
//                         "credit": null,
//                         "type": "image",
//                         "url": "images/2009/11/01/magazine/01pamuk-span/thumbWide.jpg",
//                         "height": 126,
//                         "width": 190,
//                         "legacy": {
//                             "widewidth": 190,
//                             "wideheight": 126,
//                             "wide": "images/2009/11/01/magazine/01pamuk-span/thumbWide.jpg"
//                         },
//                         "subType": "wide",
//                         "crop_name": "thumbWide"
//                     },
//                     {
//                         "rank": 0,
//                         "subtype": "xlarge",
//                         "caption": null,
//                         "credit": null,
//                         "type": "image",
//                         "url": "images/2009/11/01/magazine/01pamuk-span/articleLarge.jpg",
//                         "height": 359,
//                         "width": 600,
//                         "legacy": {
//                             "xlarge": "images/2009/11/01/magazine/01pamuk-span/articleLarge.jpg",
//                             "xlargewidth": 600,
//                             "xlargeheight": 359
//                         },
//                         "subType": "xlarge",
//                         "crop_name": "articleLarge"
//                     },
//                     {
//                         "rank": 0,
//                         "subtype": "popup",
//                         "caption": null,
//                         "credit": null,
//                         "type": "image",
//                         "url": "images/2009/11/01/magazine/01pamuk-span/articleLarge.jpg",
//                         "height": 359,
//                         "width": 600,
//                         "legacy": {},
//                         "subType": "popup",
//                         "crop_name": "popup"
//                     },
//                     {
//                         "rank": 0,
//                         "subtype": "sfSpan",
//                         "caption": null,
//                         "credit": null,
//                         "type": "image",
//                         "url": "images/2009/11/01/magazine/01pamuk-span/sfSpan.jpg",
//                         "height": 267,
//                         "width": 395,
//                         "legacy": {},
//                         "subType": "sfSpan",
//                         "crop_name": "sfSpan"
//                     },
//                     {
//                         "rank": 0,
//                         "subtype": "thumbnail",
//                         "caption": null,
//                         "credit": null,
//                         "type": "image",
//                         "url": "images/2009/11/01/magazine/01pamuk-span/thumbStandard.jpg",
//                         "height": 75,
//                         "width": 75,
//                         "legacy": {
//                             "thumbnail": "images/2009/11/01/magazine/01pamuk-span/thumbStandard.jpg",
//                             "thumbnailwidth": 75,
//                             "thumbnailheight": 75
//                         },
//                         "subType": "thumbnail",
//                         "crop_name": "thumbStandard"
//                     }
//                 ],
//                 "headline": {
//                     "main": "The Objects of the Exercise",
//                     "kicker": null,
//                     "content_kicker": null,
//                     "print_headline": "The Objects of the Excercise",
//                     "name": null,
//                     "seo": null,
//                     "sub": null
//                 },
//                 "keywords": [
//                     {
//                         "name": "subject",
//                         "value": "Books and Literature",
//                         "rank": 1,
//                         "major": "N"
//                     },
//                     {
//                         "name": "persons",
//                         "value": "Pamuk, Orhan",
//                         "rank": 2,
//                         "major": "N"
//                     },
//                     {
//                         "name": "subject",
//                         "value": "Museums",
//                         "rank": 3,
//                         "major": "N"
//                     },
//                     {
//                         "name": "glocations",
//                         "value": "Istanbul (Turkey)",
//                         "rank": 4,
//                         "major": "N"
//                     }
//                 ],
//                 "pub_date": "2009-10-29T16:23:42+0000",
//                 "document_type": "article",
//                 "news_desk": "Magazine",
//                 "section_name": "Magazine",
//                 "byline": {
//                     "original": "Text by NEGAR AZIMI; Photographs by OLAF BLECKER",
//                     "person": [
//                         {
//                             "firstname": "Text",
//                             "middlename": "Negar",
//                             "lastname": "AZIMI",
//                             "qualifier": null,
//                             "title": null,
//                             "role": "reported",
//                             "organization": "",
//                             "rank": 1
//                         }
//                     ],
//                     "organization": null
//                 },
//                 "type_of_material": "News",
//                 "_id": "nyt://article/0dbe34ed-a37f-5d90-91c8-d9ec3064a08b",
//                 "word_count": 843,
//                 "uri": "nyt://article/0dbe34ed-a37f-5d90-91c8-d9ec3064a08b"
//             },
//             {
//                 "abstract": "Swiss pilot repts flaming cylinder fell near Alexandria, Egypt, Dec 1; Prof Belousov repts interim rept on data obtained from satellite will be pub in Dec",
//                 "web_url": "https://www.nytimes.com/1957/12/11/archives/flaming-object-reported.html",
//                 "snippet": "Swiss pilot repts flaming cylinder fell near Alexandria, Egypt, Dec 1; Prof Belousov repts interim rept on data obtained from satellite will be pub in Dec",
//                 "lead_paragraph": "",
//                 "print_page": "15",
//                 "source": "The New York Times",
//                 "multimedia": [],
//                 "headline": {
//                     "main": "Flaming Object Reported",
//                     "kicker": null,
//                     "content_kicker": null,
//                     "print_headline": "Flaming Object Reported",
//                     "name": null,
//                     "seo": null,
//                     "sub": null
//                 },
//                 "keywords": [
//                     {
//                         "name": "subject",
//                         "value": "ASTRONAUTICS",
//                         "rank": 1,
//                         "major": "N"
//                     },
//                     {
//                         "name": "subject",
//                         "value": "1ST D 1 PAR",
//                         "rank": 2,
//                         "major": "N"
//                     },
//                     {
//                         "name": "subject",
//                         "value": "1ST USSR EARTH SATELLITE - DETAILS ON FLIGHT, DATA OBTAINED - OTHER SCIENTIFIC DATA",
//                         "rank": 3,
//                         "major": "N"
//                     }
//                 ],
//                 "pub_date": "1957-12-11T05:00:00+0000",
//                 "document_type": "article",
//                 "news_desk": "None",
//                 "section_name": "Archives",
//                 "byline": {
//                     "original": "Special to The New York Times",
//                     "person": [
//                         {
//                             "firstname": null,
//                             "middlename": null,
//                             "lastname": null,
//                             "qualifier": null,
//                             "title": null,
//                             "role": "reported",
//                             "organization": "",
//                             "rank": 1
//                         }
//                     ],
//                     "organization": null
//                 },
//                 "type_of_material": "Archives",
//                 "_id": "nyt://article/7d1fd2b4-b0f4-5c1b-adda-9f1361497828",
//                 "word_count": 0,
//                 "uri": "nyt://article/7d1fd2b4-b0f4-5c1b-adda-9f1361497828"
//             },
//             {
//                 "abstract": "SAN JUAN, P.R., March 9 (UP)--A fiery object hurtled toward a Pan American Airways plane high over the Atlantic Ocean today. The pilot said the object had forced him to climb steeply to avoid being hit.  ",
//                 "web_url": "https://www.nytimes.com/1957/03/10/archives/airliner-avoids-flaming-object-pilot-sends-plane-into-steep-climb.html",
//                 "snippet": "",
//                 "lead_paragraph": "",
//                 "print_page": "55",
//                 "source": "The New York Times",
//                 "multimedia": [],
//                 "headline": {
//                     "main": "AIRLINER AVOIDS FLAMING OBJECT; Pilot Sends Plane Into Steep Climb Over Atlantic--No Jets in Area at Time Seen By Other Pilots Captain Tells of Object A Runaway Missile? Object Seen Over Texas",
//                     "kicker": "1",
//                     "content_kicker": null,
//                     "print_headline": "AIRLINER AVOIDS FLAMING OBJECT; Pilot Sends Plane Into Steep Climb Over Atlantic--No Jets in Area at Time Seen By Other Pilots Captain Tells of Object A Runaway Missile? Object Seen Over Texas",
//                     "name": null,
//                     "seo": null,
//                     "sub": null
//                 },
//                 "keywords": [],
//                 "pub_date": "1957-03-10T05:00:00+0000",
//                 "document_type": "article",
//                 "news_desk": "None",
//                 "section_name": "Archives",
//                 "byline": {
//                     "original": null,
//                     "person": [],
//                     "organization": null
//                 },
//                 "type_of_material": "Archives",
//                 "_id": "nyt://article/1bd3bf94-591b-5a8b-9d69-b6c72bbaf6aa",
//                 "word_count": 0,
//                 "uri": "nyt://article/1bd3bf94-591b-5a8b-9d69-b6c72bbaf6aa"
//             },
//             {
//                 "abstract": "W L Laurence on objects described at conf; objects have very short lifetime (1 million yrs), are brightest, most massive and largest sighted so far; 1 explanation of their luminosity is theory of gravitational collapse, intense gravitational fields in distant parts of universe which cause objects to collapse of own mass; Fowler says it is not known whether objects are individual or part of a galaxy",
//                 "web_url": "https://www.nytimes.com/1963/12/22/archives/celestial-discovery-quasistellar-objects-are-called-brightest-in.html",
//                 "snippet": "W L Laurence on objects described at conf; objects have very short lifetime (1 million yrs), are brightest, most massive and largest sighted so far; 1 explanation of their luminosity is theory of gravitational collapse, intense gravitational field...",
//                 "lead_paragraph": "",
//                 "print_section": "E",
//                 "print_page": "8",
//                 "source": "The New York Times",
//                 "multimedia": [],
//                 "headline": {
//                     "main": "CELESTIAL DISCOVERY; 'Quasi-Stellar' Objects Are Called Brightest in the Universe Massive Objects Few Discovered Spectrum Revalation",
//                     "kicker": null,
//                     "content_kicker": null,
//                     "print_headline": "CELESTIAL DISCOVERY; 'Quasi-Stellar' Objects Are Called Brightest in the Universe Massive Objects Few Discovered Spectrum Revalation",
//                     "name": null,
//                     "seo": null,
//                     "sub": null
//                 },
//                 "keywords": [
//                     {
//                         "name": "subject",
//                         "value": "ASTRONAUTICS",
//                         "rank": 1,
//                         "major": "N"
//                     },
//                     {
//                         "name": "subject",
//                         "value": "GENERAL RESEARCH AND SPECULATION",
//                         "rank": 2,
//                         "major": "N"
//                     },
//                     {
//                         "name": "subject",
//                         "value": "SPACE AND UPPER ATMOSPHERE",
//                         "rank": 3,
//                         "major": "N"
//                     },
//                     {
//                         "name": "subject",
//                         "value": "MISCELLANEOUS SECTION",
//                         "rank": 4,
//                         "major": "N"
//                     }
//                 ],
//                 "pub_date": "1963-12-22T05:00:00+0000",
//                 "document_type": "article",
//                 "news_desk": "None",
//                 "section_name": "Archives",
//                 "byline": {
//                     "original": "By William L. Laurence",
//                     "person": [
//                         {
//                             "firstname": "William",
//                             "middlename": "L.",
//                             "lastname": "Laurence",
//                             "qualifier": null,
//                             "title": null,
//                             "role": "reported",
//                             "organization": "",
//                             "rank": 1
//                         }
//                     ],
//                     "organization": null
//                 },
//                 "type_of_material": "Archives",
//                 "_id": "nyt://article/5a35eb7b-705c-5168-ba6e-93c2bdf50acc",
//                 "word_count": 0,
//                 "uri": "nyt://article/5a35eb7b-705c-5168-ba6e-93c2bdf50acc"
//             },
//             {
//                 "abstract": "In this lesson, students will create a museum exhibition that explores the changes in usage and design of simple tools and household utensils.",
//                 "web_url": "https://learning.blogs.nytimes.com/2003/03/06/everyday-objects/",
//                 "snippet": "In this lesson, students will create a museum exhibition that explores the changes in usage and design of simple tools and household utensils.",
//                 "lead_paragraph": "Note: This lesson was originally published on an older version of The Learning Network; the link to the related Times article will take you to a page on the old site.",
//                 "source": "The New York Times",
//                 "multimedia": [],
//                 "headline": {
//                     "main": "Everyday Objects",
//                     "kicker": "The Learning Network",
//                     "content_kicker": null,
//                     "print_headline": null,
//                     "name": null,
//                     "seo": null,
//                     "sub": null
//                 },
//                 "keywords": [],
//                 "pub_date": "2003-03-06T07:24:00+0000",
//                 "document_type": "article",
//                 "news_desk": "",
//                 "section_name": "Education",
//                 "byline": {
//                     "original": "By Clayton DeKorne and Yasmin Chin Eisenhauer",
//                     "person": [
//                         {
//                             "firstname": "Clayton",
//                             "middlename": null,
//                             "lastname": "DeKorne",
//                             "qualifier": null,
//                             "title": null,
//                             "role": "reported",
//                             "organization": "",
//                             "rank": 1
//                         },
//                         {
//                             "firstname": "Yasmin",
//                             "middlename": "Chin",
//                             "lastname": "Eisenhauer",
//                             "qualifier": null,
//                             "title": null,
//                             "role": "reported",
//                             "organization": "",
//                             "rank": 2
//                         }
//                     ],
//                     "organization": null
//                 },
//                 "type_of_material": "News",
//                 "_id": "nyt://article/2749de63-bbbf-59b1-88f9-ace97e99934e",
//                 "word_count": 1899,
//                 "uri": "nyt://article/2749de63-bbbf-59b1-88f9-ace97e99934e"
//             },
//             {
//                 "abstract": "In this lesson, students consider the importance of individual artifacts in memorializing important historic events. Through creating their own memorials to significant events in American or global history, students learn how objects can be transformed into tools for preserving the memory of people, places and events.",
//                 "web_url": "https://learning.blogs.nytimes.com/2002/05/31/objects-of-memory/",
//                 "snippet": "In this lesson, students consider the importance of individual artifacts in memorializing important historic events. Through creating their own memorials to significant events in American or global history, students learn how objects can be transf...",
//                 "lead_paragraph": "Note: This lesson was originally published on an older version of The Learning Network; the link to the related Times article will take you to a page on the old site.",
//                 "source": "The New York Times",
//                 "multimedia": [],
//                 "headline": {
//                     "main": "Objects of Memory",
//                     "kicker": "The Learning Network",
//                     "content_kicker": null,
//                     "print_headline": null,
//                     "name": null,
//                     "seo": null,
//                     "sub": null
//                 },
//                 "keywords": [],
//                 "pub_date": "2002-05-31T05:51:00+0000",
//                 "document_type": "article",
//                 "news_desk": "",
//                 "section_name": "Education",
//                 "byline": {
//                     "original": "By Rachel Klein and Javaid Khan",
//                     "person": [
//                         {
//                             "firstname": "Rachel",
//                             "middlename": null,
//                             "lastname": "Klein",
//                             "qualifier": null,
//                             "title": null,
//                             "role": "reported",
//                             "organization": "",
//                             "rank": 1
//                         },
//                         {
//                             "firstname": "Javaid",
//                             "middlename": null,
//                             "lastname": "Khan",
//                             "qualifier": null,
//                             "title": null,
//                             "role": "reported",
//                             "organization": "",
//                             "rank": 2
//                         }
//                     ],
//                     "organization": null
//                 },
//                 "type_of_material": "News",
//                 "_id": "nyt://article/4412c493-ead5-57f4-9488-52e776603cc4",
//                 "word_count": 2387,
//                 "uri": "nyt://article/4412c493-ead5-57f4-9488-52e776603cc4"
//             },
//             {
//                 "abstract": "",
//                 "web_url": "https://www.nytimes.com/1968/06/12/archives/object-of-resentment.html",
//                 "snippet": "",
//                 "lead_paragraph": "",
//                 "print_page": "46",
//                 "source": "The New York Times",
//                 "multimedia": [],
//                 "headline": {
//                     "main": "Object of Resentment",
//                     "kicker": "1",
//                     "content_kicker": null,
//                     "print_headline": "Object of Resentment",
//                     "name": null,
//                     "seo": null,
//                     "sub": null
//                 },
//                 "keywords": [],
//                 "pub_date": "1968-06-12T05:00:00+0000",
//                 "document_type": "article",
//                 "news_desk": "None",
//                 "section_name": "Archives",
//                 "byline": {
//                     "original": "ARTHUR E. ALBRECHT",
//                     "person": [
//                         {
//                             "firstname": "Arthur",
//                             "middlename": "E.",
//                             "lastname": "ALBRECHT",
//                             "qualifier": null,
//                             "title": null,
//                             "role": "reported",
//                             "organization": "",
//                             "rank": 1
//                         }
//                     ],
//                     "organization": null
//                 },
//                 "type_of_material": "Archives",
//                 "_id": "nyt://article/8abc3e64-783c-5e05-a77a-96506e313ddd",
//                 "word_count": 0,
//                 "uri": "nyt://article/8abc3e64-783c-5e05-a77a-96506e313ddd"
//             },
//             {
//                 "abstract": "over 10,000 soft coal miners stage wildcat strike 1 wk before contract expiration date; UMW orders immediate return",
//                 "web_url": "https://www.nytimes.com/1968/10/02/archives/coal-miners-strike-but-leaders-object.html",
//                 "snippet": "over 10,000 soft coal miners stage wildcat strike 1 wk before contract expiration date; UMW orders immediate return",
//                 "lead_paragraph": "",
//                 "print_page": "44",
//                 "source": "The New York Times",
//                 "multimedia": [],
//                 "headline": {
//                     "main": "COAL MINERS STRIKE, BUT LEADERS OBJECT",
//                     "kicker": null,
//                     "content_kicker": null,
//                     "print_headline": "COAL MINERS STRIKE, BUT LEADERS OBJECT",
//                     "name": null,
//                     "seo": null,
//                     "sub": null
//                 },
//                 "keywords": [
//                     {
//                         "name": "glocations",
//                         "value": "United States",
//                         "rank": 1,
//                         "major": "N"
//                     },
//                     {
//                         "name": "subject",
//                         "value": "Coal",
//                         "rank": 2,
//                         "major": "N"
//                     },
//                     {
//                         "name": "subject",
//                         "value": "LABOR",
//                         "rank": 3,
//                         "major": "N"
//                     }
//                 ],
//                 "pub_date": "1968-10-02T05:00:00+0000",
//                 "document_type": "article",
//                 "news_desk": "None",
//                 "section_name": "Archives",
//                 "byline": {
//                     "original": null,
//                     "person": [],
//                     "organization": null
//                 },
//                 "type_of_material": "Archives",
//                 "_id": "nyt://article/cd109ea8-fb7f-5023-93c4-d6f74f1ebd40",
//                 "word_count": 0,
//                 "uri": "nyt://article/cd109ea8-fb7f-5023-93c4-d6f74f1ebd40"
//             },
//             {
//                 "abstract": "IOWA CITY, Iowa, July 27 (AP) -- An astronomer at the State University of Iowa reported today that a spark-shooting object seen in the sky by southeast Iowans \"most likely was the planet Jupiter.\"  ",
//                 "web_url": "https://www.nytimes.com/1952/07/28/archives/object-over-iowa-called-planet.html",
//                 "snippet": "",
//                 "lead_paragraph": "",
//                 "print_page": "5",
//                 "source": "The New York Times",
//                 "multimedia": [],
//                 "headline": {
//                     "main": "Object Over Iowa Called Planet",
//                     "kicker": "1",
//                     "content_kicker": null,
//                     "print_headline": "Object Over Iowa Called Planet",
//                     "name": null,
//                     "seo": null,
//                     "sub": null
//                 },
//                 "keywords": [],
//                 "pub_date": "1952-07-28T05:00:00+0000",
//                 "document_type": "article",
//                 "news_desk": "None",
//                 "section_name": "Archives",
//                 "byline": {
//                     "original": null,
//                     "person": [],
//                     "organization": null
//                 },
//                 "type_of_material": "Archives",
//                 "_id": "nyt://article/e531d547-fcbd-51a9-81f7-1c1744742ddb",
//                 "word_count": 0,
//                 "uri": "nyt://article/e531d547-fcbd-51a9-81f7-1c1744742ddb"
//             }
//         ],
//         "meta": {
//             "hits": 168382,
//             "offset": 0,
//             "time": 120
//         }
//     }
// }