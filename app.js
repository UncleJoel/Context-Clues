
    console.log('start of script');



    var friends = ['Nathan', 'Josh', 'Stone', 'Kelsy', 'lauren'];
    var local = ['treehouse', 'pool', 'garage', 'living room', 'kitchen', 'bathroom', 'dinning room', 'shed', 'hottub', 'bedroom'];
    var weapon = ['knife', 'pistol', 'rifle', 'pool cue', 'coffee pot', 'sausage', 'waffle', 'dvd', 'sweet jams', 'pillow', 'chlorine',
        'fork', 'candle', 'candlestick', 'labtop', 'cat', 'table saw', 'fire poker', 'lamp', 'mix tape'];

        document.addEventListener('DOMContentLoaded', function(){
    // inserting 100 H3 Elements
    for (var i = 0; i < 100; i++) {
        console.log(i);
        var head = document.createElement('h3');
        head.innerHTML = 'Accusation ' + (i + 1);
        //making arrays a set
        var group = {
            num: 1,
            friends : friends[Math.floor(Math.random() * friends.length)],
            local : local[Math.floor(Math.random() * local.length)],
            weapon : weapon[Math.floor(Math.random() * weapon.length)]
        };
        // binding the group to an object
        head.addEventListener('click', config.bind(group));
        document.body.appendChild(head);
       }
    });
       function config() {
           alert(this.friends + " did it in " + this.local + " with a " + this.weapon);
       }

       

       

