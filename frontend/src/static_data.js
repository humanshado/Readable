const posts = [
        {
            id: "post1",
            title: "I love Working with React",
            author: { username: "user1", name: "User 1" },
            deleted: false,
            category: "react",
            voteCount: 0,
            body: "1 - Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur",
            comments: [
                {
                    id: "comment1",
                    author: { username: "user2", name: "User 2" },
                    comment: "1st comment made by user 1",
                },
                {
                    id: "comment2",
                    author: { username: "user3", name: "User 3" },
                    comment: "2nd comment made by user 3",
                }
            ],
            //commentsCount: commentscomments.length || 0
        },
        {
            id: "post2",
            title: "Redux is Hard to Understand",
            author: { username: "user2", name: "User 2" },
            deleted: false,
            category: "redux",
            voteCount: 0,
            body: "2 - Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur",
            comments: [
                {
                    id: "comment3",
                    author: { username: "user3", name: "User 3" },
                    comment: "3rd comment made by user 3"
                },
                {
                    id: "comment4",
                    author: { username: "user1", name: "User 1" },
                    comment: "4th comment made by user 1"
                },
                {
                    id: "comment5",
                    author: { username: "user3", name: "User 3" },
                    comment: "5th comment made by user 3"
                }
            ],
            //commentsCount: comments.length || 0
        },
        {
            id: "post3",
            title: "React is an Awesome JS Framework",
            author: { username: "user2", name: "User 2" },
            deleted: false,
            category: "react",
            voteCount: 0,
            body: "3 - Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur",
            comments: [
                {
                    id: "comment6",
                    author: { username: "user2", name: "User 2" },
                    comment: "6th comment made by user 2"
                },
                {
                    id: "comment7",
                    author: { username: "user1", name: "User 1" },
                    comment: "7th comment made by user 1"
                }
            ],
            //commentsCount: comments.length || 0
        },
        {
            id: "post4",
            title: "Udacity Has Created an Innovative Way of Learning",
            author: { username: "user3", name: "User 3" },
            deleted: false,
            category: "udacity",
            voteCount: 0,
            body: "4 - Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur",
            comments: [
                {
                    id: "comment8",
                    author: { username: "user2", name: "User 2" },
                    comment: "8th comment made by user 2",
                },
                {
                    id: "comment9",
                    author: { username: "user2", name: "User 2" },
                    comment: "9th comment made by user 2",
                },
                {
                    id: "comment10",
                    author: { username: "user3", name: "User 3" },
                    comment: "10th comment made by user 3",
                }
            ],
            //commentsCount: comments.length || 0
        },
        {
            id: "post5",
            title: "I love Working with React II",
            author: { username: "user1", name: "User 1" },
            deleted: false,
            category: "react",
            voteCount: 0,
            body: "5 - Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur",
            comments: [
                {
                    id: "comment11",
                    author: { username: "user2", name: "User 2" },
                    comment: "11th comment made by user 1",
                },
                {
                    id: "comment12",
                    author: { username: "user3", name: "User 3" },
                    comment: "12th comment made by user 3",
                }
            ],
            //commentsCount: commentscomments.length || 0
        },
        {
            id: "post6",
            title: "Redux is Hard to Understand II",
            author: { username: "user2", name: "User 2" },
            deleted: false,
            category: "redux",
            voteCount: 0,
            body: "6 - Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur",
            comments: [
                {
                    id: "comment13",
                    author: { username: "user3", name: "User 3" },
                    comment: "13th comment made by user 3"
                },
                {
                    id: "comment14",
                    author: { username: "user1", name: "User 1" },
                    comment: "14th comment made by user 1"
                },
                {
                    id: "comment15",
                    author: { username: "user3", name: "User 3" },
                    comment: "15th comment made by user 3"
                }
            ],
            //commentsCount: comments.length || 0
        },
        {
            id: "post7",
            title: "React is an Awesome JS Framework II",
            author: { username: "user2", name: "User 2" },
            deleted: false,
            category: "react",
            voteCount: 0,
            body: "7 - Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur",
            comments: [
                {
                    id: "comment16",
                    author: { username: "user2", name: "User 2" },
                    comment: "16th comment made by user 2"
                },
                {
                    id: "comment17",
                    author: { username: "user1", name: "User 1" },
                    comment: "17th comment made by user 1"
                }
            ],
            //commentsCount: comments.length || 0
        },
        {
            id: "post8",
            title: "Udacity Has Created an Innovative Way of Learning II",
            author: { username: "user3", name: "User 3" },
            deleted: false,
            category: "udacity",
            voteCount: 0,
            body: "8 - Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur",
            comments: [
                {
                    id: "comment18",
                    author: { username: "user2", name: "User 2" },
                    comment: "18th comment made by user 2",
                },
                {
                    id: "comment19",
                    author: { username: "user2", name: "User 2" },
                    comment: "19th comment made by user 2",
                },
                {
                    id: "comment20",
                    author: { username: "user3", name: "User 3" },
                    comment: "20th comment made by user 3",
                }
            ],
            //commentsCount: comments.length || 0
        }
    ]
