<% include header %> 
 
<h2>Write a new entry</h2> 
 
<form method="post" role="form">  
 <div class="form-group">   
   <label for="title">Title</label>   
     <input type="text" class="form-control" id="title"   
       [CA]name="title" placeholder="Entry title" required> 
         </div> 
           <div class="form-group">  
              <label for="content">Entry text</label>  
                 <textarea class="form-control" id="content" name="content"    
                  [CA]placeholder="Love Express! It's a great tool for    
                   [CA]building websites." rows="3" required></textarea>   
            </div> 
         <div class="form-group">  
                <input type="submit" value="Post entry" class="btn btn-primary"> 
  </div>
 </form> 
 
<% include footer %>