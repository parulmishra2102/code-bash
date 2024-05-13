import { render } from "@testing-library/react"
import Restrauntcard from "../Restrauntcard"
import MOCK_DATA from "../mocks/resCardData.json"

test("should render restaurant card with props data", () => {
    const detail = {
        info: {
            cloudinaryImageId: "cloudinary-image-id",
            name: "Restaurant Name",
            cuisines: ["Cuisine1", "Cuisine2"],
            avgRating: 4.5
        }
    };
    console.log(detail,'detail')
    render(<Restrauntcard detail={MOCK_DATA} />)
const name= screen.getBytext("Mealful Rolls - India's Biggest Rolls")
expect(name).toBeInTheDocument();
})