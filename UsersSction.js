import CardUsers from "./Components/CardUsers.js";
export default{
    components:{
        CardUsers
    },
    template:/* html */`        
    <div class="row">
    <h1>Our Team</h1>
  </div>
<div class="row">
    <!-- Column 1-->
    <CardUsers :arrayUsers="users"/>
</div>
    `,
    data(){
        return{
            users:[]
        }
    },
    mounted(){
            fetch("users.json").then(res=>{
                return res.json();
            }).then(user=>{ 
                this.users=user
                return this.users
            })
        }
}