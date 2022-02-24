// Task 12a
const { User, Post, Subbreaddit, sequelize, Sequelize: { Op } } = require('./models');

// Task 12b
async function createUser(name, faveBread, email, password) {
    const user = await User.create({
        name,
        faveBread,
        email,
        password
    })

    console.log(user.name)

    sequelize.close()
};

// createUser('ray', 'garlic bread', 'ray@ray.ray', 'garlicbreadisbest1')

// Task 12c
async function buildPost(title, content, userId, subId) {
    const post = Post.build({
        title,
        content,
        userId,
        subId
    })

    await post.save()

    console.log(post.content)

    sequelize.close()
}

// buildPost('This is a good post', 'this is a post that is totaly a valubale addition to this website', 5, 1)

// Task 13a
async function findUserByPk(userId) {
    const user = await User.findByPk(userId, {})

    console.log(user)

    sequelize.close()
}

// findUserByPk(5)

// Task 13b
async function getAllPosts() {
    const posts = await Post.findAll()

    console.log(posts[0].title)

    sequelize.close()
}

// getAllPosts()

// Task 13c
async function findUserByEmail(email) {
    const user = await User.findOne({
        where: {
            email: email
        }
    })

    console.log(user)

    sequelize.close()
}

// findUserByEmail('bread@aioli.com')

// Task 13d
async function getPostsBySub(subId) {
    const posts = await Post.findAll({
        where: {
            subId
        }
    })

    console.log(posts)

    sequelize.close()
}

// getPostsBySub(1)

// Task 13e
async function getAllPostsBySubAndUserIds(subId, userId) {
    const posts = await Post.findAll({
        where: {
            subId,
            userId
        }
    })

    console.log(posts)

    sequelize.close()
}

// getAllPostsBySubAndUserIds(1, 1)

// Task 13f
async function getPostsBySearch(term) {
    const posts = await Post.findAll({
        where: {
            content: {
                [Op.iLike]: `%${term}%`
            }
        }
    })

    console.log(posts)

    sequelize.close()
}

// getPostsBySearch('test')
// Task 13g
async function getPostsAndOrder() {
    const posts = await Post.findAll({
        order: [['subId', 'DESC'], ['userId']],
        limit: 3,
        raw: true
    })

    console.log(posts);

    sequelize.close()
}

// getPostsAndOrder()

// Task 14a
async function editPost(newContent, postId) {
    const post = await Post.findByPk(postId)

    post.content = newContent

    await post.save()

    sequelize.close()
}

// editPost('this is an editted post', 6)

// Task 14b
async function destroyUser(userId) {
    const user = await User.findByPk(userId)

    await user.destroy()

    sequelize.close()
}

// destroyUser(5)

// Task 15a
async function getUserAndPosts(userId) {
    const user = await User.findByPk(userId, {
        include: Post
    })

    console.log(user.Posts[0].title)

    sequelize.close()
}

getUserAndPosts(1)

// Task 15b
async function getPostAndDeets(postId) {
    const post = await Post.findByPk(postId, {
        include: [User, Subbreaddit]
    })

    console.log(post.User.name)
    console.log(post.Subbreaddit.name)
    console.log(post.title)

    sequelize.close()
}

// getPostAndDeets(3)

// Task 15c
async function getUserAndPostsPlusDeets(userId) {
    const user = await User.findByPk(userId, {
        include: {
            model: Post,
            include: Subbreaddit
        }
    })

    console.log(user.Posts[0].Subbreaddit.name)

    sequelize.close()
}

// getUserAndPostsPlusDeets(2)

async function testInclude(userId) {
    const user = await User.findByPk(userId, {
        include: [Post, Subbreaddit]
    })

    const sub = await Subbreaddit.findByPk(subId, {
        include: Post
    })
}