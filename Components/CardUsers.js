import IconsLinks from "./IconsLinks.js"
export default {
    components:{
        IconsLinks
    },
    template:/* html */`
        <div class="column" v-for="(user) in arrayUsers" :key="user.id">
                    <div class="card">
                        <div class="img-container">
                        <img :src="user.image" />
                        </div>
                        <!-- this must come as slot with the name fullName -->
                        <h3>{{user.name}}</h3>
                        <!-- this must come as slot with the name role -->
                        <p>{{user.jop}}</p>
                        <!-- this must come as slot with the name brief -->
                        <p class="brief">
                        
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxim.
                        </p>
                        <IconsLinks :objectLinks="user.link"/>
                    </div>
                    </div>  
                `,
                data(){
                    return {

                    }
                },
                props:{
                    arrayUsers:Array
                }
}