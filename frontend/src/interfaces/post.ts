export default interface Post {
    id: number;
    attributes: {
        description?: string;
        pubDate: Date;
        guid?: string;
        link?: string;
        title?: string;
        slug?: string;
    }
}