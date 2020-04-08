# frozen_string_literal: true

require 'spec_helper'
require 'action_view'

RSpec.describe Amat::Node::ApmTableOfContents do
  context 'with modern toc node (anchors attr)' do
    let(:input) do
      {
        'content' => [
          {
            'type' => 'apm_table_of_contents',
            'attrs' => {
              'anchors' => [
                {
                  'level' => 1,
                  'linkText' => 'Heading 1',
                  'anchor' => 'h1_heading_1'
                },
                {
                  'level' => 2,
                  'linkText' => 'Custom linkText',
                  'anchor' => 'custom_anchor'
                }
              ]
            }
          },
          {
            'attrs' => {
              'level' => 1,
              'anchor' => 'h1_heading_1',
              'linkText' => 'Heading 1'
            },
            'content' => [
              {
                'text' => 'Heading 1',
                'type' => 'text'
              }
            ],
            'type' => 'heading'
          },
          {
            'content' => [
              {
                'text' => 'A paragraph',
                'type' => 'text'
              }
            ],
            'type' => 'paragraph'
          },
          {
            'attrs' => {
              'level' => 2,
              'linkText' => 'Custom linkText',
              'anchor' => 'custom_anchor'
            },
            'content' => [
              {
                'text' => 'Heading 2',
                'type' => 'text'
              }
            ],
            'type' => 'heading'
          },
          {
            'content' => [
              {
                'text' => 'more filler',
                'type' => 'text'
              }
            ],
            'type' => 'paragraph'
          },
          {
            'attrs' => {
              'level' => 3,
              'linkText' => 'Going to be ignored',
              'anchor' => 'not_used_in_this_test'

            },
            'content' => [
              {
                'text' => 'Heading 3',
                'type' => 'text'
              }
            ],
            'type' => 'heading'
          }
        ],
        'type' => 'doc'
      }
    end
    let(:node) { Amat.new(input) }

    it_behaves_like 'a node wrapper' do
      let(:subject) { node }

      let(:html) do
        <<~HTMLRESPONSE
          <ul class="table-of-contents">
            <li class="table-of-contents-level-1"><a href="#h1_heading_1">Heading 1</a>
            <li class="table-of-contents-level-2"><a href="#custom_anchor">Custom linkText</a>
          </ul>

          <h1 id="h1_heading_1">Heading 1</h1>
          <p>A paragraph</p>
          <h2 id="custom_anchor">Heading 2</h2>
          <p>more filler</p>
          <h3 id="not_used_in_this_test">Heading 3</h3>
        HTMLRESPONSE
      end

      let(:text) do
        <<~TEXTRESPONSE
          Table of Contents:
           Heading 1
            Custom linkText

          Heading 1

          A paragraph

          Heading 2

          more filler

          Heading 3
        TEXTRESPONSE
      end
    end
  end

  context 'with classic toc node (depth attr, no anchors attr)' do
    let(:input) do
      {
        'content' => [
          {
            'type' => 'apm_table_of_contents',
            'attrs' => {
              'depth' => 6
            }
          },
          {
            'attrs' => {
              'level' => 1
            },
            'content' => [
              {
                'text' => 'Heading 1',
                'type' => 'text'
              }
            ],
            'type' => 'heading'
          },
          {
            'content' => [
              {
                'text' => 'A paragraph',
                'type' => 'text'
              }
            ],
            'type' => 'paragraph'
          },
          {
            'attrs' => {
              'level' => 2
            },
            'content' => [
              {
                'text' => 'Heading 2',
                'type' => 'text'
              }
            ],
            'type' => 'heading'
          },
          {
            'content' => [
              {
                'text' => 'more filler',
                'type' => 'text'
              }
            ],
            'type' => 'paragraph'
          },
          {
            'attrs' => {
              'level' => 3
            },
            'content' => [
              {
                'text' => 'Heading 3',
                'type' => 'text'
              }
            ],
            'type' => 'heading'
          }
        ],
        'type' => 'doc'
      }
    end

    let(:node) { Amat.new(input) }
    it_behaves_like 'a node wrapper' do
      let(:subject) { node }

      let(:html) do
        <<~HTMLRESPONSE
          <ul class="table-of-contents">
            <li class="table-of-contents-level-1"><a href="#h1_heading_1">Heading 1</a>
            <li class="table-of-contents-level-2"><a href="#h2_heading_2">Heading 2</a>
            <li class="table-of-contents-level-3"><a href="#h3_heading_3">Heading 3</a>
          </ul>

          <h1 id="h1_heading_1">Heading 1</h1>
          <p>A paragraph</p>
          <h2 id="h2_heading_2">Heading 2</h2>
          <p>more filler</p>
          <h3 id="h3_heading_3">Heading 3</h3>
        HTMLRESPONSE
      end

      let(:text) do
        <<~TEXTRESPONSE
          Table of Contents:
           Heading 1
            Heading 2
             Heading 3

          Heading 1

          A paragraph

          Heading 2

          more filler

          Heading 3
        TEXTRESPONSE
      end
    end

    it_behaves_like 'a template-enabled node wrapper' do
      let(:template_name) { '_apm_table_of_contents.html.erb' }
      let(:template_output) do
        <<~EXPECTED_HTML
          Table of Contents:
           Heading 1
            Heading 2
             Heading 3


          <h1 id="h1_heading_1">Heading 1</h1>
          <p>A paragraph</p>
          <h2 id="h2_heading_2">Heading 2</h2>
          <p>more filler</p>
          <h3 id="h3_heading_3">Heading 3</h3>
        EXPECTED_HTML
      end
      let(:subject) { Amat.new(input) }
    end

    it_behaves_like 'it has media links' do
      let(:subject) { node }

      let(:expected) { [] }
    end

    it 'filters based on depth' do
      input = {
        'content' => [
          {
            'type' => 'apm_table_of_contents',
            'attrs' => {
              'depth' => 2
            }
          },
          {
            'attrs' => {
              'level' => 1
            },
            'content' => [
              {
                'text' => 'Heading 1',
                'type' => 'text'
              }
            ],
            'type' => 'heading'
          },
          {
            'content' => [
              {
                'text' => 'A paragraph',
                'type' => 'text'
              }
            ],
            'type' => 'paragraph'
          },
          {
            'attrs' => {
              'level' => 2
            },
            'content' => [
              {
                'text' => 'Heading 2',
                'type' => 'text'
              }
            ],
            'type' => 'heading'
          },
          {
            'content' => [
              {
                'text' => 'more filler',
                'type' => 'text'
              }
            ],
            'type' => 'paragraph'
          },
          {
            'attrs' => {
              'level' => 3
            },
            'content' => [
              {
                'text' => 'Heading 3',
                'type' => 'text'
              }
            ],
            'type' => 'heading'
          }
        ],
        'type' => 'doc'
      }
      expected_html = <<~HTMLRESPONSE
        <ul class="table-of-contents">
          <li class="table-of-contents-level-1"><a href="#h1_heading_1">Heading 1</a>
          <li class="table-of-contents-level-2"><a href="#h2_heading_2">Heading 2</a>
        </ul>

        <h1 id="h1_heading_1">Heading 1</h1>
        <p>A paragraph</p>
        <h2 id="h2_heading_2">Heading 2</h2>
        <p>more filler</p>
        <h3 id="h3_heading_3">Heading 3</h3>
      HTMLRESPONSE

      expect(Amat.new(input).as_html).to eql expected_html
    end

    it_behaves_like 'an empty node wrapper' do
      let(:subject) do
        # Table of Contents nodes depend on having a larger doc context to
        # look for headers so we have to jump through some hoops here to get
        # a toc node out of a doc
        node.nodes.first
      end

      let(:empty_subject) do
        input = {
          'content' => [
            {
              'type' => 'apm_table_of_contents',
              'attrs' => {
                'depth' => 6
              }
            },
            {
              'content' => [
                {
                  'text' => 'Feeling empty',
                  'type' => 'text'
                }
              ],
              'type' => 'paragraph'
            }
          ],
          'type' => 'doc'
        }

        doc = Amat.new(input)
        doc.nodes.first
      end
    end
  end
end
