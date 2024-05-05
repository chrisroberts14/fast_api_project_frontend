import {CardSlider} from "../card_slider/card_slider";
import { CreatePersonForm } from "../person_create/person_create";
import {SliderDirection} from "../../constants";
import { EventForm } from "../event_create/event_create";
import React from "react";

export function Sliders() {
    return (
        <>
            <CardSlider
                card={<CreatePersonForm />}
                direction={SliderDirection.Up}
                />
            <CardSlider
                card={<EventForm />}
                direction={SliderDirection.Down}
            />
        </>
    );
}