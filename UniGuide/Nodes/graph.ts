class Graph{
    nodes: GNode[]

    constructor(node? : GNode){
        this.nodes.push(node!)
    }

    addNewLocation(val:string, type:string){
        const node = new GNode(val, type)
        this.nodes.push(node)
    }

    addLocation(node: GNode){
        this.nodes.push(node)
    }

    addEdge(sourceNode: GNode, destinationNode: GNode){
        sourceNode.addNeighbor(destinationNode)
        destinationNode.addNeighbor(sourceNode)
    }

}

const unilagMapGraph = new Graph()
unilagMapGraph.addLocation(fagunwa)
unilagMapGraph.addLocation(mth)
unilagMapGraph.addEdge(mth, fagunwa)        // mth to fagunwa
unilagMapGraph.addLocation(makama)
unilagMapGraph.addEdge(fagunwa, makama)     // fagunwa to makama 
unilagMapGraph.addLocation(sodeinde)
unilagMapGraph.addEdge(makama, sodeinde)        // makama to sodeinde
unilagMapGraph.addLocation(eniNjoku)
unilagMapGraph.addEdge(sodeinde, eniNjoku)      // sodeinde to eni njoku


