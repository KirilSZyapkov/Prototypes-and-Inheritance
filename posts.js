function posts() {
    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }

        toString() {
            return `Post: ${this.title}\nContent: ${this.content}`;
        }
    }

    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.likes = likes;
            this.dislikes = dislikes;
            this.comments = [];
        }

        addComment(string) {
            this.comments.push(` * ${string}`);
        }

        toString() {
            let toPrint = this.comments;
            if (toPrint.length > 0) {
                return super.toString() + `\nRating: ${this.likes - this.dislikes}` + `\nComments:` + `\n${toPrint.join('\n')}`
            } else {
                return super.toString() + `\nRating: ${this.likes - this.dislikes}`;
            }


        }
    }

    class BlogPost extends Post {
        constructor(title, content, views) {
            super(title, content);
            this.views = views;
        }

        view() {
            this.views++
            return this;
        }

        toString() {
            return super.toString() + `\nViews: ${this.views}`;
        }
    }

    return {Post, SocialMediaPost, BlogPost}
}

let classes = posts();

let test = new classes.SocialMediaPost("TestTitle", "TestContent", 5, 10);

test.addComment("1");
test.addComment("2");
test.addComment("3");

console.log(test.toString());

expect(test.toString()).to.be.equal(
    "Post: TestTitle\n" +
    "Content: TestContent\n" +
    "Rating: -5\n" +
    "Comments:\n" +
    " * 1\n" +
    " * 2\n" +
    " * 3",
    "'SocialMediaPost toString()' function does not return correct results");

