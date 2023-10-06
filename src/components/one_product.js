import Img from './product_img';
import Name from './product_name';
import Price from './product_price';

function OneProduct(props) {
    return (
        <>
            <div class="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat"  >
                <a href="/detail">
                    <div class="featured__item">
                        <div class="featured__item__pic set-bg">
                            <Img data={props.data.url} />
                            <ul class="featured__item__pic__hover">
                                <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                            </ul>
                        </div>
                        <div class="featured__item__text">
                            <Name data={props.data.name} />
                            <Price data={props.data.price} />
                        </div>
                    </div>
                </a>
            </div>
        </>
    )
}
export default OneProduct