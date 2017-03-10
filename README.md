# SmileEzEEPhoneFormFieldBundle

[![SensioLabsInsight](https://insight.sensiolabs.com/projects/4a76bf33-98e1-49dc-ad6b-e7ca71b5bdda/mini.png)](https://insight.sensiolabs.com/projects/4a76bf33-98e1-49dc-ad6b-e7ca71b5bdda)

Add new eZStudio Form Field named *Phone* displaying select field with country list

## Installation

### Get the bundle using composer

Add SmileEzEEPhoneFormFieldBundle by running this command from the terminal at the root of
your eZStudio project:

```bash
composer require smile/ezee-phoneformfield-bundle
```


### Enable the bundle

To start using the bundle, register the bundle in your application's kernel class:

```php
// ezpublish/EzPublishKernel.php
public function registerBundles()
{
    $bundles = array(
        // ...
        new Smile\EzEEPhoneFormFieldBundle\SmileEzEECountryFormFieldBundle(),
        // ...
    );
}
```

### Add  assetic

 ```
 {% javascripts
     ...
     'bundles/smileezeephoneformfield/js/smileform_phone.js'
 %}
    <script type="text/javascript" src="{{ asset_url }}"></script>
{% endjavascripts %}
```
