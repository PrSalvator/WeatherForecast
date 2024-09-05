import { ICityDto } from "@/entities/city";

interface ICityListItemProps{
    data: ICityDto
}

export const CityListItem = ({data}: ICityListItemProps) => {
    return (
        <div>
            <h1>{data.name}</h1>
            <p>{data.state} {data.country}</p>
        </div>
    )
}