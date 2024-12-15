"use client";
import { Card } from "@/components/ui/card";
import { useState,useEffect } from "react";

export default function Home() {
  const fetchItems = async (keyword: string) => {
    try {
      const response = await fetch(
        `https://app.rakuten.co.jp/services/api/IchibaItem/Search/20220601?format=json&keyword=${keyword}&applicationId=1006740518069790219`
      );
      if (!response.ok) throw new Error("データの取得に失敗しました");
	    const data = await response.json();
      console.log(data.Items);
      setItems(data.Items);
    } catch (error: any) {
    
    } finally {
    
    }
  };

  useEffect(()=>{
    //初回レンダリング時にこれが実行される
    fetchItems("ゲーム");
    },[])
  
  const mockDataItems = [
    {
      Item: {
        affiliateRate: 3,
        affiliateUrl: "",
        asurakuArea: "",
        asurakuClosingTime: "",
        asurakuFlag: 0,
        availability: 1,
        catchcopy:
          "【電子書籍なら、スマホ・パソコンの無料アプリで今すぐ読める！】",
        creditCardFlag: 1,
        endTime: "",
        genreId: "209118",
        giftFlag: 0,
        imageFlag: 1,
        itemCaption:
          "＜h2＞＜strong＞【さまざま領域に活用範囲を広げる、新進気鋭の言語のポテンシャル】＜/strong＞＜/h2＞ ＜p＞本書は、Elixirの言語仕様と実践的な利用方法を解説した入門書です。＜br /＞ Elixirは、低遅延で高い可用性を要求される分散システムの構築と運用を目的とするErlang VM上で動作する言語で、その文法はRubyから大きく影響を受けています。ゲームやチャットプラットフォームなど大量のコネクションとトラフィックを扱う必要のあるシステムを構築するのに利用されています。有用なツールやライブラリが多数開発されているのも後押しとなり、近年ではさまざまな分野に活躍の場を広げつつあります。＜br /＞ 本書では、Webアプリケーション、機械学習、IoTなどでのElixirの活用方法を解説します。サンプルアプリケーションを開発しながらコードを紹介しつつ解説しています。Phoenix、Nx、Livebook、Nervesといったツールやライブラリの実践的な活用方法も紹介しているので、今の開発に即した実践的な知識が身に付けられます。＜/p＞ ＜h2＞＜strong＞■こんな方におすすめ＜/strong＞＜/h2＞ ＜p＞・なんらかのプログラミング言語（C、C++、Ruby、Python、JavaScriptなど）を習得している人で、新しい言語としてElixirを習得したい人＜/p＞ ＜h2＞＜strong＞■目次＜/strong＞＜/h2＞ ＜p＞＜strong＞第1章：Elixir小史＜/strong＞＜br /＞ 　　Elixir言語の特徴＜br /＞ 　　Erlang/OTP──Elixirの実行基盤＜br /＞ 　　Elixirの誕生＜br /＞ 　　Elixirの持つポテンシャル＜br /＞ 　　まとめ＜br /＞ ＜strong＞第2章：Elixirの基礎＜/strong＞＜br /＞ 　　Elixirのインストール＜br /＞ 　　Elixirコードの実行方法＜br /＞ 　　基本的な文法＜br /＞ 　　制御フロー＜br /＞ 　　まとめ＜br /＞ ＜strong＞第3章：基本的な型とパターンマッチ＜/strong＞＜br /＞ 　　基本的な型＜br /＞ 　　シジル──リテラルを表現する記法＜br /＞ 　　パターンマッチ──データとパターンの照合＜br /＞ 　　まとめ＜br /＞ ＜strong＞第4章：モジュール＜/strong＞＜br /＞ 　　モジュールと関数によるプログラムの構造化＜br /＞ 　　String──文字列操作を扱う標準モジュール＜br /＞ 　　File──ファイル操作を行う標準モジュール＜br /＞ 　　IO──標準入出力を扱う標準モジュール＜br /＞ 　　Enum──コレクションを「いい感じ」に扱う標準モジュール＜br /＞ 　　Map──マップを「いい感じ」に扱う標準モジュール＜br /＞ 　　Stream──コレクションを遅延評価する標準モジュール＜br /＞ 　　ExUnit──Elixirの単体テスト標準モジュール＜br /＞ 　　まとめ＜br /＞ ＜strong＞第5章：Mixを使ったElixirプロジェクトの開発＜/strong＞＜br /＞ 　　Mixの基本的な使い方＜br /＞ 　　Mixタスク──Elixir開発を支える便利なコマンド＜br /＞ 　　開発に便利なTips＜br /＞ 　　まとめ＜br /＞ ＜strong＞第6章：並行プログラミング＜/strong＞＜br /＞ 　　プロセスによる並行プログラミングの実現＜br /＞ 　　OTPによる並行プログラミングの実現＜br /＞ 　　まとめ＜br /＞ ＜strong＞第7章：Phoenixの概要＜/strong＞＜br /＞ 　　Phoenixとは何か──Elixir製のWebアプリケーションフレームワーク＜br /＞ 　　Phoenixの基礎知識＜br /＞ 　　Phoenixの基本的な使い方＜br /＞ 　　まとめ＜br /＞ ＜strong＞第8章：Ectoによるデータベース操作＜/strong＞＜br /＞ 　　Ectoとは何か──Elixir製のデータベースライブラリ＜br /＞ 　　Ectoの基礎知識＜br /＞ 　　Ectoの基本的な使い方＜br /＞ 　　まとめ＜br /＞ ＜strong＞第9章：phx.gen.authによる認証＜/strong＞＜br /＞ 　　phx.gen.authとは何か──ビルトインのMixタスク＜br /＞ 　　phx.gen.authの基礎知識＜br /＞ 　　phx.gen.authの基本的な使い方＜br /＞ 　　まとめ＜br /＞ ＜strong＞第10章：LiveViewによるフロントエンドの開発＜/strong＞＜br /＞ 　　LiveViewとは何か──Elixirで実装するリアルタイムWeb＜br /＞ 　　LiveViewの基礎知識＜br /＞ 　　LiveViewの実践的な使い方＜br /＞ 　　まとめ＜br /＞ ＜strong＞第11章：実践的なWebアプリケーションの開発＜/strong＞＜br /＞ 　　ブログアプリケーションRealWorldの実装＜br /＞ 　　記事のCRUD機能の開発＜br /＞ 　　コメント機能の開発＜br /＞ 　　タグ機能の開発＜br /＞ 　　認証機能の開発＜br /＞ 　　LiveViewによるRealWorldの開発＜br /＞ 　　デプロイ＜br /＞ 　　まとめ＜br /＞ ＜strong＞第12章：行列演算ライブラリNxの概要＜/strong＞＜br /＞ 　　Nxとは何か＜br /＞ 　　Nxの基本的な使い方＜br /＞ 　　まとめ＜br /＞ ＜strong＞第13章：Axonの概要と機械学習システム開発の進め方＜/strong＞＜br /＞ 　　Axonとは何か＜br /＞ 　　Axonの基本的な使い方＜br /＞ 　　SciDataとNxによる学習データの準備＜br /＞ 　　Axonによるモデルの構築＜br /＞ 　　Axon.Loopによるモデルの学習と可視化＜br /＞ 　　Axon.Loopによるモデルの検証＜br /＞ 　　Axon.predict/4──推論の実行＜br /＞ 　　まとめ＜br /＞ ＜strong＞第14章：機械学習向けのライブラリ＜/strong＞＜br /＞ 　　Kino──Livebook用のUIライブラリ＜br /＞ 　　StbImage──軽量画像読み書きライブラリ＜br /＞ 　　Evision──OpenCVラッパー＜br /＞ 　　Bumblebee──学習済みTransformerモデル提供ライブラリ＜br /＞ 　　まとめ＜br /＞ ＜strong＞第15章：実践的なAxonアプリケーションの開発＜/strong＞＜br /＞ 　　画像分類を行うWebアプリケーションの実装＜br /＞ 　　LiveViewページの作成＜br /＞ 　　ファイルアップロード機能の実装＜br /＞ 　　学習済みモデルでの画像分類機能の実装＜br /＞ 　　まとめ＜br /＞ ＜strong＞第16章：Nervesの概要＜/strong＞＜br /＞ 　　Nervesとは何か＜br /＞ 　　Nervesの動作するIoTボード＜br /＞ 　　まとめ＜br /＞ ＜strong＞第17章：Nervesでの開発の進め方＜/strong＞＜br /＞ 　　用意するもの＜br /＞ 　　Nervesプロジェクトの基本的な開発の進め方＜br /＞ 　　まとめ＜br /＞ ＜strong＞第18章：Elixir Circuitsによるモジュールの制御＜/strong＞＜br /＞ 　　Elixir Circuitsとは何か──Elixir/Nerves向けのモジュール制御ライブラリ＜br /＞ 　　モジュールの通信方式＜br /＞ 　　用意するもの＜br /＞ 　　Elixir Circuitsの使い方＜br /＞ 　　まとめ＜br /＞ ＜strong＞第19章：実践的なIoTアプリケーションの開発＜/strong＞＜br /＞ 　　開発するもの＜br /＞ 　　データ受け取りサーバの作成＜br /＞ 　　データのリアルタイム表示部の作成＜br /＞ 　　データ送信モジュールの作成＜br /＞ 　　ボタンの押下によるデータ測定＜br /＞ 　　まとめ＜/p＞ ＜h2＞＜strong＞■著者プロフィール＜/strong＞＜/h2＞ ＜p＞＜strong＞栗林 健太郎＜/strong＞：GMOペパボ株式会社で取締役CTOを務めるかたわら、北陸先端科学技術大学院大学博士後期課程に在学中の社会人学生でもあります。IoTシステムへのElixirの応用について研究しています。Erlang/OTPとElixirは、基盤としてのErlangの誕生から40年近く経った今も常に未来を指し示しているところが好きです。＜br /＞ ＜strong＞大原 常徳＜/strong＞：株式会社ドリコムでSRE部門のマネージャーをしています。プライベートではErlangを、仕事ではElixirとRubyとHCLを書いています。tokyo.exというElixirのコミュニティを運営しています。＜br /＞ ＜strong＞大聖寺谷 一樹＜/strong＞：本業では主にKotlinを使った開発していますが、副業でElixirやElmを触ったりしているなんちゃってアルケミスト。Elixirの好きなところはイミュータブルなところとパターンマッチ。＜br /＞ ＜strong＞山内 修＜/strong＞：名乗るほどのものではございませんが、山内修です。日本マイクロソフト賞4受賞。Elixir本体、Ectoに貢献歴あり。We are the alchemists, my friends!Elixirの好きなところは、＞とコミュニティがあたたかいところ。＜br /＞ ＜strong＞齋藤 和也＜/strong＞：Webのサーバサイド開発やクラウドインフラ構築が得意なエンジニア。普段はRuby on Railsを使うことが多いですが、Elixir/Phoenixのお仕事や情報発信もしています。複数社で技術顧問を務めています。＜br /＞ ＜strong＞隆藤 唯章＜/strong＞：僧職系フリーランスプログラマーやってます。前はRailsがメインでしたが、現在はPhoenixメインでお仕事をしています。ElixirMobileというElixirのコミュニティのオーガナイザーをしています。最近はElixirでモバイルアプリの開発、モバイルアプリと機械学習との連携についての研究を行っています。＜br /＞ ＜strong＞高瀬 英希＜/strong＞：旧くからの組込み屋さん、最近の言い方ではIoT屋さん。ElixirだけでIoTシステムをすべからく包括的に開発できたら楽しい世界になると信じて研究を進めています。Elixir完全に理解したい。ROS（Robot Opera画面が切り替わりますので、しばらくお待ち下さい。 ※ご購入は、楽天kobo商品ページからお願いします。※切り替わらない場合は、こちら をクリックして下さい。 ※このページからは注文できません。",
        itemCode: "rakutenkobo-ebooks:23263158",
        itemName:
          "Elixir実践入門──基本文法、Web開発、機械学習、IoT【電子書籍】[ 栗林 健太郎 ]",
        itemPrice: 3740,
        itemPriceBaseField: "item_price_min3",
        itemPriceMax1: 3740,
        itemPriceMax2: 3740,
        itemPriceMax3: 3740,
        itemPriceMin1: 3740,
        itemPriceMin2: 3740,
        itemPriceMin3: 3740,
        itemUrl:
          "https://item.rakuten.co.jp/rakutenkobo-ebooks/5029030836de3b37b957209d1eb58549/?rafcid=wsc_i_is_1006740518069790219",
        mediumImageUrls: [
          {
            imageUrl:
              "https://thumbnail.image.rakuten.co.jp/@0_mall/rakutenkobo-ebooks/cabinet/0066/2000014650066.jpg?_ex=128x128",
          },
        ],
        pointRate: 1,
        pointRateEndTime: "",
        pointRateStartTime: "",
        postageFlag: 0,
        reviewAverage: 0,
        reviewCount: 0,
        shipOverseasArea: "",
        shipOverseasFlag: 0,
        shopAffiliateUrl: "",
        shopCode: "rakutenkobo-ebooks",
        shopName: "楽天Kobo電子書籍ストア",
        shopOfTheYearFlag: 0,
        shopUrl:
          "https://www.rakuten.co.jp/rakutenkobo-ebooks/?rafcid=wsc_i_is_1006740518069790219",
        smallImageUrls: [
          {
            imageUrl:
              "https://thumbnail.image.rakuten.co.jp/@0_mall/rakutenkobo-ebooks/cabinet/0066/2000014650066.jpg?_ex=64x64",
          },
        ],
        startTime: "",
        tagIds: [],
        taxFlag: 0,
      },
    },
    {
      Item: {
        affiliateRate: 3,
        affiliateUrl: "",
        asurakuArea: "",
        asurakuClosingTime: "",
        asurakuFlag: 0,
        availability: 1,
        catchcopy: "　",
        creditCardFlag: 1,
        endTime: "",
        genreId: "209112",
        giftFlag: 0,
        imageFlag: 1,
        itemCaption:
          "著者谷拓樹(著)出版社インプレス発売日2014年08月ISBN9784844336358ページ数215Pキーワードうえぶせいさくしやのためのしーえすえすせつけい ウエブセイサクシヤノタメノシーエスエスセツケイ たに ひろき タニ ヒロキ9784844336358内容紹介予測しやすい、保守しやすい、最利用しやすい、拡張しやすい—コンポーネントやCSSプリプロセッサを意識した設計・管理の実践など、「ちゃんとCSSを書く」ためのプロの考え方を徹底解説！※本データはこの商品が発売された時点の情報です。目次第1章 CSSにおける設計とは/第2章 CSSの基本を振り返る/第3章 コンポーネント設計のアイデア/第4章 コンポーネント設計の実践/第5章 CSSプリプロセッサを用いた設計と管理/第6章 コンポーネントの運用に必要なツール/第7章 Web Componentsの可能性",
        itemCode: "booxstore:11337548",
        itemName:
          "Web制作者のためのCSS設計の教科書 モダンWeb開発に欠かせない「修正しやすいCSS」の設計手法／谷拓樹【3000円以上送料無料】",
        itemPrice: 2420,
        itemPriceBaseField: "item_price_min3",
        itemPriceMax1: 2420,
        itemPriceMax2: 2420,
        itemPriceMax3: 2420,
        itemPriceMin1: 2420,
        itemPriceMin2: 2420,
        itemPriceMin3: 2420,
        itemUrl:
          "https://item.rakuten.co.jp/booxstore/bk-4844336355/?rafcid=wsc_i_is_1006740518069790219",
        mediumImageUrls: [
          {
            imageUrl:
              "https://thumbnail.image.rakuten.co.jp/@0_mall/booxstore/cabinet/00592/bk4844336355.jpg?_ex=128x128",
          },
        ],
        pointRate: 1,
        pointRateEndTime: "",
        pointRateStartTime: "",
        postageFlag: 1,
        reviewAverage: 0,
        reviewCount: 0,
        shipOverseasArea: "",
        shipOverseasFlag: 0,
        shopAffiliateUrl: "",
        shopCode: "booxstore",
        shopName: "bookfan 1号店 楽天市場店",
        shopOfTheYearFlag: 1,
        shopUrl:
          "https://www.rakuten.co.jp/booxstore/?rafcid=wsc_i_is_1006740518069790219",
        smallImageUrls: [
          {
            imageUrl:
              "https://thumbnail.image.rakuten.co.jp/@0_mall/booxstore/cabinet/00592/bk4844336355.jpg?_ex=64x64",
          },
        ],
        startTime: "",
        tagIds: [],
        taxFlag: 0,
      },
    },
  ];
  const [items, setItems] = useState(mockDataItems);

  const [searchTerm, setSearchTerm] = useState(""); // 初期検索キーワード
  const handleSubmit = (e: any) => {
    e.preventDefault(); // ページリロードを防ぐ
    fetchItems(searchTerm); // 検索実行
  };


  return (
    <div className="container mx-auto max-w-[1000px] p-4">
      <form onSubmit={handleSubmit}>
        <input
         type="text"
         value={searchTerm}
         onChange={(e) =>setSearchTerm(e.target.value)}
         className="w-full p-2 border border-grey-300 rounded"
         />
        <button
         type="submit"
         className="bq=-blue-500 text-white p-2 rounded mt-2"
        >
         検索
        </button>
      </form>

      <div className="flex flex-wrap gap-4 flex justify-center">
        {items.map((item,index) => 
        <Card 
         key={index} 
         name={item.Item.itemName} 
         url={item.Item.itemUrl} 
         image={item.Item.mediumImageUrls[0].imageUrl}
        />)}
      </div>
    </div>
  );
}
