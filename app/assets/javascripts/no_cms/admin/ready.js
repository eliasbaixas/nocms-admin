

$(document).ready(function() {

  $('#log-bar').on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass('expanded');
  });

  $('#js-collapse-to-minimun').on('click', function(e) {
    e.preventDefault();
    $('body').removeClass('col-2-only');
    $('body').toggleClass('col-1-only');
  });

  $('#js-expand-col-2').on('click', function(e) {
    e.preventDefault();
    $('body').removeClass('col-1-only');
    $('body').toggleClass('col-2-only');
  });

  // Mark current
  $('aside#col-1, aside#col-2').on('click', 'a', function(e) {
    $(this).closest('.content').find('li').removeClass('current');
    $(this).parent().addClass('current');
  });

  // Add Class parent
  $('aside#col-1 li > ul, aside#col-2 li > ul').each(function(){
    $(this).parent().addClass('parent');
  });

  // Search button
  $('#js-search').on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass('active');
    $('.search-bar').toggle();
  });

  // Filter button
  $('#js-filter').on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass('active');
    $('.filter-bar').toggle();
  });

  // PREVIEW
  $('a[data-preview]').on('click', function(e) {
    e.preventDefault();
    var form = $(this).closest('form'),
      submit = form.find('input[type=submit]'),
      target = form.attr('target'),
      action = form.attr('action'),
      new_action = $(this).attr('href');

    target = (typeof(target) == 'undefined') ? '' : target;
    action = (typeof(action) == 'undefined') ? '' : action;

    $('body').addClass('previewed');
    form.attr('target', 'prev-frame');
    form.attr('action', new_action);
    submit.click();
    form.attr('target', target);
    form.attr('action', action);

  });

  $('#responsive').change(function(){
    $('[name=prev-frame]').prop('class', $(this).find(':selected').val());
  });

  $('#preview').on('click', '.close', function () {
    $('body').removeClass('previewed');
  });

  // Go full-screen in content area
  $('#js-go-full-screen').on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass('active');
    $('body').removeClass('col-1-only').toggleClass('go-full-screen');
  });

  // Show mini-options
/*  $('aside#col-2 .content').on('mouseenter', 'a', function(e) {
    e.preventDefault();
    var
      el = $(this),
      h = el.height(),
      t =
    $('#mini-options').show();
  });*/


});
