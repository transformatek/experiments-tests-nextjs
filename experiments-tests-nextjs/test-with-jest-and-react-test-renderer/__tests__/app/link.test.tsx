import renderer, { ReactTestRendererJSON } from 'react-test-renderer';
import Link from '../../src/app/link';

it('changes the class when hovered', () => {
    const component = renderer.create(
        <Link page="http://www.facebook.com">Facebook</Link>,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // manually trigger the callback
    renderer.act(() => {
        (tree as ReactTestRendererJSON[])[0].props.onMouseEnter();  // Access the first element's props
    });
    // re-rendering
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // manually trigger the callback
    renderer.act(() => {
        (tree as ReactTestRendererJSON[])[0].props.onMouseLeave();  // Access the first element's props
    });
    // re-rendering
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
