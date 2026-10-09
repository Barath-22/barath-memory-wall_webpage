// Edit the colleague names, one-line roles, categories and handwritten memories here.
// The website supports multiple categories per person and uses initials (no photos).
const SITE_CONFIG = { farewellEmail: "barath.likewize@gmail.com" };
const COLLEAGUES = [
  {
    "name": "Abhinav Srivastava",
    "role": "The HCL guy who supports us outside the organisation",
    "categories": [
      "Occasional Connections"
    ],
    "memory": "The HCL guy who supports us outside the organisation, had very less interation but it was only regarding or client \"Apple\""
  },
  {
    "name": "Akhilesh Jatav",
    "role": "It's always the fight between the RMAPortalDB",
    "categories": [
      "Occasional Connections"
    ],
    "memory": "It's always the fight between the RMAPortalDB, BI and Apple"
  },
  {
    "name": "Anand Viswanathan",
    "role": "A sudden fitness freak",
    "categories": [
      "Graduate Trainees"
    ],
    "memory": "A sudden fitness freak, Always pushes things to others plate"
  },
  {
    "name": "Angelveena Don Bosco",
    "role": "Quick and Fast Learner",
    "categories": [
      "My Team",
      "Graduate Trainees"
    ],
    "memory": "Quick and Fast Learner, occasional yapper and very professional when it comes to email drafting and much more to say - Please do not hesitate to give me a call anytime needed."
  },
  {
    "name": "Aravindhan Srinivasan",
    "role": "Always asks me 'Unakennapa Jolly ah irruka' Can anyone save him from GTP…",
    "categories": [
      "Neighbor Team"
    ],
    "memory": "Always asks me 'Unakennapa Jolly ah irruka' Can anyone save him from GTP project"
  },
  {
    "name": "Arockiaraj Innasi",
    "role": "A gentle man always cares for others",
    "categories": [
      "Neighbor Team"
    ],
    "memory": "A gentle man always cares for others - Dad of the group and very calm in answering our questions - I've never heard him shout or get angry"
  },
  {
    "name": "Ashmitha Sekar",
    "role": "I wish everyone gets/finds a manager like her",
    "categories": [
      "Mentors",
      "Leadership",
      "Cross-Team"
    ],
    "memory": "I wish everyone gets/finds a manager like her, Very Kind, Calm and composed - Always cares for others and their future even apart from work. Prioritizes humanity and need a separate webpage to describe her qualities and memories with her - And I'll never forget our favourite Kulfi"
  },
  {
    "name": "Avtar Singh",
    "role": "Occasional Talks on RLS and Apple",
    "categories": [
      "Occasional Connections"
    ],
    "memory": "Occasional Talks on RLS and Apple"
  },
  {
    "name": "Tom Arnot",
    "role": "It's always an High Priority request and the RCA for the data error… He's…",
    "categories": [
      "Leadership",
      "Cross-Team"
    ],
    "memory": "It's always an High Priority request and the RCA for the data error… He's high on Data, plays with TBs of data daily"
  },
  {
    "name": "Balaji Murugan Manian",
    "role": "My Last manager in my First company had many memories and learnings",
    "categories": [
      "Managers",
      "My Team",
      "Leadership"
    ],
    "memory": "My Last manager in my First company had many memories and learnings, finally hope I'm free from the 2PM Meetings"
  },
  {
    "name": "Baskar Govindaraj",
    "role": "The JDE CNC guy",
    "categories": [
      "Neighbor Team"
    ],
    "memory": "The JDE CNC guy, had very much interactions in recent trips/outings - Sudden health conscious"
  },
  {
    "name": "Benisheela Chelliah",
    "role": "Not much of an interaction",
    "categories": [
      "Cross-Team"
    ],
    "memory": "Not much of an interaction, Only shows up when there's a team outing/lunch as she doesn't have access to our office as she is an HCL EXT resource"
  },
  {
    "name": "Bharath Sekar",
    "role": "Contact him for any Contractor related queies and has a privelege of not…",
    "categories": [
      "Neighbor Team"
    ],
    "memory": "Contact him for any Contractor related queies and has a privelege of not showing up to office"
  },
  {
    "name": "Gokul Balasubramani",
    "role": "Met him recently",
    "categories": [
      "New Connections",
      "Neighbor Team"
    ],
    "memory": "Met him recently, had many breaks and he gives me company - A Bro Code"
  },
  {
    "name": "Harish Kumar Varadhan",
    "role": "The OG Madurai Kaaran in HITS team",
    "categories": [
      "Cross-Team"
    ],
    "memory": "The OG Madurai Kaaran in HITS team, we'll meet soon in a special occasion"
  },
  {
    "name": "Kancharla Prakash",
    "role": "Met him recently",
    "categories": [
      "New Connections"
    ],
    "memory": "Met him recently, good in dance that too when it comes to parties and trips"
  },
  {
    "name": "Keerthana Suresh Babu",
    "role": "The only Graduate Trainee left in HITS team",
    "categories": [
      "Cross-Team",
      "Graduate Trainees"
    ],
    "memory": "The only Graduate Trainee left in HITS team, Seen her growth gradually increasing - Hope she achives whatever she deserves"
  },
  {
    "name": "Kiran Kautilya",
    "role": "A perfect leader I've ever seen",
    "categories": [
      "Leadership",
      "Mentors",
      "Managers",
      "My Team"
    ],
    "memory": "A perfect leader I've ever seen - Thought Application Support will be diluted once Gopi M left the organization - He filled Gopi's shoes and handled it very well - Asks/hears everyone's suggestion/inputs solves the problem easily… He maintains a tracker and always stays on track"
  },
  {
    "name": "Kumaraguru Arumugam",
    "role": "Very limited interaction as He's in the APAC shift",
    "categories": [
      "Cross-Team"
    ],
    "memory": "Very limited interaction as He's in the APAC shift - Hope the Order, Grading, Disposition report brings my memories in."
  },
  {
    "name": "Lakshmanan Sudhakar",
    "role": "A JDE Pro player",
    "categories": [
      "Cross-Team"
    ],
    "memory": "A JDE Pro player, had a chance to work with him in JDE as well Handles Incidents and requestes effectively always responsible and enthusiastic… An extreme extrovert (Double the times as me) has many hidden talent and an entertainer"
  },
  {
    "name": "Lokesh Murugan",
    "role": "We have many similarities and a we both think in a similar way",
    "categories": [
      "My Team",
      "New Connections"
    ],
    "memory": "We have many similarities and a we both think in a similar way.. A problem solver, motivator and much more hidden talents and cooks well - An All Rounder"
  },
  {
    "name": "Mahesh Nutalapati",
    "role": "Has strong techincal and business knowledge",
    "categories": [
      "Cross-Team",
      "Mentors"
    ],
    "memory": "Has strong techincal and business knowledge, motivates us often - Settled in UK"
  },
  {
    "name": "Manigandan Srinivasan",
    "role": "Handles problems effectively",
    "categories": [
      "New Connections",
      "Leadership"
    ],
    "memory": "Handles problems effectively, gives advises and motivations also company for lunch breaks, Thanks for the recent tin-box collectible I'll save it as our memory"
  },
  {
    "name": "Manikandan Thirumalai",
    "role": "Him and APAC HITS are inseparable",
    "categories": [
      "Cross-Team"
    ],
    "memory": "Him and APAC HITS are inseparable, Has a total different peaceful life outside work - Trip planner/organiser and who initiates them while other just talk"
  },
  {
    "name": "Manish Anand",
    "role": "A recent billionare",
    "categories": [
      "Graduate Trainees",
      "Neighbor Team"
    ],
    "memory": "A recent billionare, A night owl - Always late from Campus to Corporate - Neighbor class guy in college"
  },
  {
    "name": "Manosri Murugesan",
    "role": "Didn't get a chance to interact much",
    "categories": [
      "Familiar Faces",
      "Neighbor Team"
    ],
    "memory": "Didn't get a chance to interact much - Except the HITS report, Keep up the pace and she's a quick learner"
  },
  {
    "name": "Meena Sadayappan",
    "role": "Strong JDE skills",
    "categories": [
      "Cross-Team",
      "Mentors"
    ],
    "memory": "Strong JDE skills, Always available - Especially I'll miss you during the Janmastamis, Please Don't worry about the snacks I'll try bringing you the snacks and make sure it reaches you even if I leave today."
  },
  {
    "name": "Mohamed Saleem",
    "role": "Recent connection",
    "categories": [
      "New Connections",
      "Neighbor Team"
    ],
    "memory": "Recent connection, An occasional yapper known for his humour sense"
  },
  {
    "name": "Paulpandi Murugesan",
    "role": "No one knows his age",
    "categories": [
      "Cross-Team"
    ],
    "memory": "No one knows his age, He's still a Graduate Trainee even all of us being promoted - Always young, Calls us 'Dood' and ends every conversations as 'Cool Dood'"
  },
  {
    "name": "Periasamy Thangavel",
    "role": "I've known him since my Graduate Trainee days… All those JEF/TEF Dashboard…",
    "categories": [
      "Cross-Team"
    ],
    "memory": "I've known him since my Graduate Trainee days… All those JEF/TEF Dashboard refreshed RED turning into GREEN and all the chaos. Hope you stay with your work twin 'Saravanan Kumaresalingam'"
  },
  {
    "name": "Poorna Praghya",
    "role": "My apologies for not bringing Krishna Jayanthi snacks will stack up to the…",
    "categories": [
      "Neighbor Team"
    ],
    "memory": "My apologies for not bringing Krishna Jayanthi snacks will stack up to the moon and back… Will bring them even if I leave the organization today, A great trip advisor and planner - Please do include me in the upcoming trips as well."
  },
  {
    "name": "Prakash Purushothaman",
    "role": "Most of the conversations were related to Apple",
    "categories": [
      "Graduate Trainees",
      "Cross-Team"
    ],
    "memory": "Most of the conversations were related to Apple, Known for his over-confident answers. A guy with an Iconic Hairstyle which covers till nose"
  },
  {
    "name": "Premalatha Loganathan",
    "role": "Not much of an interaction",
    "categories": [
      "Cross-Team"
    ],
    "memory": "Not much of an interaction, but only on the reconciliation and inventory checks"
  },
  {
    "name": "Ramesh Ramasamy",
    "role": "Not much of an interaction",
    "categories": [
      "Neighbor Team"
    ],
    "memory": "Not much of an interaction, but only on the HITS vs BI checks"
  },
  {
    "name": "Rijuta Ganguly",
    "role": "Got to know her recently very much interested in learning stuffs",
    "categories": [
      "New Connections",
      "Neighbor Team"
    ],
    "memory": "Got to know her recently very much interested in learning stuffs, No one can disturb her when she's focusing into something important - I'll miss your authentic 'Mishri' mixed dishes (Even the spicy ones)"
  },
  {
    "name": "Sankara Narayanan Pv",
    "role": "A great leader and a manager but still calls me 'Thambi'",
    "categories": [
      "Leadership",
      "Mentors",
      "Managers",
      "My Team"
    ],
    "memory": "A great leader and a manager but still calls me 'Thambi', Always polite, Calm and composed - He is also a great mentor and a motivator."
  },
  {
    "name": "Saravanan Kumaresalingam",
    "role": "Trying to copy paste the same Memories as same as 'Periasamy Thangavel' as…",
    "categories": [
      "Cross-Team"
    ],
    "memory": "Trying to copy paste the same Memories as same as 'Periasamy Thangavel' as we three shared most of our memories as same. Hope you stay with your work twin 'Periasamy Thangavel' too…."
  },
  {
    "name": "Sasikanth Kesani",
    "role": "Works alone in the office",
    "categories": [
      "Neighbor Team"
    ],
    "memory": "The guy who works alone in the office, He's so goated that he has a separate team which consists of only him - Very polite and respectful hardly speaks 2 words in a day."
  },
  {
    "name": "Sathyanarayanan Vijayan",
    "role": "A quick problem solver",
    "categories": [
      "Leadership"
    ],
    "memory": "A quick problem solver, groups every teams and looks for a solution then and there… Do not forget our joke 'Pona vellikelama enna pannitu irndhen'"
  },
  {
    "name": "Senthil Balasubramaniyam",
    "role": "Thanks for speaking up for me infront of all the Senior Stakeholders even…",
    "categories": [
      "Leadership",
      "Cross-Team"
    ],
    "memory": "Thanks for speaking up for me infront of all the Senior Stakeholders even if we weren't sure on the solutions, A mandatory attendance when there's an office Trip or Resort outing."
  },
  {
    "name": "Senthilraja Ganesan",
    "role": "Occasional Talks",
    "categories": [
      "Neighbor Team"
    ],
    "memory": "Occasional Talks, Meet and Greets and some GTP checks"
  },
  {
    "name": "Shakeel Ahmed Yk",
    "role": "My first manager in the Campus to Corporate transition",
    "categories": [
      "Managers",
      "My Team",
      "Leadership"
    ],
    "memory": "My first manager in the Campus to Corporate transition, He was also a panelist in my Campus Interview - Spends time and explains things in detail so that we'll understand - Went on circles to different teams and came back to him at last reporting to him - A great mentor and takes care all the communications when we're struck on a priority calls."
  },
  {
    "name": "Sharfuddin Mohamed",
    "role": "Not much of an interaction",
    "categories": [
      "Familiar Faces",
      "Neighbor Team"
    ],
    "memory": "Not much of an interaction - But came to know that you're good in cricket, Keep up the pace in your cricket endeavours."
  },
  {
    "name": "Shyam Bhandaru",
    "role": "Not much of an interaction",
    "categories": [
      "Neighbor Team"
    ],
    "memory": "Not much of an interaction - But always explain things which is even out of our scope, like the recent Power Automate and Power Apps flow - Architecture etc…"
  },
  {
    "name": "Sireesh Chowdary Meka",
    "role": "Not much of an interaction",
    "categories": [
      "Neighbor Team"
    ],
    "memory": "Not much of an interaction - But plays in SharePoint and Power Automate and explains things, Only one in the team and he has a separate manager."
  },
  {
    "name": "Srikanth Rai G",
    "role": "Known him since my college as he was adjacent to my class",
    "categories": [
      "Graduate Trainees",
      "Cross-Team"
    ],
    "memory": "Known him since my college as he was adjacent to my class, Gets tired when he hears the word 'Apple' - Got many appreciations in recent times, A great entertainer/dancer etc…"
  },
  {
    "name": "Subash Vemb",
    "role": "Fortunately I wasn't on the APAC shift where there will be fights for the…",
    "categories": [
      "Occasional Connections",
      "Cross-Team"
    ],
    "memory": "Fortunately I wasn't on the APAC shift where there will be fights for the RB Restart activity in the early mornings and mid nights, Interacted in the recent trip which was a memorable one."
  },
  {
    "name": "SubashChandra Bose",
    "role": "Captain Cool",
    "categories": [
      "Leadership",
      "Cross-Team"
    ],
    "memory": "Captain Cool, No matter how many incidents accumulate - Talks to me like a friend who met us long time back. Loaded with technical skills that he can host a website on his own - Makes full utilization of Claude/GPT credits/tokens until it runs out"
  },
  {
    "name": "Sundarapandian Athimoolam",
    "role": "Always struck in Triaging",
    "categories": [
      "Cross-Team"
    ],
    "memory": "Always struck in Triaging, Flexes his Headphone, Vivo X300 and other gadgets."
  },
  {
    "name": "SunilKumar Soundararajan",
    "role": "Not much of an interaction but",
    "categories": [
      "Neighbor Team"
    ],
    "memory": "Not much of an interaction but, Gives his best life adivces in the Outings/Trips - Ask him to include in upcoming Trips"
  },
  {
    "name": "Suriyakanth Radhakrishnan",
    "role": "Travels to Coimbatore every weekends to meet his family",
    "categories": [
      "Cross-Team"
    ],
    "memory": "The guy who travels to Coimbatore every weekends to meet his family - He'll be the happiest person alive if they open a Center of Excellence in Coimbatore - Always reachable for HITS vs BI count checks."
  },
  {
    "name": "Tharun Raghav Vijayakandeeban",
    "role": "He has been a great company in every Trips",
    "categories": [
      "Graduate Trainees",
      "Cross-Team"
    ],
    "memory": "He has been a great company in every Trips, has been always with me - Gives BI Reporting requirements off the record so that I'll check for the feasibility first. You'll definetly be missed in any of my trips in my new organaziation."
  },
  {
    "name": "Ujwal Binnal",
    "role": "Wanderlust… travel a lot",
    "categories": [
      "New Connections",
      "Neighbor Team"
    ],
    "memory": "Wanderlust… travel a lot, Had very less interaction but a meaning full life lessons."
  },
  {
    "name": "Victor Paul Raj",
    "role": "Limited interaction",
    "categories": [
      "Occasional Connections",
      "Neighbor Team"
    ],
    "memory": "Limited interaction, But meets and greets in office bay."
  },
  {
    "name": "Vignesh Anandaraj",
    "role": "Technically Strong",
    "categories": [
      "My Team"
    ],
    "memory": "Technically Strong, Gives life advices helps anytime, anywhere"
  },
  {
    "name": "Vijaykumar Murugan",
    "role": "Limited interaction",
    "categories": [
      "New Connections",
      "Neighbor Team"
    ],
    "memory": "Limited interaction, But gives advices and guidance"
  },
  {
    "name": "Vyram Bharanitharan",
    "role": "Break Partner",
    "categories": [
      "Cross-Team"
    ],
    "memory": "Break Partner, Has more connections outside organization - Coimbatore Maapillai - Bro Code"
  },
  {
    "name": "Wilson Francis",
    "role": "Gives life advices",
    "categories": [
      "Cross-Team"
    ],
    "memory": "Gives life advices, Happy that I was a part of JDE team for sometime"
  },
  {
    "name": "Divya Venkataraman",
    "role": "A great mentor",
    "categories": [
      "My Team",
      "Mentors"
    ],
    "memory": "A great mentor, I always wanted to be a part of her team - Gives technical solutions anywhere/anytime, Gives a easily reachable Senior and a Manager vibes all time."
  },
  {
    "name": "Dinesh Kumar Kothandaraman",
    "role": "Less interactions but a meaningful ones",
    "categories": [
      "New Connections",
      "Mentors"
    ],
    "memory": "Less interactions but a meaningful ones, Technically strong in Power BI - Will call you for any doubts - The farewell talk about me was nice. Thinks logically."
  },
  {
    "name": "Nikitha Velayudhan Sujatha",
    "role": "More of a partner for breaks",
    "categories": [
      "My Team",
      "Mentors"
    ],
    "memory": "More of a partner for breaks, The times you came by cab at 1-9 PM shift were our best interactions - Outside the work advices and a great listener without any judgements - Easy go for any SSRS doubts - Always reachable - Office gossips"
  },
  {
    "name": "Praveen Ravada",
    "role": "Praveen-Garu",
    "categories": [
      "My Team"
    ],
    "memory": "Praveen-Garu, More of a senior who is always reachable - Technically strong. Gives carrer guidance and life advices at times."
  },
  {
    "name": "Raja Giridharan",
    "role": "My first mentor… His first question towards me is what I bring to his team",
    "categories": [
      "My Team",
      "Leadership",
      "Managers",
      "Mentors"
    ],
    "memory": "My first mentor… His first question towards me is what I bring to his team. Every graduate trainee is put in his team first for a easy campus to corporate transition - Always learns something new - Logical Thinker - Helps me out at his best way possible - Gives straight forward answers which is the reality even if the situation gets worse irrespective of whomever is involved"
  },
  {
    "name": "Sagayanathan Dhanraj",
    "role": "Known for his HotFix if something breaks in production",
    "categories": [
      "New Connections",
      "Cross-Team"
    ],
    "memory": "Known for his HotFix if something breaks in production, Always has a solution handy if anything breaks."
  },
  {
    "name": "Sivaranjith Kannappan",
    "role": "Break Partner",
    "categories": [
      "My Team"
    ],
    "memory": "Break Partner, Known for his Guitar skills - I'm your subscriber and a supporter always - Focus on your hobbies - Gives reality checks at times."
  },
  {
    "name": "Srinath Kalaimani",
    "role": "Very limited interaction but when it comes to work he's truly committed to…",
    "categories": [
      "New Connections"
    ],
    "memory": "Very limited interaction but when it comes to work he's truly committed to work - Seen him working late in office if the deadlines are critical"
  },
  {
    "name": "Bharathkumar Karthikeyan",
    "role": "Always reachable DBA who always helps in every DB requests easily reachable",
    "categories": [
      "New Connections",
      "Cross-Team"
    ],
    "memory": "Always reachable DBA who always helps in every DB requests easily reachable, Chases me for PVTs"
  },
  {
    "name": "Jeeja Vaniamthodi",
    "role": "We always communicate in Tamil",
    "categories": [
      "Cross-Team",
      "Mentors"
    ],
    "memory": "We always communicate in Tamil, A cool team player,manager and a lead - Who plans everything in prior - Most of them thinks she's a Malayali but she speaks Tamil very well."
  },
  {
    "name": "Karthick Murali",
    "role": "A Bro-Coded personality chases me for Downtime Approvals and PVTs",
    "categories": [
      "Cross-Team"
    ],
    "memory": "A Bro-Coded personality chases me for Downtime Approvals and PVTs"
  },
  {
    "name": "Naseer Basha",
    "role": "Follows the rules strictly",
    "categories": [
      "Cross-Team"
    ],
    "memory": "Follows the rules strictly, chases me in weekends for failures"
  },
  {
    "name": "Rangaraj Gopinath",
    "role": "The PostgreSQL DBA",
    "categories": [
      "Cross-Team"
    ],
    "memory": "The PostgreSQL DBA, Thought he doesn't know Tamil in the initial times - Helps me at lot of times."
  },
  {
    "name": "Sethumathavan Srinivasan",
    "role": "Very limited interaction",
    "categories": [
      "New Connections"
    ],
    "memory": "Very limited interaction, Helps me through SRs"
  },
  {
    "name": "Srinivasa Rao Vadlamudi",
    "role": "Srini-Garu",
    "categories": [
      "Cross-Team"
    ],
    "memory": "Srini-Garu - Always reachable DBA who always helps in every DB requests easily reachable, Chases me for PVTs"
  },
  {
    "name": "Syed Wahid Syed Kasim",
    "role": "We agree the Downtime first internally and confirm over email",
    "categories": [
      "Cross-Team"
    ],
    "memory": "We agree the Downtime first internally and confirm over email - Helps me through SRs"
  },
  {
    "name": "Venkatesh Kuthalingam",
    "role": "Very less interaction",
    "categories": [
      "Cross-Team"
    ],
    "memory": "Very less interaction, but a good leader who handles the whole DB team."
  },
  {
    "name": "Vimal Malleeswaran",
    "role": "My School Senior",
    "categories": [
      "Cross-Team"
    ],
    "memory": "My School Senior - What a small world, Helps me through SRs quickly and a hassle free resource to quickly reach out - Even if we aren't sure on the issue, He single handedly checks solutions online and gives us inputs."
  },
  {
    "name": "Swapnil Rapate",
    "role": "The Device Protection guy",
    "categories": [
      "Cross-Team",
      "Mentors"
    ],
    "memory": "The Device Protection guy, The whole DP runs through him no changes can be made without knowing to him - Created AI data models running in Machine Learning Algorithms - Very much talented, More supportive when it comes to the after hours support. Always Busy very hard to catch him for appointments. Previously it was a challenge and he understood it made the changes accordingly."
  },
  {
    "name": "Prasad Salgaonkar",
    "role": "The whole APAC runs via his commands",
    "categories": [
      "Cross-Team",
      "Leadership"
    ],
    "memory": "The whole APAC runs via his commands, Never settles with his SSRS report, Always enhances them and fixes them so that the data is accurate, Gives crystal clear requirements so that we don't need to seek his help and complete them on time. Had a chance to meet you in office last year and thank you for the chocolates you bought."
  },
  {
    "name": "Arvindh Manivel",
    "role": "The MacBook guy",
    "categories": [
      "Cross-Team"
    ],
    "memory": "The MacBook guy, Your ASN2 Reports were always urgent - In our recent interaction came to know that MacBooks aren't for Power BI"
  },
  {
    "name": "Ganesh Balaji",
    "role": "Very less interaction",
    "categories": [
      "New Connections"
    ],
    "memory": "Very less interaction, Has been always spamming me with the Monitoring failure messages, which is a good thing for alerting"
  },
  {
    "name": "Hariharan Thirunavukkarasu",
    "role": "Roll No",
    "categories": [
      "Graduate Trainees",
      "Cross-Team"
    ],
    "memory": "Roll No. 43, We shared the same class during college days - A great transition from campus to corporate"
  },
  {
    "name": "Harish Ragavendra",
    "role": "Recent interaction very limited and meet and greet",
    "categories": [
      "New Connections"
    ],
    "memory": "Recent interaction very limited and meet and greet"
  },
  {
    "name": "Kadarkarai Mannan",
    "role": "He has an another name 'Kadal'",
    "categories": [
      "New Connections"
    ],
    "memory": "He has an another name 'Kadal', Pings me all the monitoring alerts"
  },
  {
    "name": "Palaniyappan Andiyappan",
    "role": "Not much of an interaction",
    "categories": [
      "New Connections"
    ],
    "memory": "Not much of an interaction, Pings me every monitoring alerts"
  },
  {
    "name": "Rammohana Rao Kaki",
    "role": "Follow ups all the monitoring tasks and pending alerts",
    "categories": [
      "Occasional Connections"
    ],
    "memory": "Follow ups all the monitoring tasks and pending alerts"
  },
  {
    "name": "Saravanan Jc",
    "role": "Bro Code",
    "categories": [
      "Cross-Team",
      "Mentors"
    ],
    "memory": "Bro Code - We've done many monitoring enhancements, Moreover you've shown much interested in learning new tech stacks"
  },
  {
    "name": "Senthil Arumugam",
    "role": "Follows up for all the monitoring alerts",
    "categories": [
      "Occasional Connections"
    ],
    "memory": "Follows up for all the monitoring alerts, Talks very politely."
  },
  {
    "name": "Sree Charan Pabbati",
    "role": "Not much of an interaction",
    "categories": [
      "Occasional Connections"
    ],
    "memory": "Not much of an interaction, But understands the issue behind the alerts and prioritizes them accordingly."
  },
  {
    "name": "Sylvanus Fernandez",
    "role": "Syl was always a Boss Energy Character",
    "categories": [
      "Neighbor Team"
    ],
    "memory": "Syl was always a Boss Energy Character, Looks like a perfect match for the Corporate"
  },
  {
    "name": "Yasaswini Ananthaneni",
    "role": "Follows up for all the monitoring alerts and makes a note of them",
    "categories": [
      "Occasional Connections"
    ],
    "memory": "Follows up for all the monitoring alerts and makes a note of them"
  },
  {
    "name": "Balasubramaniam Sampathkumar",
    "role": "Lead of Backup Team",
    "categories": [
      "Occasional Connections"
    ],
    "memory": "Lead of Backup Team - Helps me recover the missing files and data"
  },
  {
    "name": "Jeevaprakash Thillainayagam",
    "role": "Hope the NZ Health Check reprot is useful and working as expected",
    "categories": [
      "New Connections"
    ],
    "memory": "Hope the NZ Health Check reprot is useful and working as expected - Meets and Greets always."
  },
  {
    "name": "Santhoshkumaran Nadanam",
    "role": "King of restoration",
    "categories": [
      "Occasional Connections"
    ],
    "memory": "King of restoration, He'll share his screen and explains us the process step by step."
  },
  {
    "name": "Saravana Kumar G",
    "role": "Backs up and Restores them on time",
    "categories": [
      "Occasional Connections"
    ],
    "memory": "Backs up and Restores them on time, Helped me with some SRs"
  },
  {
    "name": "Dharanbabu Narayanan",
    "role": "Professional in all the meetings and emails one of the Graduate Trainees…",
    "categories": [
      "Graduate Trainees",
      "Occasional Connections"
    ],
    "memory": "Professional in all the meetings and emails one of the Graduate Trainees from my previous batch, Not much of an interaction."
  },
  {
    "name": "Gopinath Balaji",
    "role": "Got a chance to interact with him recently",
    "categories": [
      "New Connections",
      "Cross-Team"
    ],
    "memory": "Got a chance to interact with him recently, much talented helps trying solutions by checking online which we both don't know."
  },
  {
    "name": "Karthikeyan Govindaswamy",
    "role": "He helps me a lot",
    "categories": [
      "Occasional Connections",
      "Cross-Team"
    ],
    "memory": "He helps me a lot, who is much dedicated to work - Treats me and calls me as his 'Thambi' meets and greets in office - Thanks for the Gift"
  },
  {
    "name": "Karunakaran Indirajayeethu",
    "role": "One of the best managers I've ever seen",
    "categories": [
      "Leadership",
      "Cross-Team"
    ],
    "memory": "One of the best managers I've ever seen, He's much committed to work irrespective of the teams which are involved - A 'Nadamaadum Selfie Stick' picks his mobile out to capture some beautiful memories - His voice tone is too low and gentle - I've never heard him shout or Yell at someone at work."
  },
  {
    "name": "Kumar Dhanabalan",
    "role": "Follow ups on the weekend for Patching Downtime",
    "categories": [
      "Occasional Connections",
      "Cross-Team"
    ],
    "memory": "Follow ups on the weekend for Patching Downtime, PVT, etc…"
  },
  {
    "name": "Rajasekar Manickam",
    "role": "Guy who we met first when we are out of college who gave us all our First…",
    "categories": [
      "Cross-Team",
      "Mentors"
    ],
    "memory": "Guy who we met first when we are out of college who gave us all our First Corporate Laptop in the NOC room in our old office in Cambridge Tower, And shared his carrer path and gave us all guidance - I've seen him grow in this compary and he've mentioned that this company changed his life - May Likewize won't leave him at any cost."
  },
  {
    "name": "Sathish Chandran",
    "role": "Most of his messages were the Change Task closures",
    "categories": [
      "Occasional Connections",
      "Cross-Team"
    ],
    "memory": "Most of his messages were the Change Task closures, Meets and greets in office."
  },
  {
    "name": "Selvakumar Jayaraman",
    "role": "I've seen him Grow in Likewize",
    "categories": [
      "Occasional Connections",
      "Cross-Team"
    ],
    "memory": "I've seen him Grow in Likewize - Has very great potential to learn new things - Keep up the good work, Bro coded, Understands the issues in simple way."
  },
  {
    "name": "Jitendra Kumar Singh",
    "role": "Jithu Bhai",
    "categories": [
      "Occasional Connections",
      "Cross-Team"
    ],
    "memory": "Jithu Bhai, Check for someone from my team for upcoming Deprovision Tasks follow ups including my deprovision tasks - Always helps whenever I ping him for something critical/urgent"
  },
  {
    "name": "Manoranjan Sivaraman",
    "role": "Limited interaction",
    "categories": [
      "Occasional Connections",
      "Cross-Team"
    ],
    "memory": "Limited interaction, but it was with the Task closures and the Incident follow-ups."
  },
  {
    "name": "Ramakrishnan Balaji",
    "role": "My cab mate",
    "categories": [
      "Occasional Connections",
      "Cross-Team"
    ],
    "memory": "My cab mate, Very polite and rants sometime - Most of our chats were of the Incident follow-ups from you."
  },
  {
    "name": "Saif Ali Khan",
    "role": "He's a Team Lead",
    "categories": [
      "Occasional Connections",
      "Cross-Team"
    ],
    "memory": "He's a Team Lead, Calm and Composed - Most of our interactions were of quick calls and chats."
  },
  {
    "name": "Usha Rani",
    "role": "HR Back with a Bang",
    "categories": [
      "Familiar Faces"
    ],
    "memory": "HR Back with a Bang, Our recent 1:1 connect meant a lot - Thanks for getting my suggesstions and recommendations"
  },
  {
    "name": "Ranga Rajamanickam",
    "role": "A great leader with excellent technical knowledge and business expertise",
    "categories": [
      "Leadership",
      "Mentors"
    ],
    "memory": "A great leader with excellent technical knowledge and business expertise - Your AI Workshops made me implement/rewrite the Power Automate flows using AI."
  },
  {
    "name": "Arun Johnson",
    "role": "Limited interaction",
    "categories": [
      "Familiar Faces"
    ],
    "memory": "Limited interaction, meets and greets at office."
  },
  {
    "name": "Kishore Kumaar Bathala Sivayya",
    "role": "Campus Interview Panel member to Respected Center Head",
    "categories": [
      "Leadership"
    ],
    "memory": "Campus Interview Panel member to Respected Center Head, India - Puts so much efforts towards company's growth - Meets and greets in office"
  },
  {
    "name": "Sriram Rathinavel",
    "role": "One of our Graduate Trainees",
    "categories": [
      "Graduate Trainees",
      "Cross-Team"
    ],
    "memory": "One of our Graduate Trainees, who is truly committed in work - We'll bring back the same vibe that we had in the initial days even if we weren't meeting each other for a while. - Those initial stages in Training were the best."
  },
  {
    "name": "Visalini Sivaganesan",
    "role": "Got a chance to interact with her in the Trips",
    "categories": [
      "Familiar Faces"
    ],
    "memory": "Got a chance to interact with her in the Trips, So extroverted but has her own problems - May you settle down and get things done one by one and Stay Healthy. Mark your attendance in the upcoming trips so that we don’t forget you - Calls me 'Sai Baba' as I'll be there in office every Thursday."
  },
  {
    "name": "Uma Maheswari",
    "role": "Cab Mate",
    "categories": [
      "Familiar Faces"
    ],
    "memory": "Cab Mate - Such a genuine soul, Please stop sacrificing your seats for others."
  },
  {
    "name": "Sarath Kumar",
    "role": "So Extroverted",
    "categories": [
      "Familiar Faces"
    ],
    "memory": "So Extroverted - Most of them knows him, He's my school Seniorist Senior - He completed the schooling while I was 3rd Standard - What a small world... that reunited us."
  },
  {
    "name": "Evan Madeley",
    "role": "Thanks for your time in explaining the full requirement",
    "categories": [
      "Occasional Connections",
      "Cross-Team"
    ],
    "memory": "Thanks for your time in explaining the full requirement, so that we've built our Dashboards from scratch - The Apple Multi-Tier and the DocScan, I've given the full handover to our fellow team, The way he calls us 'Mate' means a lot."
  },
  {
    "name": "Chinnu Stephen",
    "role": "Your TradeByCategory reprot generation reminders will be missed",
    "categories": [
      "Occasional Connections",
      "Cross-Team"
    ],
    "memory": "Your TradeByCategory reprot generation reminders will be missed, The BBTI Dashboard refreshes, Your patience while the new enhancement feasiblity checks takes time. And your greetings and wishes means a lot. Chinnu-Rogers inseparable"
  },
  {
    "name": "Ally Qian",
    "role": "The Profit Sharing Report was the chaos trigger point",
    "categories": [
      "Occasional Connections",
      "Cross-Team"
    ],
    "memory": "The Profit Sharing Report was the chaos trigger point, which is now stable, up and running. The glentel refresh KTs are also done."
  },
  {
    "name": "Damian Jurek",
    "role": "Your request were all Business Critical",
    "categories": [
      "Occasional Connections",
      "Cross-Team"
    ],
    "memory": "Your request were all Business Critical - I still remember our Fonua report and the VMO2 days. And your recent KT on the EMEA QlikView gave me a handson experience in a new tool for me which is already old."
  },
  {
    "name": "Lee Rowlands",
    "role": "Most of the request was on the SSRS report queries",
    "categories": [
      "Occasional Connections",
      "Cross-Team"
    ],
    "memory": "Most of the request was on the SSRS report queries."
  },
  {
    "name": "Priya Krishnan",
    "role": "The OG Procurement Specialist",
    "categories": [
      "Familiar Faces"
    ],
    "memory": "The OG Procurement Specialist, We had our best conversations and Tea Breaks, We share our problems… A great listener."
  },
  {
    "name": "Priyatham Telaprolu",
    "role": "Most of our conversations were related only to Apple",
    "categories": [
      "Occasional Connections",
      "Cross-Team"
    ],
    "memory": "Most of our conversations were related only to Apple - Meets and Greets in office."
  },
  {
    "name": "Subha Viswanathan",
    "role": "The Senior Scrum Master",
    "categories": [
      "Familiar Faces"
    ],
    "memory": "The Senior Scrum Master, whose communication is at it's best and crystal clear - So much extroverted."
  },
  {
    "name": "Saranyalakshmi Radhakrishnan",
    "role": "Plays with the User Stories",
    "categories": [
      "Familiar Faces"
    ],
    "memory": "Plays with the User Stories, Gives me carrer guidance and open talks"
  },
  {
    "name": "Deepak Warrier",
    "role": "Chetan",
    "categories": [
      "Familiar Faces"
    ],
    "memory": "Chetan - who handles the Integration, Meets and greets in office - So extroverted"
  },
  {
    "name": "Thanuja P",
    "role": "Not much of an interaction",
    "categories": [
      "Familiar Faces"
    ],
    "memory": "Not much of an interaction, But some of them was only related to Apple"
  },
  {
    "name": "Sadiq Sheik",
    "role": "Such a great leader",
    "categories": [
      "Leadership"
    ],
    "memory": "Such a great leader, who cares about everyone's growth - His eagerness towards the new technologies - Always keeps him updated - Always gives us Carrer Guidance also for me till the last working date - Meets and greets in office. Thank you for your unwavering support"
  },
  {
    "name": "Kannan Pushparani",
    "role": "Recent interaction very limited and it was only related to Apple and RLS…",
    "categories": [
      "Occasional Connections",
      "Cross-Team"
    ],
    "memory": "Recent interaction very limited and it was only related to Apple and RLS and meet and greets in office."
  },
  {
    "name": "Srinivas Thamodaran",
    "role": "Limited interaction",
    "categories": [
      "Occasional Connections",
      "Cross-Team"
    ],
    "memory": "Limited interaction, and it was only related to Apple and RLS"
  },
  {
    "name": "Sangeetha Govindarajan",
    "role": "Scrum Master",
    "categories": [
      "Familiar Faces"
    ],
    "memory": "Scrum Master, Gives carrer guidance a great listener - Always meets and greets in office."
  },
  {
    "name": "Saravanan Chandrasekaran",
    "role": "Less interactions but a meaningful ones",
    "categories": [
      "New Connections"
    ],
    "memory": "Less interactions but a meaningful ones, I'll cherish those car memories to way back to our homes after a recent gathering."
  },
  {
    "name": "Jaya Prakash",
    "role": "A Great-HR",
    "categories": [
      "Familiar Faces"
    ],
    "memory": "A Great-HR, who was through our Campus to Corporate journey, I still cherish the memory on our first day at office - Setting up our names in Microsoft Team - Very transparent and friendly - Helped me through the ADP shift clarification and the allowances."
  },
  {
    "name": "Jayakumar Thulasingam",
    "role": "The Timesheet Manager",
    "categories": [
      "Familiar Faces"
    ],
    "memory": "The Timesheet Manager, Who plays with CAPEX and OPEX trends - Had a chance to work with you in PMO-BI Activites, But our interactions was very less"
  },
  {
    "name": "Anitha Gokul",
    "role": "Will definetly miss your TimeSheet reminders and your prompt response…",
    "categories": [
      "Familiar Faces"
    ],
    "memory": "Will definetly miss your TimeSheet reminders and your prompt response regarding the Project Allocation in timesheet."
  },
  {
    "name": "JayaKumar Veerasamy",
    "role": "The Cool Project Manager who always meets and greets in office",
    "categories": [
      "Familiar Faces"
    ],
    "memory": "The Cool Project Manager who always meets and greets in office, Not much of an interaction but the less ones were always meaningful"
  },
  {
    "name": "Shibin DevaKumar",
    "role": "Most of our interactions was regarding the Inventory Data Load",
    "categories": [
      "Occasional Connections",
      "Cross-Team"
    ],
    "memory": "Most of our interactions was regarding the Inventory Data Load, Understands the process and shows eagerness to learn even if it is not his department"
  },
  {
    "name": "Ananthakrishnan Kothandaraman",
    "role": "A senior leader with Very less interaction",
    "categories": [
      "Leadership"
    ],
    "memory": "A senior leader with Very less interaction, Meets and greets in office."
  },
  {
    "name": "Ashfaq Kazi",
    "role": "Our interactions started way back from JEF",
    "categories": [
      "Occasional Connections",
      "Cross-Team"
    ],
    "memory": "Our interactions started way back from JEF, TEF, NetCracker Reporting"
  },
  {
    "name": "Dillibabu Vedachalam",
    "role": "Kept some servers up and running even in the weekends for me",
    "categories": [
      "Occasional Connections",
      "Cross-Team"
    ],
    "memory": "Kept some servers up and running even in the weekends for me, Hope you had a great time in our recent Outing/Trip"
  },
  {
    "name": "Prasan Narkedamilli",
    "role": "The whole APAC operations is through him",
    "categories": [
      "Occasional Connections",
      "Cross-Team"
    ],
    "memory": "The whole APAC operations is through him, A strong technical expertise, But takes time even in his busy schedule to explain us things which is complex."
  },
  {
    "name": "Vamsi Krishna",
    "role": "A recent interaction where",
    "categories": [
      "Familiar Faces"
    ],
    "memory": "A recent interaction where, I'll be in the IT Inventory for Laptops, Headphones and accessories. Helps me through some urgent requests."
  },
  {
    "name": "Ravichandran Krishnamurthy",
    "role": "A senior JDE consultant",
    "categories": [
      "Familiar Faces"
    ],
    "memory": "A senior JDE consultant, He's So goated everyone calls him Sir - Very much Business Logic oriented."
  },
  {
    "name": "Eyaseen Mohamed",
    "role": "Limited interactions",
    "categories": [
      "New Connections",
      "Cross-Team"
    ],
    "memory": "Limited interactions, those were related to GTP TACs"
  },
  {
    "name": "Mohamed Arfin Abdul Rahman",
    "role": "Very limited interactions related to MDM",
    "categories": [
      "New Connections",
      "Cross-Team"
    ],
    "memory": "Very limited interactions related to MDM, Meets and greets in office"
  },
  {
    "name": "Suganya Selvam",
    "role": "SAG Guru",
    "categories": [
      "New Connections",
      "Cross-Team"
    ],
    "memory": "SAG Guru, Or recent interations were related to Finacity File Transfers"
  },
  {
    "name": "Zainullabuddin Sadiq",
    "role": "Limited interactions",
    "categories": [
      "Familiar Faces"
    ],
    "memory": "Limited interactions, Meets and greets in office"
  },
  {
    "name": "Hardik Shah",
    "role": "Less interactions",
    "categories": [
      "Leadership"
    ],
    "memory": "Less interactions, but those were meaningful ones - Meets and greets in office - Pitches in if something goes worng in the meeting or a Bridge Call - Explains things in detail so that we'll understand."
  },
  {
    "name": "Bobby Kumar",
    "role": "Recent Connection",
    "categories": [
      "Familiar Faces"
    ],
    "memory": "Recent Connection, Gives us life advices and carrier guidance and support"
  },
  {
    "name": "Suchitra Devi Raghupathy",
    "role": "Ranga's DP Workshop Memories",
    "categories": [
      "Familiar Faces"
    ],
    "memory": "Ranga's DP Workshop Memories, Cab Mate for a week"
  },
  {
    "name": "Razia Sultana",
    "role": "Very limited interactions thanks for spending some breaks with us",
    "categories": [
      "Familiar Faces"
    ],
    "memory": "Very limited interactions thanks for spending some breaks with us."
  },
  {
    "name": "Dhanalakshmi Samidurai",
    "role": "Great Listener and a Yapper",
    "categories": [
      "Graduate Trainees",
      "Former Colleagues",
      "Cross-Team"
    ],
    "memory": "Great Listener and a Yapper, Thought we'll be in the same campus since you moved to a new company in the next Tower but now I'm moving out of the campus - But stay in touch as we still are and don't miss the office gossips."
  },
  {
    "name": "Indhuja Srinivasan",
    "role": "Emotional Support",
    "categories": [
      "Graduate Trainees",
      "Former Colleagues",
      "Cross-Team"
    ],
    "memory": "Emotional Support, so mature and gives reality checks and a great listener and we share the office gossips who still stays in touch"
  },
  {
    "name": "Ananya Jaisimha",
    "role": "A strong techinical professional",
    "categories": [
      "Former Colleagues",
      "My Team"
    ],
    "memory": "A strong techinical professional - Who helped me a lot in debugging the issues unofficially even in her busy schedules, The word 'Congratulations' if anything breaks apart brings us laugh during chaos. Our paths may cross moment came true - Happy to be a part of your team in the new organization"
  },
  {
    "name": "Vijayaraghavan Muthuraman",
    "role": "Guy who spends lavishly as if it is free money",
    "categories": [
      "Former Colleagues",
      "Cross-Team"
    ],
    "memory": "Guy who spends lavishly as if it is free money, Had car craze not sure it still persists, We share many similarities nice Break times spent while you were here."
  },
  {
    "name": "Aravindan Rajendran",
    "role": "I was only being assigned multiple managers whereas he was assigned…",
    "categories": [
      "Graduate Trainees",
      "Former Colleagues",
      "Cross-Team"
    ],
    "memory": "I was only being assigned multiple managers whereas he was assigned multiple teams, Bro-Coded, Stays with me in the Trips"
  },
  {
    "name": "Mohamed Atheeq Riaz",
    "role": "Shared many memories while we were graduate trainees",
    "categories": [
      "Graduate Trainees",
      "Former Colleagues",
      "Cross-Team"
    ],
    "memory": "Shared many memories while we were graduate trainees, Always pushes things to others plates so that he'll get time to debug which is a good thing."
  },
  {
    "name": "DavidSam Jabaseelan",
    "role": "Had a very great time working with him",
    "categories": [
      "Former Colleagues",
      "My Team"
    ],
    "memory": "Had a very great time working with him, Gave his best inspite of his personal issues - We'll catchup soon"
  },
  {
    "name": "Gopinath Manoharan",
    "role": "A goated Manager",
    "categories": [
      "Former Colleagues",
      "Managers",
      "My Team",
      "Mentors"
    ],
    "memory": "A goated Manager - Thought Application Support would collapse while he left, A very good mentor - Been so much supportive and he had a great confidence in me than others gives all the automations and critical thinking tasks to me."
  },
  {
    "name": "Hariprasad Dilli",
    "role": "Limited interactions but some memorable moments during our Graduate…",
    "categories": [
      "Graduate Trainees",
      "Former Colleagues"
    ],
    "memory": "Limited interactions but some memorable moments during our Graduate Trainee days"
  },
  {
    "name": "Hasna Farzana",
    "role": "Quick learner and a Team Player",
    "categories": [
      "Former Colleagues",
      "My Team"
    ],
    "memory": "Quick learner and a Team Player - Let's catch-up soon, Emotional Support during hard times"
  },
  {
    "name": "Sathya Baskar",
    "role": "Team Player",
    "categories": [
      "Former Colleagues",
      "My Team"
    ],
    "memory": "Team Player, A great colleague who's still in touch and stay in touch"
  },
  {
    "name": "Karthikeyan Thiyagarajan",
    "role": "Limited Interaction",
    "categories": [
      "Former Colleagues",
      "Cross-Team"
    ],
    "memory": "Limited Interaction, A guy who's always on his phone - Later realized that it was some life advice or carrer guidance for someone which he gave to me as well."
  },
  {
    "name": "Monadevi Sugumar",
    "role": "Shared many memories while we were graduate trainees",
    "categories": [
      "Graduate Trainees",
      "Former Colleagues"
    ],
    "memory": "Shared many memories while we were graduate trainees. More like a college friend."
  },
  {
    "name": "Monisha Shanmugam",
    "role": "Technically Strong",
    "categories": [
      "Former Colleagues",
      "My Team",
      "Mentors"
    ],
    "memory": "Technically Strong, Gives life advices helps anytime, anywhere - Known for her Power BI Dashboard and DAX Calculations"
  },
  {
    "name": "Niveditha Shanmuham",
    "role": "Technically Strong",
    "categories": [
      "Former Colleagues",
      "My Team",
      "Mentors"
    ],
    "memory": "Technically Strong, Helped me preparing for my interview while she was in the organization and outside organization -Gives life advices helps anytime, anywhere - Known for her Power BI Dashboard and DAX Calculations"
  },
  {
    "name": "Periasamy Anuman",
    "role": "Less Interactions",
    "categories": [
      "Former Colleagues",
      "Cross-Team"
    ],
    "memory": "Less Interactions, but those were meaningful ones - Meets and greets in office, Always comes up with the quote 'Unakennapa Jolly ah irruka'"
  },
  {
    "name": "Thendayuthapani Kalimuthu",
    "role": "Very good Team Player",
    "categories": [
      "Former Colleagues",
      "Cross-Team"
    ],
    "memory": "Very good Team Player, Helps anytime and anywhere - Comes up with the solution where we both were confused - Most of the interactions was due to the Rogers reports and the SFTP File Transfers"
  },
  {
    "name": "Rajalakshmi Subramanian",
    "role": "A good HR who is good in her crystal clear communication",
    "categories": [
      "Former Colleagues",
      "Familiar Faces"
    ],
    "memory": "A good HR who is good in her crystal clear communication, Helped us through smooth onboarding process and campus to corporate transition"
  },
  {
    "name": "Ravi Nanjundappa",
    "role": "A great Team Leader who stands for us in all the escalations and meetings",
    "categories": [
      "Former Colleagues",
      "Managers",
      "My Team",
      "Mentors"
    ],
    "memory": "A great Team Leader who stands for us in all the escalations and meetings, Very much supportive had a great confidence in me - Always encourages me and helps me to learn new things."
  },
  {
    "name": "Revanth Suresh",
    "role": "My College Senior which I came to know before I joined here through…",
    "categories": [
      "Graduate Trainees",
      "Former Colleagues",
      "Cross-Team"
    ],
    "memory": "My College Senior which I came to know before I joined here through Placement Cell, The Go To DBA for all our requests, who is still in touch - Congratulations for your upcoming chapters - Stay in touch."
  },
  {
    "name": "Mohamed Rizwan S",
    "role": "Nice interactions through our Graduate Trainee days",
    "categories": [
      "Graduate Trainees",
      "Former Colleagues"
    ],
    "memory": "Nice interactions through our Graduate Trainee days, Strong Techincal Skills - Left the organization first in our entire batch to just join the company which is just opposite to our company, Met few times even after you left but no recent interactions - Let's catchup soon."
  },
  {
    "name": "Ruby Kumar Arumugam",
    "role": "A hard worker",
    "categories": [
      "Graduate Trainees",
      "Former Colleagues"
    ],
    "memory": "A hard worker, Known for his UI/UX designs - Nice time during our Graduate Trainee days - Let's catchup soon."
  },
  {
    "name": "Sasikumar Jaishankar",
    "role": "Very less interaction",
    "categories": [
      "Former Colleagues",
      "My Team"
    ],
    "memory": "Very less interaction, A guy with good technical skills."
  },
  {
    "name": "Sathish Murugesan",
    "role": "Easily reachable for any issues and debugging",
    "categories": [
      "Graduate Trainees",
      "Former Colleagues",
      "Cross-Team"
    ],
    "memory": "Easily reachable for any issues and debugging, Keep your Amazon Pay ICICI Bank credit card ready for cashbacks, A great colleague who's still in touch - Stay in touch"
  },
  {
    "name": "Shanthini Krishnasamy",
    "role": "A strong techinical professional",
    "categories": [
      "Former Colleagues",
      "My Team"
    ],
    "memory": "A strong techinical professional - Who helped me a lot in debugging theMI Reports when I was a fresher, I'm a biggest fan for Tamil Quotes - A subscriber of your YouTube Channel, Let's catchup soon"
  },
  {
    "name": "Sherwin Rose",
    "role": "Very less interaction but the memories were best",
    "categories": [
      "Former Colleagues",
      "Cross-Team"
    ],
    "memory": "Very less interaction but the memories were best"
  },
  {
    "name": "Keerthi Vasan Chellappa",
    "role": "Known for his Team Collaboration in APAC and owning Both Android and…",
    "categories": [
      "Former Colleagues",
      "Cross-Team"
    ],
    "memory": "Known for his Team Collaboration in APAC and owning Both Android and iPhone at the same time, Interactions were less but memories are strong - Thanks for the invite for an special upcoming event meet you there."
  },
  {
    "name": "Sibichakkaravarthi Thangavel",
    "role": "A great Team Player",
    "categories": [
      "Former Colleagues",
      "My Team"
    ],
    "memory": "A great Team Player, Works at his ease - Always rants about work - Let's catchup soon"
  },
  {
    "name": "Sreelekha Undralla",
    "role": "A strong techincal professional",
    "categories": [
      "Former Colleagues",
      "My Team"
    ],
    "memory": "A strong techincal professional, We had our good memories with your wild garlic oil and a lot of fun in office, Thanks for being supportive and a listener"
  },
  {
    "name": "Sriram Muthukrishnan",
    "role": "Less interaction but great memories while we were Graduate Trainees",
    "categories": [
      "Former Colleagues",
      "Graduate Trainees"
    ],
    "memory": "Less interaction but great memories while we were Graduate Trainees"
  },
  {
    "name": "Dev Aadhisesh Sakthivel",
    "role": "Same College vibes and a hard working professional our memories during the…",
    "categories": [
      "Former Colleagues",
      "Graduate Trainees"
    ],
    "memory": "Same College vibes and a hard working professional our memories during the training sessions were the best"
  },
  {
    "name": "Dhana Sekhar Thota",
    "role": "Less interaction but great memories while we were Graduate Trainees",
    "categories": [
      "Former Colleagues",
      "Graduate Trainees"
    ],
    "memory": "Less interaction but great memories while we were Graduate Trainees"
  },
  {
    "name": "Vasanthan Jayakumar",
    "role": "A great team player",
    "categories": [
      "Former Colleagues",
      "Graduate Trainees",
      "Cross-Team"
    ],
    "memory": "A great team player, Has many hidden talents as Arts and Crafts, I'm still following your instagram page - Very creative mind and enthusiastic"
  },
  {
    "name": "Venkatesan Lakshminarayanan",
    "role": "Gave us KT on the entire Oracle JDE Architecture",
    "categories": [
      "Former Colleagues",
      "Cross-Team",
      "Mentors"
    ],
    "memory": "Gave us KT on the entire Oracle JDE Architecture, A great mentor who gives us life advices - A soft-voiced highly talented professional"
  },
  {
    "name": "Vignesh Vinayagam",
    "role": "Known as 'V.V.' highly hard working professional",
    "categories": [
      "Graduate Trainees",
      "Former Colleagues",
      "Cross-Team"
    ],
    "memory": "Known as 'V.V.' highly hard working professional - had a great experience working with him - Gives company on the trips and outings. Helps for quick table checks and routes all the Reporting related queries to us."
  },
  {
    "name": "Vishnu Priya Parthasarathi",
    "role": "A multi-tasker who worked 50:50 in HITS and BI",
    "categories": [
      "Former Colleagues",
      "My Team"
    ],
    "memory": "A multi-tasker who worked 50:50 in HITS and BI, A biggest supporter - I know this joke brings smile on your face 'Ennaiki - Enna Key' - I might have annoyed you, Let's catchup soon"
  },
  {
    "name": "Kumaran Ekambaram",
    "role": "Project Manager",
    "categories": [
      "Former Colleagues",
      "Familiar Faces"
    ],
    "memory": "Project Manager, Meets and greets in office - Gives many life advices - Participates in marathons, Fitness Enthusiast"
  },
  {
    "name": "Nachiappan N",
    "role": "Had him like a college senior who guides us",
    "categories": [
      "Graduate Trainees",
      "Former Colleagues",
      "My Team"
    ],
    "memory": "Had him like a college senior who guides us, Encourages in every aspects - By the time I switch my first company he is already at his 4th company. Let's catchup soon"
  },
  {
    "name": "Thejeshwar Baskar",
    "role": "Biggest Supporter of all time",
    "categories": [
      "Graduate Trainees",
      "Former Colleagues"
    ],
    "memory": "Biggest Supporter of all time, Project/Tools discussions - Technical Guru"
  },
  {
    "name": "Muthu Govindaswamy",
    "role": "Limited interaction",
    "categories": [
      "Former Colleagues",
      "Cross-Team"
    ],
    "memory": "Limited interaction, But quality ones - Calls on weekends for cirtical issues and understands the situation."
  },
  {
    "name": "Akash Ponraj",
    "role": "College Department Senior",
    "categories": [
      "Graduate Trainees",
      "Former Colleagues",
      "Cross-Team"
    ],
    "memory": "College Department Senior, He is residing next to my Home - Office Cab mate - Well wisher and a supporter, Stay in touch"
  },
  {
    "name": "Balaji Balakrishnan",
    "role": "Project Manager",
    "categories": [
      "Former Colleagues"
    ],
    "memory": "Project Manager, Meets and greets in office"
  },
  {
    "name": "Solomon Samuel",
    "role": "The Cloud Guy",
    "categories": [
      "Former Colleagues"
    ],
    "memory": "The Cloud Guy, Meets and greets in office"
  },
  {
    "name": "Thinakaran Natarajan",
    "role": "Handles critical situations easily",
    "categories": [
      "Former Colleagues",
      "Managers",
      "My Team",
      "Mentors"
    ],
    "memory": "Handles critical situations easily, Biggest supporter, Always positive and stands in before in a team meeting. Keep in touch"
  },
  {
    "name": "Chandra Agaram",
    "role": "Change Manager",
    "categories": [
      "Former Colleagues"
    ],
    "memory": "Change Manager, Meets and greets in office."
  },
  {
    "name": "Craig Woolliscroft",
    "role": "Knows EMEA Business End to End",
    "categories": [
      "Former Colleagues",
      "Cross-Team"
    ],
    "memory": "Knows EMEA Business End to End - Works actively only on EMEA command centre - Nice interacting with him."
  },
  {
    "name": "Amardeep Mancholla",
    "role": "Highly Talented DBA",
    "categories": [
      "Former Colleagues",
      "Cross-Team"
    ],
    "memory": "Highly Talented DBA, Bro Coded, Nice interacting with him. Biggest Supporter and a good soul"
  },
  {
    "name": "Andy Guy",
    "role": "Got to know on EMEA Projects all the Fonua",
    "categories": [
      "Former Colleagues",
      "Cross-Team"
    ],
    "memory": "Got to know on EMEA Projects all the Fonua, VMO2 Reportings were a good memories"
  },
  {
    "name": "Anil Vutukuru",
    "role": "Coolest Guy in office",
    "categories": [
      "Former Colleagues"
    ],
    "memory": "Coolest Guy in office, Gives life advices and meets and greets in office."
  },
  {
    "name": "Bhoobalan Ramamurthy",
    "role": "A great DB Manager who always supports his team",
    "categories": [
      "Former Colleagues",
      "Leadership"
    ],
    "memory": "A great DB Manager who always supports his team, Always roams with his glasses on head not on eyes, Meets and greets everytime and encourages me and supports me"
  },
  {
    "name": "Ebenezer Charles",
    "role": "Limited interaction",
    "categories": [
      "Former Colleagues",
      "Familiar Faces"
    ],
    "memory": "Limited interaction, But great in organizing games in events and gatherings - Let's catchup soon"
  },
  {
    "name": "Elamaran Kathiravan",
    "role": "College Senior",
    "categories": [
      "Graduate Trainees",
      "Former Colleagues",
      "Cross-Team"
    ],
    "memory": "College Senior, Talks politely even for a critical monitoring alert"
  },
  {
    "name": "Girish Bommaiah",
    "role": "Change Manager",
    "categories": [
      "Former Colleagues"
    ],
    "memory": "Change Manager, Who always plans well in advance in every CAB meetings, Greets whomever joins in the meetings for every specific ones by mentioning their names."
  },
  {
    "name": "Jagadeesh Sudhan Selvaraj",
    "role": "Face of SAG/Integration",
    "categories": [
      "Former Colleagues",
      "Cross-Team"
    ],
    "memory": "Face of SAG/Integration, Always available but only within shifts - Knows the root cause even before the issue arises, Looks for an opposite team's perspective whether it can be done from their end itself instead of disturbing their current architecture."
  },
  {
    "name": "Kalaivani Thambiran",
    "role": "We're definetly missing your timesheet reminders every Friday",
    "categories": [
      "Former Colleagues"
    ],
    "memory": "We're definetly missing your timesheet reminders every Friday, Limited interactions but meets and greets in office."
  },
  {
    "name": "Srinivasan Lakshmanan",
    "role": "A great leader who sends email and keeps us updated on the latest news and…",
    "categories": [
      "Former Colleagues",
      "Leadership"
    ],
    "memory": "A great leader who sends email and keeps us updated on the latest news and articles every Monday and Friday, Explained how Likewize started in our first day meeting as a Graduate Trainees."
  },
  {
    "name": "Vinothini Rajendran",
    "role": "Gives us KT during the initial JDE days",
    "categories": [
      "Former Colleagues",
      "Cross-Team"
    ],
    "memory": "Gives us KT during the initial JDE days, I still have that memory that the amount collected duing your maternity holiday was only sent during your farewell… Had a great time biggest supporter"
  },
  {
    "name": "Vinu Linga Raja",
    "role": "Thought me filing ITR",
    "categories": [
      "Former Colleagues"
    ],
    "memory": "Thought me filing ITR, Kept some servers up and running even in the weekends for me"
  },
  {
    "name": "Madhusudhanan Palanichandran",
    "role": "Cloud Guru",
    "categories": [
      "Former Colleagues"
    ],
    "memory": "Cloud Guru, Who always meets and greets in office."
  },
  {
    "name": "Praveen Tony",
    "role": "The cool manager",
    "categories": [
      "Former Colleagues"
    ],
    "memory": "The cool manager, who works remote mostly - Meets and greets in office."
  },
  {
    "name": "Meenakshi Sundaram Muthu",
    "role": "First interaction was regarding the AWS DMS issues got to know since then",
    "categories": [
      "Former Colleagues"
    ],
    "memory": "First interaction was regarding the AWS DMS issues got to know since then, A polite - DBA"
  },
  {
    "name": "Nijar Gulabjohn",
    "role": "Monitoring",
    "categories": [
      "Former Colleagues"
    ],
    "memory": "Monitoring, Straight to the point email strategies"
  },
  {
    "name": "Sarangapani Venkatesan",
    "role": "Same department but different class in college",
    "categories": [
      "Graduate Trainees",
      "Former Colleagues"
    ],
    "memory": "Same department but different class in college, we shared many good memories during our Graduate Trainee period"
  },
  {
    "name": "Sathish Babu",
    "role": "Soft Talker even for a critical issues in Monitoring on weekends",
    "categories": [
      "Former Colleagues"
    ],
    "memory": "Soft Talker even for a critical issues in Monitoring on weekends"
  },
  {
    "name": "Niyaz Ali",
    "role": "Biggest supporter",
    "categories": [
      "Former Colleagues"
    ],
    "memory": "Biggest supporter, Encourages more, hears all my rants and a good listener - Scrum Master went all of a sudden this year"
  },
  {
    "name": "Pallavi M",
    "role": "Limited Interactions but some memorable moments",
    "categories": [
      "Former Colleagues"
    ],
    "memory": "Limited Interactions but some memorable moments, meets and greets in office"
  },
  {
    "name": "Puviya Murugan",
    "role": "Less interactions",
    "categories": [
      "Former Colleagues"
    ],
    "memory": "Less interactions, The Radio Beacon restarts on weekends were the core memory."
  },
  {
    "name": "Prabhu Chockalingam",
    "role": "Incident Manager",
    "categories": [
      "Former Colleagues"
    ],
    "memory": "Incident Manager, Who doesn't leave us without closing the Problem Ticket, RCAs and 5 Why's"
  },
  {
    "name": "Ravi Samavedam",
    "role": "Senior Data Architect",
    "categories": [
      "Former Colleagues"
    ],
    "memory": "Senior Data Architect, So goated in coding that he can automate the timesheet in python."
  },
  {
    "name": "Saravan Prabu Periasamy",
    "role": "RCA Guru",
    "categories": [
      "Former Colleagues"
    ],
    "memory": "RCA Guru, Can't escape from him without the RCA document - Gets tired of the issues we get and the RCA drafts from our team."
  },
  {
    "name": "Sathish Balakrishnan",
    "role": "Good Memories from the college to corporate diaries",
    "categories": [
      "Graduate Trainees",
      "Former Colleagues"
    ],
    "memory": "Good Memories from the college to corporate diaries."
  },
  {
    "name": "Sathvikaa GopalKrishnan",
    "role": "Osmania Biscuits and Local Train Journey",
    "categories": [
      "Former Colleagues",
      "My Team"
    ],
    "memory": "Osmania Biscuits and Local Train Journey, Strong Wild Garlic from Sreelekha was our core memory"
  },
  {
    "name": "Shruthi Venkatasamy",
    "role": "A mandatory attendance in all the gathering and team outing",
    "categories": [
      "Former Colleagues",
      "Cross-Team"
    ],
    "memory": "A mandatory attendance in all the gathering and team outing, Resource with Excellent Communication skills - Was a part of every critical meetings and Bridge calls"
  },
  {
    "name": "Somshekhar Sampan",
    "role": "Freshservice Guru and Changes something in backend if I made any mistakes…",
    "categories": [
      "Former Colleagues"
    ],
    "memory": "Freshservice Guru and Changes something in backend if I made any mistakes in the tool in frontend"
  },
  {
    "name": "Yash Anil Babani",
    "role": "Though he was a fresher",
    "categories": [
      "Graduate Trainees",
      "Former Colleagues"
    ],
    "memory": "Though he was a fresher, but he didn't acted like one more professional."
  },
  {
    "name": "Sreenath Sathyakumar",
    "role": "Huge photo in Monitor Memories while we were Graduate Trainees",
    "categories": [
      "Graduate Trainees",
      "Former Colleagues"
    ],
    "memory": "Huge photo in Monitor Memories while we were Graduate Trainees"
  },
  {
    "name": "Abishek Priyan Kabilan",
    "role": "Had great memories before your flew abroad",
    "categories": [
      "Graduate Trainees",
      "Former Colleagues"
    ],
    "memory": "Had great memories before your flew abroad, Drops me in his own car to the nearby metro. Let's catchup soon"
  },
  {
    "name": "Sri Vishnu Sai Nagichetty",
    "role": "JDE Guy",
    "categories": [
      "Former Colleagues",
      "Cross-Team"
    ],
    "memory": "JDE Guy, Bro coded, Always with a positive attitude"
  },
  {
    "name": "Usha Sri KishoreKumar",
    "role": "Mostly worked closley for Apple projects… Your AutoForwarded emails…",
    "categories": [
      "Former Colleagues",
      "Cross-Team"
    ],
    "memory": "Mostly worked closley for Apple projects… Your AutoForwarded emails stopped the day you left us… Missed to transfer them, Also thanks for staying in touch"
  },
  {
    "name": "Vinodh Padmanabhan",
    "role": "A great leader",
    "categories": [
      "Former Colleagues",
      "Leadership"
    ],
    "memory": "A great leader, Always plans every changes in advance - has solutions for all the problemsApprovals even for Headphones… Your farewell treat made me to take risk to provide lunch for the half of the office"
  },
  {
    "name": "Yokaraj Muthuraj",
    "role": "Always chill JDE resource",
    "categories": [
      "Former Colleagues",
      "Cross-Team"
    ],
    "memory": "Always chill JDE resource, very supportive and guides us in every aspects"
  },
  {
    "name": "Devipriya AshokKumar",
    "role": "Very limited interaction but had a good memories when it comes to outings…",
    "categories": [
      "Former Colleagues",
      "Cross-Team"
    ],
    "memory": "Very limited interaction but had a good memories when it comes to outings and gatherings, Our handball catch and catch in the Resort were the core memory"
  },
  {
    "name": "Murali Krishna",
    "role": "Murali-Garu",
    "categories": [
      "Former Colleagues",
      "My Team"
    ],
    "memory": "Murali-Garu, Very limited interaction but those were quality ones."
  },
  {
    "name": "Taylor Poliseno",
    "role": "Most of our conversations were related only to Apple",
    "categories": [
      "Former Colleagues",
      "Cross-Team"
    ],
    "memory": "Most of our conversations were related only to Apple, Fitness enthusiast"
  }
];
