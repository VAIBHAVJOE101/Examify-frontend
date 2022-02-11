const data = {
    teacherAssigned: 'teacherId124',
    title: 'Compiler Design CT1',
    isduration: true,
    duration: 90000,
    startDate: 1330194600000,
    endDate: 1330194600000,
    isBranchSpecific: true,
    branch: 'CSE',
    section: null,
    totalMcq: 10,
    totalMarks: 10,
    question:[
        {
            title: 'This is a Question',
            mcqType: false,
            marks: 1,
            mcqQuestions:[
                {mcqTitle: 'This is a Option',answer: false},
                {mcqTitle: 'This is a Option 2',answer: false},
                {mcqTitle: 'This is a Option 2',answer: true},
                {mcqTitle: 'This is a Option 2',answer: false},
            ],
        },
        {
            title: 'This is a Question 2',
            mcqType: false,
            marks: 1,
            mcqQuestions:[
                {mcqTitle: 'This is a Option',answer: false},
                {mcqTitle: 'This is a Option 2',answer: false},
                {mcqTitle: 'This is a Option 2',answer: true},
                {mcqTitle: 'This is a Option 2',answer: false},
            ],
        },
        {
            title: 'This is a Question 3',
            mcqType: true,
            marks: 1,
            mcqQuestions:[
                {mcqTitle: 'This is a Option',answer: false},
                {mcqTitle: 'This is a Option 2',answer: true},
                {mcqTitle: 'This is a Option 2',answer: true},
                {mcqTitle: 'This is a Option 2',answer: false},
            ],
        },
        {
            title: 'This is a Question 4',
            mcqType: true,
            marks: 1,
            mcqQuestions:[
                {mcqTitle: 'This is a Option',answer: false},
                {mcqTitle: 'This is a Option 2',answer: true},
                {mcqTitle: 'This is a Option 2',answer: true},
                {mcqTitle: 'This is a Option 2',answer: false},
            ],
        }
    ],
};

export default data;
