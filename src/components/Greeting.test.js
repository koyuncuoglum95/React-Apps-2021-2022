import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greeting from './Greeting';

// This is describing which file you will test
describe('Greeting Component', () => {
    test('renders hello world greeting', () => {
        // Arrange
      render(<Greeting />);
      // Act
      // ... Nothing
      // Assert
      
      const helloWorldElement = screen.getByText('Hello World', { exact: false});
      expect(helloWorldElement).toBeInTheDocument();
    });


    test('renders good to see you if the button was not clicked', () => {
      render(<Greeting />);

      const goodSeeyouElement = screen.getByText("It's good to see you", {exact: false });
      expect(goodSeeyouElement).toBeInTheDocument();
    });

    test('renders Changed if the button is clicked', () => {
      render(<Greeting />);

     // Act
     const buttonElement = screen.getByRole('button');
     userEvent.click(buttonElement);

     // Assert
     const outputElement = screen.getByText('Changed!', { exact: false });
     expect(outputElement).toBeInTheDocument();

    });

    test('does not render "good to see you" if the button was clicked', () => {
      render(<Greeting />);

     // Act
     const buttonElement = screen.getByRole('button');
     userEvent.click(buttonElement);

     // Assert
     const outputElement = screen.queryByText("It's good to see you", { exact: false });
     expect(outputElement).toBeNull();
    })
    
});

