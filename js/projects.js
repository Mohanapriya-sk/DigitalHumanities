const projectData = {
    projects: [
        {
            id: 'p1',
            title: 'AI for Social Texts',
            img: 'assets/projecta-z.png',
            link: 'https://example.com/project1',
            batch: '2023',
            field: 'ai',
            topic: 'sentiment',
            letter: 'A'
        },
        {
            id: 'p2',
            title: 'Text Mining in Hindi Literature',
            img: 'assets/projecta-z.png',
            link: 'https://example.com/text-mining-hindi',
            batch: '2021',
            field: 'nlp',
            topic: 'textmining',
            letter: 'T'
        },
        {
            id: 'p3',
            title: 'NLP for Indian Languages',
            img: 'assets/projecta-z.png',
            link: 'https://example.com/nlp-indian-languages',
            batch: '2022',
            field: 'nlp',
            topic: 'corpus',
            letter: 'N'
        },
        {
            id: 'p4',
            title: 'Heritage Mapping of Dhanbad',
            img: 'assets/projecta-z.png',
            link: 'https://example.com/heritage-mapping-dhanbad',
            batch: '2022',
            field: 'mapping',
            topic: 'gis',
            letter: 'H'
        },
        {
            id: 'p5',
            title: 'Digital Archives 2021',
            img: 'assets/projecta-z.png',
            link: 'https://example.com/project2021-1',
            batch: '2021',
            field: 'archives',
            topic: 'corpus',
            letter: 'D'
        },
        {
            id: 'p6',
            title: 'Sentiment Analysis of News',
            img: 'assets/projecta-z.png',
            link: 'https://example.com/sentiment-news',
            batch: '2023',
            field: 'ai',
            topic: 'sentiment',
            letter: 'S'
        },
        {
            id: 'p7',
            title: 'Corpus of Indian Languages',
            img: 'assets/projecta-z.png',
            link: 'https://example.com/corpus-indian-languages',
            batch: '2022',
            field: 'nlp',
            topic: 'corpus',
            letter: 'C'
        },
        {
            id: 'p8',
            title: 'Oral History Corpus',
            img: 'assets/projecta-z.png',
            link: 'https://example.com/oral-history-corpus',
            batch: '2021',
            field: 'archives',
            topic: 'corpus',
            letter: 'O'
        },
        {
            id: 'p9',
            title: 'Visualizing Literary Networks',
            img: 'assets/projecta-z.png',
            link: 'https://example.com/literary-networks',
            batch: '2023',
            field: 'visualization',
            topic: 'visualization',
            letter: 'V'
        },
        {
            id: 'p10',
            title: 'Interactive Maps for Archives',
            img: 'assets/projecta-z.png',
            link: 'https://example.com/interactive-maps',
            batch: '2022',
            field: 'visualization',
            topic: 'gis',
            letter: 'I'
        },
        {
            id: 'p11',
            title: 'Text Mining for Social Media',
            img: 'assets/projecta-z.png',
            link: 'https://example.com/text-mining-social',
            batch: '2023',
            field: 'nlp',
            topic: 'textmining',
            letter: 'T'
        },
        {
            id: 'p12',
            title: 'GIS for Cultural Sites',
            img: 'assets/projecta-z.png',
            link: 'https://example.com/gis-cultural-sites',
            batch: '2022',
            field: 'mapping',
            topic: 'gis',
            letter: 'G'
        },
        {
            id: 'p13',
            title: 'Sentiment Analysis of Tweets',
            img: 'assets/projecta-z.png',
            link: 'https://example.com/sentiment-tweets',
            batch: '2023',
            field: 'ai',
            topic: 'sentiment',
            letter: 'S'
        },
        {
            id: 'p14',
            title: 'Digital Mapping of Cities',
            img: 'assets/projecta-z.png',
            link: 'https://example.com/digital-maps',
            batch: '2021',
            field: 'mapping',
            topic: 'gis',
            letter: 'D'
        },
        {
            id: 'p15',
            title: 'Big Data for Social Research',
            img: 'assets/projecta-z.png',
            link: 'https://example.com/bigdata',
            batch: '2022',
            field: 'ai',
            topic: 'textmining',
            letter: 'B'
        },
        {
            id: 'p16',
            title: 'Machine Learning in Humanities',
            img: 'assets/projecta-z.png',
            link: 'https://example.com/ml-humanities',
            batch: '2023',
            field: 'ai',
            topic: 'sentiment',
            letter: 'M'
        },
        {
            id: 'p17',
            title: 'Natural Language Translation',
            img: 'assets/projecta-z.png',
            link: 'https://example.com/nlp-translation',
            batch: '2022',
            field: 'nlp',
            topic: 'corpus',
            letter: 'N'
        },
        {
            id: 'p18',
            title: 'Open Data Repositories',
            img: 'assets/projecta-z.png',
            link: 'https://example.com/open-data',
            batch: '2021',
            field: 'visualization',
            topic: 'visualization',
            letter: 'O'
        },
        {
            id: 'p19',
            title: 'Poetry Generation AI',
            img: 'assets/projecta-z.png',
            link: 'https://example.com/poetry-ai',
            batch: '2023',
            field: 'ai',
            topic: 'sentiment',
            letter: 'P'
        },
        {
            id: 'p20',
            title: 'Querying Historical Data',
            img: 'assets/projecta-z.png',
            link: 'https://example.com/query-history',
            batch: '2022',
            field: 'archives',
            topic: 'corpus',
            letter: 'Q'
        },
        {
            id: 'p21',
            title: 'Regional Dialects Mapping',
            img: 'assets/projecta-z.png',
            link: 'https://example.com/regional-dialects',
            batch: '2021',
            field: 'mapping',
            topic: 'gis',
            letter: 'R'
        },
        {
            id: 'p22',
            title: 'Speech Recognition Research',
            img: 'assets/projecta-z.png',
            link: 'https://example.com/speech',
            batch: '2023',
            field: 'ai',
            topic: 'sentiment',
            letter: 'S'
        },
        {
            id: 'p23',
            title: 'Text Mining Newspapers',
            img: 'assets/projecta-z.png',
            link: 'https://example.com/text-mining',
            batch: '2022',
            field: 'nlp',
            topic: 'textmining',
            letter: 'T'
        },
        {
            id: 'p24',
            title: 'Folklore Digital Archive',
            img: 'assets/projecta-z.png',
            link: 'https://example.com/folklore',
            batch: '2021',
            field: 'archives',
            topic: 'corpus',
            letter: 'F'
        },
        {
            id: 'p25',
            title: 'Blockchain in Humanities',
            img: 'assets/projecta-z.png',
            link: 'https://example.com/project6',
            batch: '2022',
            field: 'ai',
            topic: 'textmining',
            letter: 'B'
        }
    ],
    topicData: [
        { id: 'textmining', name: 'Text Mining', img: 'assets/projectmehtods.png' },
        { id: 'gis', name: 'GIS & Mapping', img: 'assets/projectmehtods.png' },
        { id: 'sentiment', name: 'Sentiment Analysis', img: 'assets/projectmehtods.png' },
        { id: 'corpus', name: 'Corpus Building', img: 'assets/projectmehtods.png' },
        { id: 'visualization', name: 'Data Visualization', img: 'assets/projectmehtods.png' },
        { id: 'ml', name: 'Machine Learning', img: 'assets/projectmehtods.png' },
        { id: 'bigdata', name: 'Big Data', img: 'assets/projectmehtods.png' },
        { id: 'speech', name: 'Speech Recognition', img: 'assets/projectmehtods.png' },
        { id: 'poetry', name: 'Poetry Generation', img: 'assets/projectmehtods.png' },
        { id: 'open', name: 'Open Data', img: 'assets/projectmehtods.png' }
    ],
    fieldData: [
        { id: 'nlp', name: 'Natural Language Processing', img: 'assets/projectgenre.png' },
        { id: 'archives', name: 'Digital Archives', img: 'assets/projectgenre.png' },
        { id: 'mapping', name: 'Heritage Mapping', img: 'assets/projectgenre.png' },
        { id: 'ai', name: 'AI & Social Texts', img: 'assets/projectgenre.png' },
        { id: 'visualization', name: 'Data Visualization', img: 'assets/projectgenre.png' },
        { id: 'bigdata', name: 'Big Data', img: 'assets/projectgenre.png' },
        { id: 'speech', name: 'Speech Recognition', img: 'assets/projectgenre.png' },
        { id: 'poetry', name: 'Poetry Generation', img: 'assets/projectgenre.png' }
    ],
    batchData: [
        { id: '2021', name: 'Batch 2021', img: 'assets/projectbatch.png' },
        { id: '2022', name: 'Batch 2022', img: 'assets/projectbatch.png' },
        { id: '2023', name: 'Batch 2023', img: 'assets/projectbatch.png' },
        { id: '2020', name: 'Batch 2020', img: 'assets/projectbatch.png' },
        { id: '2019', name: 'Batch 2019', img: 'assets/projectbatch.png' }
    ]
};

// For compatibility with existing code, you can also export these:
const allProjectsData = projectData.projects;
const topicData = projectData.topicData;
const fieldData = projectData.fieldData;
const batchData = projectData.batchData;