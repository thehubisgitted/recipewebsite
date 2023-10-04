<script lang="ts">
    let src="https://images.unsplash.com/photo-1635936957646-58ee765a5e46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
  
</script>

<div class="root">

    

    <div class = "blurb">
            <span>Discover New Flavors</span><span>Powered by <span class = "logo">AI</span></span>
    </div>
   
    <div class = "interface">
        <input type="text" name="user" placeholder="What are you craving?">
        <button> Find 🍴</button>
    </div>
</div>

<style>
    .root {
        font-family: 'Roboto', monospace;
        font-weight: bold;
        font-size: 200%;
        display: flex;
        align-items: center;
        flex-direction: column;
    }
       

    .logo {
        color: #730ed8;
        align-items: flex-start;
        margin-left: 2%;
    }
       
    span .logo {
        font-weight: bolder;
        margin-left: -3px;
        font-size: 110%;
    }

    .blurb {
        display: flex;
        flex-direction: column;
        margin-top: 5%;
        text-align: center;
        font-size: larger;
    }
    
    input {
        display: flex;
        width: 40%;
        vertical-align: middle;
        border-radius: 25px;
        border: 2px solid #730ed8;
        padding: 13px; 
        text-align: center;
        font-size: 90%;
      

    
    }
    input:focus {
    outline: none !important;
    border:1px solid #730ed8;
    box-shadow: 0 0 10px #730ed8;
  }

    button {
        width: 10%;
        display: flex;
        height: 60px;
        min-width:20px;
        flex-direction: row;
        margin-left: 5px;
        vertical-align: middle;
        background-color: #730ed8;
        padding: 13px;
        border-radius: 25px;
        text-align:center;
        border: none;
        justify-content: center;
        align-items: center;
        color:white;
        font-size: large;
        font-weight: 600;
    }
    button:hover {
        box-shadow: 0 0 10px #999; /* Add shadow effect on hover */
    }
    
    .interface {
        margin-top: 3%;
        width: 100%;
        min-height: 100%;
        display:flex;
        justify-content: center;
        align-items: center;
       
    }
               
        

</style>