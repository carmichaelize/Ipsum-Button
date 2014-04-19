;(function() {

    var content = [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed ante magna. Praesent euismod ornare quam sed gravida. Donec vitae suscipit lacus. Mauris a semper quam, id ullamcorper eros. Morbi eu facilisis velit. Duis gravida elit sollicitudin, dapibus enim id, dictum ipsum. Nunc sit amet augue augue. Nam in nisl sit amet nibh ornare faucibus. Pellentesque at fermentum ipsum. In ipsum mi, ultrices ut mauris ut, pharetra hendrerit justo. Aliquam ac facilisis felis, id consectetur augue. Praesent vulputate interdum neque tempus pretium. Vestibulum rutrum lectus vitae libero ultricies suscipit. Ut pellentesque, diam at porttitor rutrum, massa libero mollis diam, et consectetur nunc ligula nec lorem. Morbi feugiat rutrum ante elementum dictum.",
            "Duis tempor dapibus ante, vitae viverra risus facilisis quis. Nullam hendrerit magna quis interdum elementum. Integer eu eleifend lorem, at pellentesque justo. Fusce ut consequat mauris. Nunc egestas tempor massa in porta. Fusce facilisis sit amet nulla vel convallis. Cras ac elit at lorem accumsan tristique nec ut magna. Aliquam dignissim pretium lorem vel euismod. Vivamus posuere nisl non rhoncus tincidunt.",
            "Nunc posuere nunc sapien, ac sodales nunc suscipit nec. Cras at ante vehicula purus ullamcorper tincidunt. Integer elementum leo ante, in venenatis mauris consectetur ac. Mauris et nulla felis. Aenean sit amet quam sit amet sem lacinia vestibulum. Vestibulum imperdiet arcu nec metus ullamcorper volutpat. Nam arcu mauris, accumsan vel enim ultrices, sollicitudin pulvinar ligula. Phasellus at laoreet turpis.",
            "Proin fermentum nisl vel blandit faucibus. Proin aliquet lacinia arcu non pellentesque. Quisque laoreet pellentesque massa, eu consectetur odio volutpat ac. Morbi imperdiet accumsan odio, id tincidunt ipsum egestas eget. Sed gravida nunc a rhoncus facilisis. Cras in tincidunt odio. Ut lacinia consectetur ipsum vulputate mollis. Quisque feugiat diam vitae dui congue, sit amet sagittis ante pellentesque. Phasellus at elit et ante sollicitudin aliquet. Nunc dapibus vestibulum felis vel bibendum. Suspendisse gravida congue sagittis. Cras eget lectus orci. Nullam eleifend, orci eu dapibus lacinia, urna sem viverra nunc, vel malesuada enim nulla sit amet est. Sed augue sem, pretium et auctor vitae, tincidunt et eros. Aliquam cursus, sem vel pharetra mattis, sem ligula blandit tortor, in interdum nisi diam at tortor. Aenean eget magna eget quam condimentum tempor id eget eros.",
            "Phasellus libero turpis, mattis quis condimentum eu, imperdiet et nulla. Nulla et massa consectetur, accumsan arcu ac, pulvinar augue. Integer sed purus sollicitudin, fermentum ante vulputate, sodales leo. Fusce cursus sapien in egestas vehicula. Mauris ut porta orci. In porta felis quis justo scelerisque fringilla. Mauris in libero non erat aliquet tincidunt. Aliquam a felis tristique, ultrices urna sed, congue quam. Suspendisse elementum, sem in vehicula ullamcorper, odio metus scelerisque purus, quis faucibus felis risus non arcu.",
            "Integer eget velit a est luctus rhoncus et condimentum diam. Curabitur velit nibh, rhoncus ac suscipit ut, sodales in quam. Praesent consectetur, magna id blandit viverra, arcu risus aliquam lorem, at molestie arcu odio sit amet est. Nunc in sapien tellus. Donec ultricies purus ut nibh cursus eleifend. Etiam nisl nisi, semper id neque vitae, luctus lacinia nibh. Vivamus ultricies dapibus dolor a luctus. Nunc sapien lacus, scelerisque at eros blandit, vestibulum eleifend est. Vestibulum porttitor condimentum leo.",
            "In hac habitasse platea dictumst. In hendrerit erat at magna tristique bibendum. Sed rhoncus fringilla ullamcorper. Ut congue, dolor in varius interdum, leo tellus fringilla velit, vitae rutrum est magna eget nisi. Fusce et nulla id dolor tempus molestie non vitae enim. Donec gravida est dui, condimentum semper nisl accumsan sagittis. Sed lacinia, turpis nec luctus luctus, justo nibh aliquet purus, id sodales leo nulla eget neque. Nam malesuada sed justo eget dictum.",
            "Nam commodo fermentum magna, at ultrices velit aliquam sed. Morbi condimentum massa sem, sed porttitor enim iaculis nec. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce ac libero fringilla, rutrum nunc quis, malesuada orci. Aliquam pharetra orci sed facilisis fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Cras consectetur semper lacus, eu egestas erat aliquet in. Ut ut leo sem. In faucibus malesuada lacus, vel dapibus metus faucibus sit amet.",
            "Nullam placerat quis dui at luctus. Fusce dignissim vestibulum nunc quis iaculis. Phasellus malesuada nulla nec est tincidunt tincidunt. Duis bibendum ipsum a metus vestibulum, at aliquam nibh rhoncus. Aenean eget lobortis est, consequat accumsan lectus. Cras dignissim arcu ultricies, consectetur lacus sed, dignissim eros. Phasellus vel lectus euismod, sagittis ipsum sit amet, ultricies tortor. Proin vitae eros metus. Sed sem nulla, consectetur eu tincidunt sed, congue at velit. Suspendisse potenti. Integer convallis massa eu interdum interdum. Aliquam ac tortor sit amet mauris tristique pharetra. Quisque tristique turpis leo, in malesuada elit ultrices ac. Sed felis urna, gravida ac tempus ut, dapibus sit amet elit. Aliquam feugiat tempus lectus vitae sodales. Maecenas viverra id mauris vel vestibulum.",
            "Sed sodales placerat ligula facilisis pretium. Nunc cursus eros odio, ut faucibus tortor porttitor ut. Fusce fermentum lorem elit, in congue ante blandit non. Cras blandit arcu eu tempor mattis. Praesent commodo tincidunt sollicitudin. Nulla facilisi. Nulla molestie arcu purus, ut luctus est vehicula sed. Suspendisse nec tristique velit, tincidunt rutrum enim. Proin sodales, odio vitae congue consectetur, purus ligula congue eros, id rutrum nunc risus eu lorem. Phasellus faucibus magna vitae tortor aliquet, nec ullamcorper erat malesuada. Nulla suscipit vitae nunc vitae pulvinar. Donec auctor mollis consequat. Pellentesque turpis libero, facilisis vel dignissim a, pulvinar at mauris."
        ],
        length = content.length,
        count,
        theContent = function(){
            var index = Math.floor( Math.random() * length );
            if( count != index ){
                count = index;
                return '<p>'+content[index]+'</p>';
            }
            return theContent();
        };

    tinymce.create('tinymce.plugins.Ipsum', {
        init : function(ed, url) {

            //Add Button
            ed.addButton('lorem', {
                title : 'Lorem Ipsum',
                cmd : 'lorem'
                //image : url + '/dropcap.jpg'
            });

            //Add Button Event
            ed.addCommand('lorem', function() {
                //var selected_text = ed.selection.getContent();
                return ed.execCommand( 'mceInsertContent', 0, theContent() );
            });

        }
    });

    // Register plugin
    tinymce.PluginManager.add( 'ipsum', tinymce.plugins.Ipsum );

})();