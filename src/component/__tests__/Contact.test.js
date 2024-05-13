import React from 'react'
import {render,screen} from '@testing-library/react'

import ContactUs from "../ContactUs"
import '@testing-library/jest-dom'


 describe("ContactUsPage",()=>{
    test('should load contact us page',()=>{
        render(<ContactUs/>)
        const heading = screen.getByRole("heading")
        expect(heading).toBeInTheDocument();
        
        })
        
        test('should button is there contact us page',()=>{
            render(<ContactUs/>)
            const button = screen.getByRole("button")
            expect(button).toBeInTheDocument();
            
            })
        
            test('should losd na is there contact us page',()=>{
                render(<ContactUs/>)
                const text = screen.getByPlaceholderText("name")
                expect(text).toBeInTheDocument();
                
                })
        
                test('should inputbox', () => {
                    render(<ContactUs/>);
                    const inputBoxes = screen.getAllByTestId("contact-name-input");;
                    console.log(inputBoxes);
                });
 })
