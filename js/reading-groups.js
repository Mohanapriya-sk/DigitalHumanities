const readingGroups = [
    {
        id: 1,
        title: "Digital Humanities Kickoff",
        description: "Introduction to Digital Humanities and its scope. Group discussion and resource sharing.",
        image: "assets/projectmehtods.png",
        badge: "Kickoff",
        facilitator: "Dr. A. Sharma",
        date: "Feb 10, 2024",
        duration: "2 hours"
    },
    {
        id: 2,
        title: "Text Mining Workshop",
        description: "Hands-on session on text mining tools and techniques.",
        image: "",
        badge: "Workshop",
        facilitator: "Ms. R. Gupta",
        date: "Mar 5, 2024",
        duration: "1.5 hours"
    },
    {
        id: 3,
        title: "Critical Theory Readings",
        description: "Group reading and discussion of selected critical theory texts.",
        image: "",
        badge: "Reading",
        facilitator: "Prof. S. Kumar",
        date: "Apr 2, 2024",
        duration: "2 hours"
    },
    {
        id: 4,
        title: "Digital Archives Exploration",
        description: "Exploring digital archives and their role in humanities research.",
        image: "",
        badge: "Exploration",
        facilitator: "Dr. P. Verma",
        date: "Apr 15, 2024",
        duration: "1 hour"
    },
    {
        id: 5,
        title: "Visualization in Humanities",
        description: "Workshop on data visualization tools for humanities projects.",
        image: "",
        badge: "Workshop",
        facilitator: "Ms. T. Singh",
        date: "May 1, 2024",
        duration: "1.5 hours"
    },
    {
        id: 6,
        title: "Collaborative Annotation",
        description: "Collaborative annotation of historical texts using digital platforms.",
        image: "",
        badge: "Collaboration",
        facilitator: "Dr. R. Das",
        date: "May 18, 2024",
        duration: "2 hours"
    },
    {
        id: 7,
        title: "Digital Storytelling",
        description: "Techniques and tools for digital storytelling in humanities.",
        image: "",
        badge: "Storytelling",
        facilitator: "Ms. S. Mehta",
        date: "Jun 3, 2024",
        duration: "1 hour"
    },
    {
        id: 8,
        title: "GIS for Humanities",
        description: "Introduction to Geographic Information Systems for humanities research.",
        image: "",
        badge: "GIS",
        facilitator: "Dr. V. Rao",
        date: "Jun 20, 2024",
        duration: "2 hours"
    },
    {
        id: 9,
        title: "Digital Preservation",
        description: "Best practices for digital preservation of cultural heritage.",
        image: "",
        badge: "Preservation",
        facilitator: "Ms. N. Patel",
        date: "Jul 5, 2024",
        duration: "1.5 hours"
    },
    {
        id: 10,
        title: "Corpus Linguistics",
        description: "Building and analyzing linguistic corpora for research.",
        image: "",
        badge: "Linguistics",
        facilitator: "Dr. M. Chatterjee",
        date: "Jul 22, 2024",
        duration: "2 hours"
    },
    {
        id: 11,
        title: "Digital Mapping",
        description: "Hands-on session on digital mapping tools and applications.",
        image: "",
        badge: "Mapping",
        facilitator: "Ms. K. Roy",
        date: "Aug 8, 2024",
        duration: "1 hour"
    },
    {
        id: 12,
        title: "Open Access Resources",
        description: "Discussion on open access resources for humanities research.",
        image: "",
        badge: "Discussion",
        facilitator: "Dr. S. Bhattacharya",
        date: "Aug 25, 2024",
        duration: "1.5 hours"
    },
    {
        id: 13,
        title: "Digital Pedagogy",
        description: "Exploring digital pedagogy methods for teaching humanities.",
        image: "",
        badge: "Pedagogy",
        facilitator: "Ms. L. Jain",
        date: "Sep 10, 2024",
        duration: "2 hours"
    },
    {
        id: 14,
        title: "Ethics in Digital Humanities",
        description: "Panel discussion on ethical issues in digital humanities research.",
        image: "",
        badge: "Panel",
        facilitator: "Dr. F. Ahmed",
        date: "Sep 27, 2024",
        duration: "1.5 hours"
    },
    {
        id: 15,
        title: "Digital Humanities Project Showcase",
        description: "Showcase of student projects in digital humanities.",
        image: "",
        badge: "Showcase",
        facilitator: "Ms. G. Kapoor",
        date: "Oct 12, 2024",
        duration: "2 hours"
    }
];

// Set dummy image for items without image
readingGroups.forEach(group => {
    if (!group.image) {
        const initials = group.title
            .split(' ')
            .map(word => word[0])
            .join('')
            .toUpperCase();
        group.image = `https://dummyimage.com/600x350/cccccc/333333&text=${initials}`;
    }
});


