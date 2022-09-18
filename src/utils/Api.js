import axios from 'axios';



const url = "https://public.opendatasoft.com/api/records/1.0/search/?dataset=annuaire-des-professionnels-de-sante&q=dentiste&rows=10&start=0&facet=civilite&facet=exercice_particulier&facet=nature_exercice&facet=convention&facet=sesam_vitale&facet=types_actes&facet=codes_ccam&facet=nom_epci&facet=nom_dep&facet=nom_reg&facet=nom_com&facet=libelle_profession"
export const getFilteredDentist = async ()=>{
    try {
        const resp = await axios.get(`${url}&refine.nom_reg=${""}&refine.nom_dep=${""}&refine.nom_com=${""}`);
        return resp.data

    } catch (error) {
        console.log(error)
    }
   

}

