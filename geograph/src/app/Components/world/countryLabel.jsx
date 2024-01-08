export const CountryLabel = ({properties})=>{
    return `<div className="queso">
        <b class='queso'>${properties.name}</b><br/>
        GDP: <i>${properties.gdp_md_est}</i>M$<br/>
        Population: <i>${properties.pop_est}</i>
    </div>`
}