export default {
    template:/* html */`
    <div class="icons">
    <!-- link must be passed as prop with the name twitter -->
    <a :href="objectLinks.twitter" target="_blank">
        twitter<i class="fab fa-twitter"></i>
    </a>
    <!-- link must be passed as prop with the name linkedin -->
    <a :href="objectLinks.linkedin" target="_blank">
        <i class="fab fa-linkedin"></i>
    </a>
    <!-- link must be passed as prop with the name github -->
    <a :href="objectLinks.github" target="_blank">
        <i class="fab fa-github"></i>
    </a>
    </div>`,
    props:{
        objectLinks:Object
    }
}