import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/pages/home/home.component';
import { AweSectionComponent } from './components/dependent/home/awe-section/awe-section.component';
import { NavbarComponent } from './components/public/navbar/navbar.component';
import { SectionCategoryComponent } from './components/dependent/home/section-category/section-category.component';
import { SliderComponent } from './components/dependent/home/slider/slider.component';
import { SectionDesignComponent } from './components/dependent/home/section-design/section-design.component';
import { ButtonDesignComponent } from './components/public/button-design/button-design.component';
import { SectionProductComponent } from './components/dependent/home/section-product/section-product.component';
import { DiscountBadgeComponent } from './components/public/discount-badge/discount-badge.component';
import { SectionVideoComponent } from './components/dependent/home/section-video/section-video.component';
import { YouTubePlayerModule } from "@angular/youtube-player";
import { VideoTabComponent } from './components/public/video-tab/video-tab.component';
import { SectionFeedbackComponent } from './components/dependent/home/section-feedback/section-feedback.component';
import { SectionFeedbackItemComponent } from './components/dependent/home/section-feedback-item/section-feedback-item.component';
import { SectionBannerComponent } from './components/dependent/home/section-banner/section-banner.component';
import { SectionNewsComponent } from './components/dependent/home/section-news/section-news.component';
import { SectionNewsItemComponent } from './components/dependent/home/section-news-item/section-news-item.component';
import { SectionRegisInfoComponent } from './components/dependent/home/section-regis-info/section-regis-info.component';
import { FooterComponent } from './components/public/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AweSectionComponent,
    NavbarComponent,
    SectionCategoryComponent,
    SliderComponent,
    SectionDesignComponent,
    ButtonDesignComponent,
    SectionProductComponent,
    DiscountBadgeComponent,
    SectionVideoComponent,
    VideoTabComponent,
    SectionFeedbackComponent,
    SectionFeedbackItemComponent,
    SectionBannerComponent,
    SectionNewsComponent,
    SectionNewsItemComponent,
    SectionRegisInfoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    YouTubePlayerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
