export default {
    beforeCreate(event) {
        console.log(`event:`, JSON.stringify(event));
        // event.params.data.link = "xxxx";
    }
}