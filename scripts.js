
        var avatar = document.getElementById('avatar');
        var mypic = document.getElementById('mypic');
        var jumpscare = document.getElementById('jumpscare');

        avatar.addEventListener('click', function() {
            mypic.style.display = 'none';
            jumpscare.style.display = 'block';
        });

        jumpscare.addEventListener('click', function() {
            mypic.style.display = 'block';
            jumpscare.style.display = 'none';
        });

        mypic.addEventListener('click', function() {
            mypic.src = 'img/catsss.jpeg'; 
        });
    
