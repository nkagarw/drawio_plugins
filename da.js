/**
 * This plugin dynamically loads cell attributes from a remote source
 */
 Draw.loadPlugin(function(ui) {
    var graph = editorUi.editor.graph;
    var model = graph.getModel();
    var sourceUrl = urlParams['attribute-source'];

    console.log(sourceUrl);

    let map = [{
        "id":"ems",
        "attributes":[{
            "key":"description",
            "value":"Experience Management System"
        }, {
            "key":"wiki",
            "value":"https://wiki.intuit.com/ems"
        }]
    }, {
        "id":"pmec",
        "attributes":[{
            "key":"description",
            "value":"Product Marketing Experience Collection"
        }, {
            "key":"wiki",
            "value":"https://wiki.intuit.com/pmec"
        }]
    }]; 

    if (sourceUrl != null) {
        model.beginUpdate();

        try {
            console.log(model.getRoot());
            for(let cell of model.getDescendants(model.getRoot())) {
                let d = map.filter(item => item.id == cell.getId());
                if(d)
                    for(let attr of d.attributes)
                        cell.setAttribute(attr.key, attr.value);
                
            }
        } finally {
            model.endUpdate();
        }
    }
 });