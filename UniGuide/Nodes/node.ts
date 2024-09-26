class GNode {
    value: string       // name of location
    neighbors: GNode[]      // array of neighboring locations/nodes
    type: string        // type of node; hostel, faculty or bank etc.

    constructor (val: string, type: string){
        this.value = val
        this.neighbors = []
        this.type = type
    }

    addNeighbor(node: GNode){       // adds node that is close to it to the array of neighbprs
        this.neighbors.push(node)
    }
}


// Hostels
const fagunwa = new GNode("Fagunwa Hall", "hostel")
const elKanemi = new GNode("El Kanemi Hall", "hostel")
const kofo = new GNode("Kofo Ademola Hall", "hostel")
const biobaku = new GNode("Saburi Biobaku Hall", "hostel")
const amina = new GNode("Queen Amina Hall", "hostel")
const makama = new GNode("Aliyu Makama-Bida Hall", "hostel")
const femihall = new GNode("Femi Gbajabiamila Hall", "hostel")
const mth = new GNode("Madam Tinubu Hall", "hostel")
const eniNjoku = new GNode("Eni Njoku Hall", "hostel")
const sodeinde = new GNode("Sodeinde Hall", "hostel")
const moremi = new GNode("Queen Moremi Hall", "hostel")
const honours = new GNode("Honour's Hall", "hostel")
const mariere = new GNode("Mariere Hall", "hostel")
const jaja = new GNode("King Jaja Hall", "hostel")
const womenSociety = new GNode("Women Society", "hostel")


// Banks
const zenith = new GNode("Zenith Bank", "bank") 
const gtb = new GNode("Guaranty Trust Bank", "bank")
const access = new GNode("Access Bank", "bank")
const wema = new GNode("Wema Bank", "bank")
const uba = new GNode("United Bank of Africa", "bank")
const firstbank = new GNode("First Bank", "bank")
const ecobank = new GNode("EcoBank", "bank")


// medical
const medCentre = new GNode("Medical Centre", "medical")
const unilagPharmacy = new GNode("Unilag Pharmacy", "medical")
const newhallPharmacy = new GNode("New Hall Pharmacy", "medical")


// Faculties
const education = new GNode("Faculty of education", "faculty")
const science = new GNode("Faculty of Science", "faculty")
const engineering = new GNode("Faculty of Engineering", "faculty")
const fss = new GNode("Faculty of Social Science", "faculty")
const art = new GNode("Faculty of Art", "faculty")
const envScience = new GNode("Faculty of Environmental Sceince", "faculty")
const spgs = new GNode("School of Post-graduate Studies", "faculty")
const sfs = new GNode("School of Foundation Studies", "faculty")
const dli = new GNode("Distance Learning Institute", "faculty")
const law = new GNode("Faculty of Law", "faculty")


// church and mosque
const chapel = new GNode("Chapel of Christ our light", "worship")
const mosque = new GNode("Unilag Islamic Centre", "worship")


// landmarks 
const lagoon = new GNode("Lagoon Front", "landmark")
const sports = new GNode("Sports Centre", "landmark")
const cits = new GNode("Centre for Information and Technology System", "landmark")
const guestHouse = new GNode("Guest House", "landmark")
const library = new GNode("Main Library", "landmark")


// auditoriums
const mainAud = new GNode("J.F. Ade. Ajayi Auditorium (Main Auditorium)", "auditorium")
const nultipurposeHall = new GNode("Jelili Adebisi Omotola Hall (UNILAG Multi-Purpose Hall)", "auditorium")

