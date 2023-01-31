class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <ul class="navbar-nav justify-content-start">
                        <li class="nav-item">
	        		<a class="navbar-brand" href="#logo">Home</a>
	      		</li>
	      		<li class="nav-item">
	        		<a class="navbar-brand" href="#tabs">Gallery</a>
	      		</li>
			<li class="nav-item">
	        		<a class="navbar-brand" href="#Advisory">Videos</a>
	      		</li>
                       <li class="nav-item">
	        		<a class="navbar-brand" href="https://drive.google.com/drive/folders/175lGyDZOSrjz8S1g3JOkRpJYdRGyu-AW" target="_blank">Har Ghar Tiranga</a>
	      		</li>
                       <li class="nav-item">
	        		<a class="navbar-brand" href="https://drive.google.com/drive/folders/1dn1kPQCsIUDZz5S99js5wzJnbJ0cpRw4" target="_blank">Selfie with Flag</a>
	      		</li> 
                       <li class="nav-item">
	        		<a class="navbar-brand" href="#flag">National Flag Hoisted at GVPCE(A)</a>
	      		</li>
                       <li class="nav-item">
	        		<a class="navbar-brand" href="#news">News Article</a>
	      		</li>
                        <li class="nav-item">
	        		<a class="navbar-brand" href="https://www.youtube.com/watch?v=hfCtXONnFj0" target="_blank">‘ఆజాది కా అమృత్ మహోత్సవ్’</a>
	      		</li> 
                       
                        
	    	</ul>
             `
    }
}

customElements.define('my-header', MyHeader)

