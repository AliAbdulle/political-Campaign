//Her congressional district
const tennessee = {
 platform: ["taxes", "jobs", "Infrastructure", "CrimeAndEnforcement"],
 donationURL: "http://meatwithmeformoney.com",
 eventCalendar: {
        date:"2/21/2018",
        place: "Nile High School",
        time: 8
 },
 //Volunteer info array
 volunteerinfo: [
     {
         name: "Ali",
         addrress: "3290 broad way blvd",
         email: "ali@exapmle.com",
         phone: "615 909 8880",
         availability: "open",
         activities: "organizer"
     },
     {
        name: "Mike",
        addrress: "3290 inter state way blvd",
        email: "like@exapmle.com",
        phone: "615 909 8880",
        availability: "afternoon",
        activities: "caller"
    },
    {
        name: "Steve",
        addrress: "90 wilson county blvd",
        email: "ali@exapmle.com",
        phone: "715 989 9980",  
        availability: "open",
        activities: "Director"
    }

 ],
 biography: ['Lamar Alexander, (born July 3, 1940, Maryville, Tennessee, U.S.), American politician who was elected as a Republican to the U.S. Senate in 2002 and began representing Tennessee the following year. He previously served as governor of the state (1979–87).'],
 imgGallery: [
     {
        HeadShot:"https://www.google.com/search?q=lamar+alexander+images&tbm=isch&source=iu&ictx=1&fir=xmTgbMmiRAyqpM%253A%252Cgkmv3BDknRehZM%252C_&vet=1&usg=AI4_-kQRPUTr-GoRuRzayKYR3wjChDc2Dw&sa=X&ved=2ahUKEwjpg-ah2evgAhWr4IMKHSnBDl8Q9QEwA3oECAUQCg#imgrc=xmTgbMmiRAyqpM:",
        pictureOfFamily: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F5%2F57%2FU.S._Senators_Bob_Corker%252C_Richard_Burr%252C_Lamar_Alexander%252C_Congressman_John_Duncan_among_others_at_the_Great_Smoky_Mountains_National_Park_in_2009.jpg%2F300px-U.S._Senators_Bob_Corker%252C_Richard_Burr%252C_Lamar_Alexander%252C_Congressman_John_Duncan_among_others_at_the_Great_Smoky_Mountains_National_Park_in_2009.jpg&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FLamar_Alexander&docid=k9f0Gra3joVe_M&tbnid=m5cYMlSG5lgweM%3A&vet=10ahUKEwiFmL6D2uvgAhVMtlkKHWNDB64QMwg5KAAwAA..i&w=300&h=220&bih=789&biw=1440&q=lamar%20alexander%20family%20images&ved=0ahUKEwiFmL6D2uvgAhVMtlkKHWNDB64QMwg5KAAwAA&iact=mrc&uact=8",
        pictureOfConstituents:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.gannett-cdn.com%2F-mm-%2Ff37ee9dae189f47061c7f13a70786b46176e759e%2Fc%3D115-0-974-646%2Flocal%2F-%2Fmedia%2F2017%2F03%2F17%2FTennGroup%2FMemphis%2F636253744581422803-0413-malo-earpromo-local.JPG%3Fwidth%3D534%26height%3D401%26fit%3Dcrop&imgrefurl=https%3A%2F%2Fwww.commercialappeal.com%2Fstory%2Fnews%2Flocal%2Fthe-901%2F2018%2F12%2F19%2Flamar-alexander-resigns-memphis-may-field-potential-candidates-9-01%2F2360494002%2F&docid=2Pba6hHFc2BhuM&tbnid=kE_Jwy_JXkApBM%3A&vet=10ahUKEwizj9Om2uvgAhXJqlkKHVUSCp0QMwhCKAcwBw..i&w=534&h=401&bih=789&biw=1440&q=lamar%20alexander%20%20constituents%20images&ved=0ahUKEwizj9Om2uvgAhXJqlkKHVUSCp0QMwhCKAcwBw&iact=mrc&uact=8"

     }

 ], 
 missionStatement:"Make people life batter way",

 registeringToVote: "URL:https://www.alexander.senate.gov/public/index.cfm/pressreleases?ContentRecord_id=40ED6AA1-FF37-43E7-AA35-BC87AF95FD88"

 } 


 //creating function to political

 const addTennessee = (tennessee) => {
     tennessee.push(tennessee)
 }
 //Platfrom section
const addPlatform = (PlatformTexes, PlatformJobs, platformInfrastructure, platformHealth, platformCrimeAndEnforcement) => {
    Platform.texes = PlatformTexes;
    Platform.jobs = PlatformJobs;
    Platform.health = platformHealth;
    Platform.infrastructure = platformInfrastructure;
    Platform.CrimeAndEnforcement = platformCrimeAndEnforcement;

    addPlatform.push(platform)
}
//Donation section
const addDonationURL = (donationURL) => {
    donationURL.push(donation)
}
const addAventCalendar = (eveDate, evePlace, eveTime) => {
    eventCalendar.date = eveDate;
    eventCalendar.place = evePlace;
    eventCalendar.time =eveTime;
}
const Addvolunteer = (volName, volAddress, volEmail,volPhone, volAvalibility,volActivities) => {
    volunteerinfo.name = volName;
    volunteerinfo.addrress = volAddress;
    volunteerinfo.email = volEmail;
    volunteerinfo.availability = volAvalibility;
    volunteerinfo.activities = volActivities;
}

const addBiography = (bio) => {
    Biography.push(bio)
}

const addImgGallery = (imgHead, imgFamily, imgConsti) => {

    imgGallery.HeadShot = imgHead;
    imgGallery.pictureOfFamily = imgFamily;
    imgGallery.pictureOfConstituents = imgConsti;
    imgGallery.push(imgGallery)
}

const addMissionStatement = (mission) => {
    missionStatement.push(mission)
}

const addRegisteringToVote = (regVote) => {
    registeringToVote.push(regVote)
}
console.table(tennessee)