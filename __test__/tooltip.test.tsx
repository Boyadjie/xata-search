import '@testing-library/jest-dom'
import {render, screen} from "@testing-library/react";
import {Tooltip} from "~/components/tooltip";

describe("<Tooltip />", () => {
    it("should render" ,  () => {
        const ratingValue = 5;
        render(<Tooltip animate={false} votedRate={ratingValue} />)

        const rating = screen.getByText(`You rated: ${ratingValue}`);

        expect(rating).toBeVisible();
    });
})
